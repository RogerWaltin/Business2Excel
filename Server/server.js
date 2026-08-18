import express from "express";
import "dotenv/config";
import { Resend } from "resend";
import cors from "cors";
import he from "he";
import validator from "validator";
import { rateLimit } from "express-rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://business2excel.surge.sh"
  ]
}));

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions. Please try again later."
  }
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      howDidYouHear,
      message,
      turnstileToken
    } = req.body;

    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof mobile !== "string" ||
      typeof howDidYouHear !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data."
      });
    }

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !mobile.trim() ||
      !howDidYouHear.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    if (!validator.isEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address."
      });
    }

    if (
      firstName.length > 50 ||
      lastName.length > 50 ||
      email.length > 254 ||
      mobile.length > 30 ||
      howDidYouHear.length > 50 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields are too long."
      });
    }

    if (!turnstileToken || typeof turnstileToken !== "string") {
      return res.status(400).json({
        success: false,
        message: "Turnstile verification is required."
      });
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken
        })
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return res.status(400).json({
        success: false,
        message: "Turnstile verification failed. Please try again."
      });
    }

    const safeFirstName = he.encode(firstName);
    const safeLastName = he.encode(lastName);
    const safeEmail = he.encode(email);
    const safeMobile = he.encode(mobile);
    const safeHowDidYouHear = he.encode(howDidYouHear);
    const safeMessage = he.encode(message);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "harriswaltinjoy@gmail.com",
      subject: `New Contact Form Submission from ${safeFirstName} ${safeLastName}`,
      html: `
                <h2>New Contact Form Submission</h2>

                <p><strong>First Name:</strong> ${safeFirstName}</p>
                <p><strong>Last Name:</strong> ${safeLastName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Mobile:</strong> ${safeMobile}</p>
                <p><strong>How did they hear about us?</strong> ${safeHowDidYouHear}</p>

                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
            `
    });

    if (error) {
      return res.status(400).json({
        success: false,
        error
      });
    }

    res.status(200).json({
      success: true,
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express server listening on port ${PORT}`);
});
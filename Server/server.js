import express from "express";
import "dotenv/config";
import { Resend } from "resend";
import cors from "cors";
import he from "he";

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      howDidYouHear,
      message
    } = req.body;

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

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
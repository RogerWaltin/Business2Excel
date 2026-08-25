import { sendEmail } from "../services/emailService.js";
import { verifyTurnstile } from "../services/turnstileService.js";
import {
    isValidEmail,
    isValidString,
    isWithinMaxLength,
    escapeHtml
} from "./validation.js";

export const submitForm = async ({
    req,
    res,
    fields,
    maxLengths,
    subject,
    emailTitle,
    emailFields,
    messageLabel
}) => {
    try {
        const body = req.body;

        // Extract the expected form fields
        const values = {};

        for (const field of fields) {
            values[field] = body[field];
        }

        const { turnstileToken } = body;

        // Check required fields
        for (const field of fields) {
            if (!isValidString(values[field])) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required."
                });
            }
        }

        // Email validation
        if (fields.includes("email") && !isValidEmail(values.email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        // Maximum length validation
        for (const field of fields) {
            if (
                maxLengths[field] &&
                !isWithinMaxLength(values[field], maxLengths[field])
            ) {
                return res.status(400).json({
                    success: false,
                    message: "One or more fields are too long."
                });
            }
        }

        // Turnstile token validation
        if (!turnstileToken || typeof turnstileToken !== "string") {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification is required."
            });
        }

        // Verify Turnstile with Cloudflare
        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        // Escape every value before inserting it into the HTML email
        const safeValues = {};

        for (const field of fields) {
            safeValues[field] = escapeHtml(values[field]);
        }

        // Build the email HTML
        const emailHtml = emailFields
            .map(({ label, field }) => {
                return `<p><strong>${label}:</strong> ${safeValues[field]}</p>`;
            })
            .join("\n");

        const messageHtml = messageLabel
            ? `
        <p><strong>${messageLabel}:</strong></p>
        <p>${safeValues.message}</p>
      `
            : "";

        const data = await sendEmail({
            subject: subject(safeValues),
            html: `
        <h2>${emailTitle}</h2>

        ${emailHtml}

        ${messageHtml}
      `
        });

        return res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
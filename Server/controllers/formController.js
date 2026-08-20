import { sendEmail } from "../services/emailService.js";
import { verifyTurnstile } from "../services/turnstileService.js";
import {
    isValidEmail,
    isValidString,
    isWithinMaxLength,
    escapeHtml
} from "../utils/validation.js";

export const submitContactForm = async (req, res) => {
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
            !isValidString(firstName) ||
            !isValidString(lastName) ||
            !isValidString(email) ||
            !isValidString(mobile) ||
            !isValidString(howDidYouHear) ||
            !isValidString(message)
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (
            !isWithinMaxLength(firstName, 50) ||
            !isWithinMaxLength(lastName, 50) ||
            !isWithinMaxLength(email, 254) ||
            !isWithinMaxLength(mobile, 30) ||
            !isWithinMaxLength(howDidYouHear, 50) ||
            !isWithinMaxLength(message, 5000)
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

        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        const safeFirstName = escapeHtml(firstName);
        const safeLastName = escapeHtml(lastName);
        const safeEmail = escapeHtml(email);
        const safeMobile = escapeHtml(mobile);
        const safeHowDidYouHear = escapeHtml(howDidYouHear);
        const safeMessage = escapeHtml(message);

        const data = await sendEmail({
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
};

export const submitCertificationForm = async (req, res) => {
    try {
        const {
            organizationName,
            contactName,
            email,
            industry,
            organizationSize,
            message,
            turnstileToken
        } = req.body;

        if (
            !isValidString(organizationName) ||
            !isValidString(contactName) ||
            !isValidString(email) ||
            !isValidString(industry) ||
            !isValidString(organizationSize) ||
            !isValidString(message)
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (
            !isWithinMaxLength(organizationName, 150) ||
            !isWithinMaxLength(contactName, 100) ||
            !isWithinMaxLength(email, 254) ||
            !isWithinMaxLength(industry, 100) ||
            !isWithinMaxLength(organizationSize, 50) ||
            !isWithinMaxLength(message, 5000)
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

        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        const safeOrganizationName = escapeHtml(organizationName);
        const safeContactName = escapeHtml(contactName);
        const safeEmail = escapeHtml(email);
        const safeIndustry = escapeHtml(industry);
        const safeOrganizationSize = escapeHtml(organizationSize);
        const safeMessage = escapeHtml(message);

        const data = await sendEmail({
            subject: `New Kingdom Certification Application from ${safeOrganizationName}`,
            html: `
        <h2>New Kingdom Certification Application</h2>

        <p><strong>Organization Name:</strong> ${safeOrganizationName}</p>
        <p><strong>Primary Contact Name:</strong> ${safeContactName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Industry / Sector:</strong> ${safeIndustry}</p>
        <p><strong>Organization Size:</strong> ${safeOrganizationSize}</p>

        <p><strong>Organization, Mission & Certification Goals:</strong></p>
        <p>${safeMessage}</p>
      `
        });

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
};

export const submitConsultationForm = async (req, res) => {
    try {
        const {
            fullName,
            email,
            organization,
            message,
            turnstileToken
        } = req.body;

        if (
            !isValidString(fullName) ||
            !isValidString(email) ||
            !isValidString(organization) ||
            !isValidString(message)
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (
            !isWithinMaxLength(fullName, 100) ||
            !isWithinMaxLength(email, 254) ||
            !isWithinMaxLength(organization, 150) ||
            !isWithinMaxLength(message, 5000)
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

        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        const safeFullName = escapeHtml(fullName);
        const safeEmail = escapeHtml(email);
        const safeOrganization = escapeHtml(organization);
        const safeMessage = escapeHtml(message);

        const data = await sendEmail({
            subject: `New Consultation Request from ${safeFullName}`,
            html: `
        <h2>New Consultation Request</h2>

        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>

        <p><strong>Goals and Challenges:</strong></p>
        <p>${safeMessage}</p>
      `
        });

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
};

export const submitNetworkForm = async (req, res) => {
    try {
        const {
            fullName,
            email,
            organization,
            role,
            message,
            turnstileToken
        } = req.body;

        if (
            !isValidString(fullName) ||
            !isValidString(email) ||
            !isValidString(organization) ||
            !isValidString(role) ||
            !isValidString(message)
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (
            !isWithinMaxLength(fullName, 100) ||
            !isWithinMaxLength(email, 254) ||
            !isWithinMaxLength(organization, 150) ||
            !isWithinMaxLength(role, 100) ||
            !isWithinMaxLength(message, 5000)
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

        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        const safeFullName = escapeHtml(fullName);
        const safeEmail = escapeHtml(email);
        const safeOrganization = escapeHtml(organization);
        const safeRole = escapeHtml(role);
        const safeMessage = escapeHtml(message);

        const data = await sendEmail({
            subject: `New Kingdom Business Network Application from ${safeFullName}`,
            html: `
        <h2>New Kingdom Business Network Application</h2>

        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        <p><strong>Role / Position:</strong> ${safeRole}</p>

        <p><strong>About the Applicant / Reason for Joining:</strong></p>
        <p>${safeMessage}</p>
      `
        });

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
};

export const submitTrainingEventsForm = async (req, res) => {
    try {
        const {
            fullName,
            email,
            organization,
            areaOfInterest,
            message,
            turnstileToken
        } = req.body;

        if (
            !isValidString(fullName) ||
            !isValidString(email) ||
            !isValidString(organization) ||
            !isValidString(areaOfInterest) ||
            !isValidString(message)
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (
            !isWithinMaxLength(fullName, 100) ||
            !isWithinMaxLength(email, 254) ||
            !isWithinMaxLength(organization, 150) ||
            !isWithinMaxLength(areaOfInterest, 50) ||
            !isWithinMaxLength(message, 5000)
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

        const turnstileVerified = await verifyTurnstile(turnstileToken);

        if (!turnstileVerified) {
            return res.status(400).json({
                success: false,
                message: "Turnstile verification failed. Please try again."
            });
        }

        const safeFullName = escapeHtml(fullName);
        const safeEmail = escapeHtml(email);
        const safeOrganization = escapeHtml(organization);
        const safeAreaOfInterest = escapeHtml(areaOfInterest);
        const safeMessage = escapeHtml(message);

        const data = await sendEmail({
            subject: `New Training & Events Registration from ${safeFullName}`,
            html: `
        <h2>New Training & Events Registration</h2>

        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        <p><strong>Area of Interest:</strong> ${safeAreaOfInterest}</p>

        <p><strong>Goals:</strong></p>
        <p>${safeMessage}</p>
      `
        });

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
};
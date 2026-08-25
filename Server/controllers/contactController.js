import { submitForm } from "../utils/formSubmission.js";

export const submitContactForm = async (req, res) => {
    return submitForm({
        req,
        res,

        fields: [
            "firstName",
            "lastName",
            "email",
            "mobile",
            "howDidYouHear",
            "message"
        ],

        maxLengths: {
            firstName: 50,
            lastName: 50,
            email: 254,
            mobile: 30,
            howDidYouHear: 50,
            message: 5000
        },

        subject: ({ firstName, lastName }) =>
            `New Contact Form Submission from ${firstName} ${lastName}`,

        emailTitle: "New Contact Form Submission",

        emailFields: [
            {
                label: "First Name",
                field: "firstName"
            },
            {
                label: "Last Name",
                field: "lastName"
            },
            {
                label: "Email",
                field: "email"
            },
            {
                label: "Mobile",
                field: "mobile"
            },
            {
                label: "How did they hear about us?",
                field: "howDidYouHear"
            }
        ],

        messageLabel: "Message"
    });
};
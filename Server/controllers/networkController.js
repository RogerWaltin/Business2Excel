import { submitForm } from "../utils/formSubmission.js";

export const submitNetworkForm = async (req, res) => {
    return submitForm({
        req,
        res,

        fields: [
            "fullName",
            "email",
            "organization",
            "role",
            "message"
        ],

        maxLengths: {
            fullName: 100,
            email: 254,
            organization: 150,
            role: 100,
            message: 5000
        },

        subject: ({ fullName }) =>
            `New Kingdom Business Network Application from ${fullName}`,

        emailTitle: "New Kingdom Business Network Application",

        emailFields: [
            {
                label: "Full Name",
                field: "fullName"
            },
            {
                label: "Email",
                field: "email"
            },
            {
                label: "Organization",
                field: "organization"
            },
            {
                label: "Role / Position",
                field: "role"
            }
        ],

        messageLabel: "About the Applicant / Reason for Joining"
    });
};
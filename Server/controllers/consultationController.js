import { submitForm } from "../utils/formSubmission.js";

export const submitConsultationForm = async (req, res) => {
    return submitForm({
        req,
        res,

        fields: [
            "fullName",
            "email",
            "organization",
            "message"
        ],

        maxLengths: {
            fullName: 100,
            email: 254,
            organization: 150,
            message: 5000
        },

        subject: ({ fullName }) =>
            `New Consultation Request from ${fullName}`,

        emailTitle: "New Consultation Request",

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
            }
        ],

        messageLabel: "Goals and Challenges"
    });
};
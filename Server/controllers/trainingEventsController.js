import { submitForm } from "../utils/formSubmission.js";

export const submitTrainingEventsForm = async (req, res) => {
    return submitForm({
        req,
        res,

        fields: [
            "fullName",
            "email",
            "organization",
            "areaOfInterest",
            "message"
        ],

        maxLengths: {
            fullName: 100,
            email: 254,
            organization: 150,
            areaOfInterest: 50,
            message: 5000
        },

        subject: ({ fullName }) =>
            `New Training & Events Registration from ${fullName}`,

        emailTitle: "New Training & Events Registration",

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
                label: "Area of Interest",
                field: "areaOfInterest"
            }
        ],

        messageLabel: "Goals"
    });
};
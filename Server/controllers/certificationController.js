import { submitForm } from "../utils/formSubmission.js";

export const submitCertificationForm = async (req, res) => {
    return submitForm({
        req,
        res,

        fields: [
            "organizationName",
            "contactName",
            "email",
            "industry",
            "organizationSize",
            "message"
        ],

        maxLengths: {
            organizationName: 150,
            contactName: 100,
            email: 254,
            industry: 100,
            organizationSize: 50,
            message: 5000
        },

        subject: ({ organizationName }) =>
            `New Kingdom Certification Application from ${organizationName}`,

        emailTitle: "New Kingdom Certification Application",

        emailFields: [
            {
                label: "Organization Name",
                field: "organizationName"
            },
            {
                label: "Primary Contact Name",
                field: "contactName"
            },
            {
                label: "Email",
                field: "email"
            },
            {
                label: "Industry / Sector",
                field: "industry"
            },
            {
                label: "Organization Size",
                field: "organizationSize"
            }
        ],

        messageLabel: "Organization, Mission & Certification Goals"
    });
};
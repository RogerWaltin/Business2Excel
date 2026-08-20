import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ subject, html }) => {
    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "harriswaltinjoy@gmail.com",
        subject,
        html
    });

    if (error) {
        throw new Error(error.message || "Failed to send email");
    }

    return data;
};
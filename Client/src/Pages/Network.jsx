import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";

export default function Network() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        organization: "",
        role: "",
        message: ""
    })

    const {
        setTurnstileToken,
        turnstileRef,
        isSubmitting,
        submitStatus,
        setSubmitStatus,
        handleSubmit
    } = useFormSubmission("/api/network")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        handleSubmit(e, formData, () => {
            setFormData({
                fullName: "",
                email: "",
                organization: "",
                role: "",
                message: ""
            })
        })
    }

    return (
        <div className="bg-zinc-950 text-white">

            <FormSubmissionModal
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                successTitle="Application Sent!"
                successMessage="Thank you for your interest in joining the Kingdom Business Network. We'll get back to you soon."
                errorTitle="Unable to Send"
                errorMessage="Something went wrong while sending your application. Please try again."
                verificationTitle="Verification Required"
                verificationMessage="Please complete the verification before submitting your application."
                onClose={() => setSubmitStatus(null)}
            />

            {/* Hero */}

            <section className="py-20 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-primary uppercase tracking-widest text-sm">
                        Kingdom Business Network
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Join A Community Of
                        <span className="text-primary block">
                            Kingdom-Minded Leaders
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
                        Connect with entrepreneurs, executives, consultants,
                        investors, ministry leaders, and innovators who share
                        a vision for Kingdom-centered transformation and impact.
                    </p>

                </div>

            </section>

            {/* Application Form */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-center">
                            Join the Movement
                        </h2>

                        <form
                            onSubmit={handleFormSubmit}
                            className="space-y-6 mt-10"
                            autoComplete="off"
                        >

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Organization"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Role / Position"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Tell us a little about yourself and why you would like to join the network..."
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary resize-none"
                            />

                            <FormTurnstile
                                ref={turnstileRef}
                                onSuccess={setTurnstileToken}
                                onExpire={() => setTurnstileToken("")}
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`${customButton} w-full disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                Submit Application
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-20">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Together We Can Create
                        <span className="text-primary block">
                            Lasting Kingdom Impact
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                        Become part of a growing network committed to leadership,
                        stewardship, transformation, and Kingdom influence.
                    </p>

                </div>

            </section>

        </div>
    )
}
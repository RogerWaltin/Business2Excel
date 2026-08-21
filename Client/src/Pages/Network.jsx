import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";
import Reveal from "../Components/Reveal";

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

            <section className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

                <div className="glow -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

                    <Reveal>

                        <span className="eyebrow justify-center">
                            Kingdom Business Network
                        </span>

                        <h1 className="heading-1 mt-5">
                            Join A Community Of
                            <span className="text-primary block italic">
                                Kingdom-Minded Leaders
                            </span>
                        </h1>

                        <p className="body-text mt-5">
                            Connect with entrepreneurs, executives, consultants,
                            investors, ministry leaders, and innovators who share
                            a vision for Kingdom-centered transformation and impact.
                        </p>

                    </Reveal>

                </div>

            </section>

            {/* Application Form */}

            <section className="py-14 sm:py-16 border-b border-zinc-800/60">

                <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">

                    <Reveal>
                        <div className="card p-6 sm:p-8 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">

                            <h2 className="heading-3 text-center">
                                Join the Movement
                            </h2>

                            <form
                                onSubmit={handleFormSubmit}
                                className="space-y-5 mt-8"
                                autoComplete="off"
                            >

                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="input-field"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="input-field"
                                />

                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Organization"
                                    required
                                    className="input-field"
                                />

                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="Role / Position"
                                    required
                                    className="input-field"
                                />

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us a little about yourself and why you would like to join the network..."
                                    required
                                    className="input-field resize-none"
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
                    </Reveal>

                </div>

            </section>

            {/* CTA */}

            <section className="py-16 sm:py-20 relative overflow-hidden">

                <div className="glow -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

                    <Reveal>

                        <h2 className="heading-1">
                            Together We Can Create
                            <span className="text-primary block italic">
                                Lasting Kingdom Impact
                            </span>
                        </h2>

                        <p className="body-text mt-5">
                            Become part of a growing network committed to leadership,
                            stewardship, transformation, and Kingdom influence.
                        </p>

                    </Reveal>

                </div>

            </section>

        </div>
    )
}

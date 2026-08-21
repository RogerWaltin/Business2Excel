import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";
import Reveal from "../Components/Reveal";

export default function Consultation() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        organization: "",
        message: ""
    })

    const {
        setTurnstileToken,
        turnstileRef,
        isSubmitting,
        submitStatus,
        setSubmitStatus,
        handleSubmit
    } = useFormSubmission("/api/consultation")

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
                message: ""
            })
        })
    }

    return (
        <div className="bg-zinc-950 text-white">

            <FormSubmissionModal
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                successTitle="Request Sent!"
                successMessage="Thank you for requesting a consultation. We'll get back to you soon."
                errorTitle="Unable to Send"
                errorMessage="Something went wrong while sending your consultation request. Please try again."
                verificationTitle="Verification Required"
                verificationMessage="Please complete the verification before submitting your consultation request."
                onClose={() => setSubmitStatus(null)}
            />

            {/* Hero */}

            <section className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

                <div className="glow -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

                    <Reveal>

                        <span className="eyebrow justify-center">
                            Consultation
                        </span>

                        <h1 className="heading-1 mt-5">
                            Begin Your
                            <span className="text-primary block italic">
                                Transformation Journey
                            </span>
                        </h1>

                        <p className="body-text mt-5">
                            Schedule a strategic consultation to explore how
                            Business2excel can help your organization integrate
                            Kingdom principles, leadership excellence, innovation,
                            and lasting impact.
                        </p>

                    </Reveal>

                </div>

            </section>

            {/* Form */}

            <section className="py-14 sm:py-16 border-b border-zinc-800/60">

                <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">

                    <Reveal>
                        <div className="card p-6 sm:p-8 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">

                            <h2 className="heading-3 text-center">
                                Request A Consultation
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

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Tell us about your goals and challenges..."
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
                                    Submit Consultation Request
                                </button>

                            </form>

                        </div>
                    </Reveal>

                </div>

            </section>

            {/* What Happens Next */}

            <section className="py-14 sm:py-16 border-b border-zinc-800/60">

                <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

                    <Reveal className="text-center max-w-2xl mx-auto">

                        <h2 className="heading-2">
                            What Happens Next?
                        </h2>

                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">

                        {[
                            {
                                title: "Initial Discovery",
                                desc: "We learn about your organization, goals, challenges, and opportunities.",
                            },
                            {
                                title: "Strategic Assessment",
                                desc: "We identify areas for Kingdom alignment, leadership growth, and transformation.",
                            },
                            {
                                title: "Recommended Pathway",
                                desc: "Receive tailored recommendations for consulting, certification, training, or mentorship.",
                            },
                        ].map((item, index) => (

                            <Reveal key={item.title} delay={index * 0.08} className="h-full">

                                <div
                                    className="card group h-full p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                                >

                                    <span className="font-display text-sm font-bold text-primary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="text-base font-semibold tracking-tight mt-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">
                                        {item.desc}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>

            {/* Final CTA */}

            <section className="py-16 sm:py-20 relative overflow-hidden">

                <div className="glow -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

                    <Reveal>

                        <h2 className="heading-1">
                            Build A Business That Creates
                            <span className="text-primary block italic">
                                Lasting Kingdom Impact
                            </span>
                        </h2>

                        <p className="body-text mt-5">
                            We look forward to learning more about your vision,
                            your organization, and the transformation you seek.
                        </p>

                    </Reveal>

                </div>

            </section>

        </div>
    )
}

import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";
import Reveal from "../Components/Reveal";

const opportunities = [
    {
        category: "Workshops",
        title: "Practical Training",
        description:
            "Interactive learning experiences focused on implementation, leadership, stewardship, and innovation.",
    },
    {
        category: "Conferences",
        title: "Kingdom Gatherings",
        description:
            "Annual flagship events connecting leaders, entrepreneurs, consultants, and innovators.",
    },
    {
        category: "Webinars",
        title: "Online Learning",
        description:
            "Accessible virtual sessions covering leadership, certification, and transformation topics.",
    },
    {
        category: "Mentorship",
        title: "Guided Growth",
        description:
            "Receive strategic guidance from experienced Kingdom leaders and practitioners.",
    },
]

export default function TrainingEventsHub() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        organization: "",
        areaOfInterest: "",
        message: ""
    })

    const {
        setTurnstileToken,
        turnstileRef,
        isSubmitting,
        submitStatus,
        setSubmitStatus,
        handleSubmit
    } = useFormSubmission("/api/training-events")

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
                areaOfInterest: "",
                message: ""
            })
        })
    }

    return (
        <div className="bg-zinc-950 text-white">

            <FormSubmissionModal
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                successTitle="Registration Sent!"
                successMessage="Thank you for registering your interest. We'll get back to you with more information."
                errorTitle="Unable to Send"
                errorMessage="Something went wrong while sending your registration. Please try again."
                verificationTitle="Verification Required"
                verificationMessage="Please complete the verification before submitting your registration."
                onClose={() => setSubmitStatus(null)}
            />

            {/* Hero */}

            <section className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

                <div className="glow -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

                <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

                    <Reveal>

                        <span className="eyebrow justify-center">
                            Training & Events
                        </span>

                        <h1 className="heading-1 mt-5">
                            Equipping Leaders
                            <span className="text-primary block italic">
                                For Kingdom Impact
                            </span>
                        </h1>

                        <p className="body-text mt-5">
                            Participate in workshops, conferences, webinars, and mentorship
                            opportunities designed to strengthen leadership, stewardship,
                            innovation, and organizational transformation.
                        </p>

                    </Reveal>

                </div>

            </section>

            {/* Opportunities */}

            <section className="py-14 sm:py-16 border-b border-zinc-800/60">

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

                        {opportunities.map((item, index) => (

                            <Reveal key={item.category} delay={index * 0.07} className="h-full">

                                <div
                                    className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                                >

                                    <div className="h-px w-8 bg-primary/60 transition-all duration-300 group-hover:w-14" />

                                    <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-primary mt-4">
                                        {item.category}
                                    </span>

                                    <h3 className="text-lg font-semibold tracking-tight mt-2.5">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">
                                        {item.description}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>

            </section>

            {/* Upcoming Opportunities */}

            {/* <section className="py-16 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Upcoming Opportunities
                        </h2>

                        <p className="text-zinc-400 mt-6">
                            Register your interest and receive updates about future
                            workshops, conferences, webinars, and mentorship programs.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Leadership Workshops</h3>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Kingdom Conferences</h3>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Mentorship Cohorts</h3>
                        </div>

                    </div>

                </div>

            </section> */}

            {/* Registration Form */}

            <section className="py-14 sm:py-16 border-b border-zinc-800/60">

                <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">

                    <Reveal>
                        <div className="card p-6 sm:p-8 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">

                            <h2 className="heading-3 text-center">
                                Join Our Programmes
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
                                    required
                                    placeholder="Full Name"
                                    className="input-field"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email Address"
                                    className="input-field"
                                />

                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    required
                                    placeholder="Organization"
                                    className="input-field"
                                />

                                <select
                                    name="areaOfInterest"
                                    value={formData.areaOfInterest}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                >
                                    <option value="" disabled>
                                        Select Area of Interest
                                    </option>
                                    <option value="Workshops">Workshops</option>
                                    <option value="Conferences">Conferences</option>
                                    <option value="Webinars">Webinars</option>
                                    <option value="Mentorship">Mentorship</option>
                                </select>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us about your goals..."
                                    className="input-field resize-none"
                                    required
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
                                    Submit Registration
                                </button>

                            </form>

                        </div>
                    </Reveal>

                </div>

            </section>

        </div>
    )
}

import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";

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

            <section className="py-20 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-primary uppercase tracking-widest text-sm">
                        Training & Events
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Equipping Leaders
                        <span className="text-primary block">
                            For Kingdom Impact
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
                        Participate in workshops, conferences, webinars, and mentorship
                        opportunities designed to strengthen leadership, stewardship,
                        innovation, and organizational transformation.
                    </p>

                </div>

            </section>

            {/* Opportunities */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {opportunities.map((item) => (

                            <div
                                key={item.category}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                            >

                                <span className="text-primary uppercase text-sm tracking-wider">
                                    {item.category}
                                </span>

                                <h3 className="text-2xl font-bold mt-4">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400 mt-4">
                                    {item.description}
                                </p>

                            </div>

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

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-center">
                            Join Our Programmes
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
                                required
                                placeholder="Full Name"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                required
                                placeholder="Organization"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <select
                                name="areaOfInterest"
                                value={formData.areaOfInterest}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
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
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary resize-none"
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

                </div>

            </section>

        </div>
    )
}
import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";

export default function Certification() {

  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    industry: "",
    organizationSize: "",
    message: ""
  })

  const {
    setTurnstileToken,
    turnstileRef,
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    handleSubmit
  } = useFormSubmission("/api/certification")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    handleSubmit(e, formData, () => {
      setFormData({
        organizationName: "",
        contactName: "",
        email: "",
        industry: "",
        organizationSize: "",
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
        successMessage="Thank you for applying for Kingdom Certification. We'll get back to you soon."
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
            Kingdom Certification
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Apply For
            <span className="text-primary block">
              Kingdom Certification
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
            Begin the journey toward ethical excellence, leadership
            accountability, organizational trust, and Kingdom-centered
            impact through the Business2excel Certification Framework.
          </p>

        </div>

      </section>

      {/* Eligibility */}

      <section className="py-16 border-b border-zinc-900">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Who Can Apply?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {[
              "Businesses and Organizations",
              "Entrepreneurs and Founders",
              "Consultants and Advisors",
              "Ministries and Non-Profits",
              "Leadership Teams",
              "Kingdom-Focused Enterprises",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4"
              >

                <span className="text-primary font-bold">
                  ✓
                </span>

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Application Form */}

      <section className="py-16 border-b border-zinc-900">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-center">
              Certification Application
            </h2>

            <form
              onSubmit={handleFormSubmit}
              className="space-y-6 mt-10"
              autoComplete="off"
            >

              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Organization Name"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
              />

              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Primary Contact Name"
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
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Industry / Sector"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
              />

              <select
                name="organizationSize"
                value={formData.organizationSize}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
              >
                <option value="" disabled>
                  Organization Size
                </option>
                <option value="1 - 10 Employees">1 - 10 Employees</option>
                <option value="11 - 50 Employees">11 - 50 Employees</option>
                <option value="51 - 200 Employees">51 - 200 Employees</option>
                <option value="201+ Employees">201+ Employees</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your organization, mission, and why you are seeking certification..."
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

      {/* Closing Statement */}

      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Pursue Excellence.
            <span className="text-primary block">
              Create Lasting Impact.
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8">
            Kingdom Certification recognizes organizations committed
            to ethical leadership, faithful stewardship, strategic
            excellence, and transformational impact.
          </p>

        </div>

      </section>

    </div>
  )
}
import { useState } from "react";
import { customButton } from "../data/customStylesAndLogic";
import useFormSubmission from "../Components/hooks/useFormSubmission";
import FormTurnstile from "../Components/forms/FormTurnstile";
import FormSubmissionModal from "../Components/forms/FormSubmissionModal";
import Reveal from "../Components/Reveal";

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

      <section className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

        <div className="glow -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

          <Reveal>

            <span className="eyebrow justify-center">
              Kingdom Certification
            </span>

            <h1 className="heading-1 mt-5">
              Apply For
              <span className="text-primary block italic">
                Kingdom Certification
              </span>
            </h1>

            <p className="body-text mt-5">
              Begin the journey toward ethical excellence, leadership
              accountability, organizational trust, and Kingdom-centered
              impact through the Business2excel Certification Framework.
            </p>

          </Reveal>

        </div>

      </section>

      {/* Eligibility */}

      <section className="py-14 sm:py-16 border-b border-zinc-800/60">

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          <Reveal className="text-center">

            <h2 className="heading-2">
              Who Can Apply?
            </h2>

          </Reveal>

          <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mt-10 sm:mt-12">

            {[
              "Businesses and Organizations",
              "Entrepreneurs and Founders",
              "Consultants and Advisors",
              "Ministries and Non-Profits",
              "Leadership Teams",
              "Kingdom-Focused Enterprises",
            ].map((item, index) => (

              <Reveal key={item} delay={(index % 2) * 0.06} className="h-full">

                <div
                  className="card h-full px-5 py-4 flex items-center gap-3.5 transition-colors duration-300 hover:border-primary/40"
                >

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    ✓
                  </span>

                  <span className="text-sm sm:text-base font-medium text-zinc-200">{item}</span>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* Application Form */}

      <section className="py-14 sm:py-16 border-b border-zinc-800/60">

        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">

          <Reveal>
            <div className="card p-6 sm:p-8 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">

              <h2 className="heading-3 text-center">
                Certification Application
              </h2>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-5 mt-8"
                autoComplete="off"
              >

                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  required
                  className="input-field"
                />

                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Primary Contact Name"
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
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="Industry / Sector"
                  required
                  className="input-field"
                />

                <select
                  name="organizationSize"
                  value={formData.organizationSize}
                  onChange={handleChange}
                  required
                  className="input-field"
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

      {/* Closing Statement */}

      <section className="py-16 sm:py-20 relative overflow-hidden">

        <div className="glow -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-primary/[0.07]" />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

          <Reveal>

            <h2 className="heading-1">
              Pursue Excellence.
              <span className="text-primary block italic">
                Create Lasting Impact.
              </span>
            </h2>

            <p className="body-text mt-5">
              Kingdom Certification recognizes organizations committed
              to ethical leadership, faithful stewardship, strategic
              excellence, and transformational impact.
            </p>

          </Reveal>

        </div>

      </section>

    </div>
  )
}

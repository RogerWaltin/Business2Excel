import { useState } from "react";
import { customButton } from "../../data/customStylesAndLogic";
import useFormSubmission from "../../Components/hooks/useFormSubmission";
import FormTurnstile from "../../Components/forms/FormTurnstile";
import FormSubmissionModal from "../../Components/forms/FormSubmissionModal";

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    howDidYouHear: "",
    message: "",
  })

  const {
    setTurnstileToken,
    turnstileRef,
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    handleSubmit
  } = useFormSubmission("/api/contact")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    handleSubmit(e, formData, () => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        howDidYouHear: "",
        message: ""
      })
    })
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-950 px-5 sm:px-6 py-12 sm:py-16 relative overflow-hidden">

      <FormSubmissionModal
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        onClose={() => setSubmitStatus(null)}
      />

      <img
        src="/media/contact.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/90 via-black/85 to-zinc-950/95" />

      <div className="max-w-3xl mx-auto relative z-10">

        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.9)]">

          {/* Heading */}
          <div className="mb-8 sm:mb-10">
            <span className="eyebrow">
              Get In Touch
            </span>
            <h1 className="heading-2 mt-4">
              Contact Us
            </h1>
          </div>

          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-6"
            autoComplete="off"
          >

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              {/* First Name */}
              <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-zinc-300">
                  First Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="input-field bg-zinc-950/80"
                />

              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-zinc-300">
                  Last Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="input-field bg-zinc-950/80"
                />

              </div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              {/* Email */}
              <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-zinc-300">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="input-field bg-zinc-950/80"
                />

              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-2">

                <label className="text-sm font-medium text-zinc-300">
                  Mobile Number
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                  className="input-field bg-zinc-950/80"
                  required
                />

              </div>

            </div>

            {/* How did you hear about us */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-zinc-300">
                How did you hear about us?
                <span className="text-red-500 ml-1">*</span>
              </label>

              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="input-field bg-zinc-950/80"
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="google">Google</option>
                <option value="youtube">YouTube</option>
                <option value="friend">Friend</option>
                <option value="social-media">Social Media</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>

            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-zinc-300">
                Your Message
                <span className="text-red-500 ml-1">*</span>
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message here..."
                className="input-field bg-zinc-950/80 resize-y"
                required
              />

            </div>

            {/* Turnstile */}
            <FormTurnstile
              ref={turnstileRef}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken("")}
            />

            {/* Submit */}
            <div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${customButton} disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                Submit
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

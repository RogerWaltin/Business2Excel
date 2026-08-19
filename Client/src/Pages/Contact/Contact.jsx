import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { customButton } from "../../data/customStylesAndLogic";

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    howDidYouHear: "",
    message: "",
  })

  const [turnstileToken, setTurnstileToken] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const turnstileRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!turnstileToken) {
      setSubmitStatus("verification")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        howDidYouHear: "",
        message: ""
      })

      setTurnstileToken("")
      turnstileRef.current?.reset()
      setSubmitStatus("success")

    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")

    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-950 px-6 py-14 relative overflow-hidden">

      {/* Loading Popup */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-6 shadow-2xl flex items-center gap-4">
            <div className="w-6 h-6 border-4 border-zinc-700 border-t-primary rounded-full animate-spin" />

            <p className="text-lg text-zinc-100">
              Sending Inquiry...
            </p>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {submitStatus === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-7 shadow-2xl text-center max-w-sm mx-6">

            <div className="text-primary text-4xl mb-4">
              ✓
            </div>

            <h2 className="text-2xl font-semibold text-zinc-100 mb-2">
              Inquiry Sent!
            </h2>

            <p className="text-zinc-400 mb-6">
              Thank you for contacting us. We'll get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => setSubmitStatus(null)}
              className="bg-primary text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-secondary active:translate-y-1 transition-all duration-150 cursor-pointer"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* Error Popup */}
      {submitStatus === "error" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-7 shadow-2xl text-center max-w-sm mx-6">

            <div className="text-red-500 text-4xl mb-4">
              !
            </div>

            <h2 className="text-2xl font-semibold text-zinc-100 mb-2">
              Unable to Send
            </h2>

            <p className="text-zinc-400 mb-6">
              Something went wrong while sending your inquiry. Please try again.
            </p>

            <button
              type="button"
              onClick={() => setSubmitStatus(null)}
              className="bg-primary text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-secondary active:translate-y-1 transition-all duration-150 cursor-pointer"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* Turnstile Verification Popup */}
      {submitStatus === "verification" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-7 shadow-2xl text-center max-w-sm mx-6">

            <div className="text-yellow-500 text-4xl mb-4">
              !
            </div>

            <h2 className="text-2xl font-semibold text-zinc-100 mb-2">
              Verification Required
            </h2>

            <p className="text-zinc-400 mb-6">
              Please complete the verification before submitting your inquiry.
            </p>

            <button
              type="button"
              onClick={() => setSubmitStatus(null)}
              className="bg-primary text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-secondary active:translate-y-1 transition-all duration-150 cursor-pointer"
            >
              Close
            </button>

          </div>
        </div>
      )}

      <img
        src="/media/contact.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-primary mb-12">
            Contact Us
          </h1>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            autoComplete="off"
          >

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* First Name */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
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
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors"
                />

              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
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
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors"
                />

              </div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Email */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
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
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors"
                />

              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
                  Mobile Number
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors"
                  required
                />

              </div>

            </div>

            {/* How did you hear about us */}
            <div className="flex flex-col gap-3">

              <label className="text-lg text-zinc-200">
                How did you hear about us?
                <span className="text-red-500 ml-1">*</span>
              </label>

              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors text-zinc-200"
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
            <div className="flex flex-col gap-3">

              <label className="text-lg text-zinc-200">
                Your Message
                <span className="text-red-500 ml-1">*</span>
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message here..."
                className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary transition-colors resize-y"
                required
              />

            </div>

            {/* Turnstile */}
            <Turnstile
              ref={turnstileRef}
              siteKey="0x4AAAAAAETuJq8fVZb_4Q_P"
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
            />

            {/* Submit */}
            <div>

              <button type="submit" className={customButton}>
                Submit
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}
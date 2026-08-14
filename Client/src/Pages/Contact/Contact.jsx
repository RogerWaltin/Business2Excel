import { useState } from "react"

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    howDidYouHear: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    // send to backend here
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-950 px-6 py-14 relative overflow-hidden">

      <img src="/media/contact.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-primary mb-12">
            Contact Us
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* First Name */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
                  First Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors" />

              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
                  Last Name
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors" />

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

                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors" />

              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-3">

                <label className="text-lg text-zinc-200">
                  Mobile Number
                </label>

                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91 12345 67890" className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors" />

              </div>

            </div>

            {/* How did you hear about us */}
            <div className="flex flex-col gap-3">

              <label className="text-lg text-zinc-200">
                How did you hear about us?
              </label>

              <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3 text-base outline-none focus:border-primary transition-colors text-zinc-200">

                <option value="">Select an option</option>
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
              </label>

              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Write your message here..." className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-base outline-none focus:border-primary transition-colors resize-y" />

            </div>

            {/* Submit */}
            <div>

              <button type="submit" className="bg-primary text-black font-semibold px-8 py-3 rounded-2xl hover:bg-secondary hover:scale-110 transition-all duration-300 cursor-pointer">
                Submit
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}
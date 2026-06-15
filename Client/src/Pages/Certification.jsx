export default function Certification() {
  return (
    <div className="bg-zinc-950 text-white">

      {/* Hero */}

      <section className="py-20 border-b border-zinc-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-emerald-400 uppercase tracking-widest text-sm">
            Kingdom Certification
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Apply For
            <span className="text-emerald-400 block">
              Kingdom Certification
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
            Begin the journey toward ethical excellence, leadership
            accountability, organizational trust, and Kingdom-centered
            impact through the Business2Excel Certification Framework.
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

                <span className="text-emerald-400 font-bold">
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

            <form className="space-y-6 mt-10">

              <input
                type="text"
                placeholder="Organization Name"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
              />

              <input
                type="text"
                placeholder="Primary Contact Name"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
              />

              <input
                type="text"
                placeholder="Industry / Sector"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
              />

              <select
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
              >
                <option>Organization Size</option>
                <option>1 - 10 Employees</option>
                <option>11 - 50 Employees</option>
                <option>51 - 200 Employees</option>
                <option>201+ Employees</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your organization, mission, and why you are seeking certification..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 rounded-xl transition-all duration-300 cursor-pointer"
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
            <span className="text-emerald-400 block">
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
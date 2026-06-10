const service = [
  {
    title: "Business Transformation",
    desc: "Navigate change, growth, and organizational reinvention.",
  },
  {
    title: "Kingdom Leadership",
    desc: "Develop leaders grounded in stewardship and purpose.",
  },
  {
    title: "Stewardship & Wealth",
    desc: "Align resources, influence, and impact with Kingdom values.",
  },
  {
    title: "Business as Mission",
    desc: "Advance Kingdom influence through enterprise and innovation.",
  },
]

export default function Resources() {
  return (
    <>
      {/* SERVICES PREVIEW */}
      <section id="services-preview" className="py-16 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Side */}

            <div>

              <span className="text-emerald-400 uppercase tracking-widest text-sm">
                Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-6">
                Consulting For
                <span className="text-emerald-400 block">
                  Sustainable Transformation
                </span>
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                Practical solutions designed to help organizations
                navigate complexity, drive innovation, strengthen
                leadership, and build long-term Kingdom impact.
              </p>

              <button className="mt-10 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                View All Services
              </button>

            </div>

            {/* Right Side */}

            <div className="grid md:grid-cols-2 gap-6">

              {service.map((item) => (

                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                >

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-16 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Resources
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Insights For Kingdom Leaders
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Access practical resources, frameworks, and thought
              leadership designed for modern business challenges
              and Kingdom impact.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Articles
              </h3>

              <p className="text-zinc-400 mt-4">
                Practical insights and perspectives for leaders.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Frameworks
              </h3>

              <p className="text-zinc-400 mt-4">
                Tools and models for organizational transformation.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                AI & Ethics Reports
              </h3>

              <p className="text-zinc-400 mt-4">
                Navigate innovation responsibly and strategically.
              </p>

            </div>

          </div>

          <div className="text-center mt-12">

            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Resource Library
            </button>

          </div>

        </div>

      </section>
    </>
  )
}

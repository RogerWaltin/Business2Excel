export default function KingdomTransformationFramework({ color1, color2 }) {
  return (
    <section id="kingdom-transformation-framework" className="py-20 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              A Kingdom Blueprint For
              <span className="text-primary block">
                Business Transformation
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Our framework integrates wisdom, ethical leadership,
              strategic consulting, organizational transformation, and Kingdom
              impact into a practical pathway for leaders and organizations
              navigating modern challenges.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Rather than treating business, leadership, innovation, and
              mission as separate disciplines, we bring them together into a
              unified transformation model designed for long-term influence.
            </p>

            {/* <button className="mt-10 bg-secondary hover:bg-primary text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Framework
            </button> */}

          </div>

          {/* Right Side */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300">

              <h3 className="text-2xl font-bold">
                Kingdom Certification
              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Ethical validation and accountability for Kingdom-centered
                organizations.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300">

              <h3 className="text-2xl font-bold">
                Strategic Consulting
              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Navigate disruption, innovation, growth, and AI-age
                transformation.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300">

              <h3 className="text-2xl font-bold">
                Leadership Transformation
              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Develop culture, governance, mission clarity, stewardship,
                and influence.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-secondary/30 transition-all duration-300">

              <h3 className="text-2xl font-bold">
                Business as Mission
              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Advance Kingdom impact through purpose-driven enterprise and
                marketplace ministry.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}


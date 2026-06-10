const heroPillar = [
  {
    title: "Kingdom Certification",
    subtitle: "Ethical Validation",
  },
  {
    title: "Strategic Consulting",
    subtitle: "Reinvention & Growth",
  },
  {
    title: "Leadership Development",
    subtitle: "Culture & Governance",
  },
  {
    title: "Business as Mission",
    subtitle: "Kingdom Advancement",
  },
]

export default function HomeHero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-900">

      <div id="right-corner-glow" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 pt-20 pb-29 relative z-10">

        {/* Left */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">

            Transforming Organizations

            <span className="block text-emerald-400">
              For Lasting Kingdom Impact
            </span>

          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6 max-w-xl">

            Business2Excel equips leaders, entrepreneurs,
            and organizations to integrate Kingdom principles,
            ethical leadership, innovation, and AI-age
            transformation into modern business.

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Book Consultation
            </button>

            <button className="border border-zinc-700 hover:border-emerald-500 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
              Explore Certification
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-4xl p-8">

          <div className="grid md:grid-cols-2 gap-4">

            {heroPillar.map((item) => (

              <div
                key={item.title}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
              >

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-emerald-400 text-sm mt-2">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800">

            <p className="text-zinc-500 uppercase tracking-widest text-xs">
              A Kingdom Blueprint For
            </p>

            <p className="text-2xl font-bold mt-2">
              Business Transformation
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

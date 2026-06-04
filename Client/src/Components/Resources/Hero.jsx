export default function Hero() {
  return (
    <section className="bg-black py-32">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Resources
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Insights, Frameworks, And Tools For Leaders Navigating A Changing World
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
          Business leaders today face unprecedented challenges—from artificial
          intelligence and technological disruption to leadership burnout,
          ethical uncertainty, and cultural fragmentation.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-400">
          Business2Excel provides research, insights, reports, frameworks, and
          practical resources designed to help leaders navigate complexity,
          make principled decisions, and create lasting Kingdom impact in an
          increasingly interconnected world.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-emerald-400">
            Explore Resources
          </button>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
            Download Frameworks
          </button>

        </div>

      </div>

    </section>
  )
}
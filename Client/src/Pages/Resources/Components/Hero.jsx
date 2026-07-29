import { motion } from "motion/react"

export default function Hero() {
  const scrollToResources = () => {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden bg-black pt-20">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm tracking-widest uppercase text-emerald-400">
          Resources
        </span>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
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

          <button className="cursor-pointer rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-emerald-400" onClick={scrollToResources}>
            Explore Resources
          </button>

          <button className="cursor-pointer rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
            Download Frameworks
          </button>

        </div>

      </div>

    </section>
  )
}
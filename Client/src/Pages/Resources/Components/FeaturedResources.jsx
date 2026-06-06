export default function FeaturedResources() {
  return (
    <section id="featured-resources" className="bg-black py-32">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Featured Resources
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Practical Frameworks For Leaders Building With Purpose
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          Explore Business2Excel's flagship reports, guides, and strategic
          frameworks designed to help leaders navigate disruption, strengthen
          stewardship, and create lasting Kingdom impact.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Resource 1 */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <p className="text-sm uppercase tracking-[0.15em] text-emerald-400">
              Guide
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              7 Kingdom Principles For Business Transformation
            </h3>

            <p className="mt-6 leading-relaxed text-zinc-400">
              A practical framework for aligning leadership, culture,
              strategy, and organizational purpose through a Kingdom-centered
              lens.
            </p>

            <button className="mt-8 rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
              Download Resource
            </button>

          </div>

          {/* Resource 2 */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <p className="text-sm uppercase tracking-[0.15em] text-emerald-400">
              Report
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              AI & Biblical Leadership
            </h3>

            <p className="mt-6 leading-relaxed text-zinc-400">
              Exploring how leaders can embrace technological innovation
              while maintaining ethical clarity, human dignity, and
              Kingdom-centered stewardship.
            </p>

            <button className="mt-8 rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
              Read Report
            </button>

          </div>

          {/* Resource 3 */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <p className="text-sm uppercase tracking-[0.15em] text-emerald-400">
              Framework
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Kingdom Stewardship Blueprint
            </h3>

            <p className="mt-6 leading-relaxed text-zinc-400">
              Strategic guidance for faithful stewardship, wealth
              management, generosity, legacy planning, and long-term
              Kingdom impact.
            </p>

            <button className="mt-8 rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
              Download Blueprint
            </button>

          </div>

          {/* Resource 4 */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <p className="text-sm uppercase tracking-[0.15em] text-emerald-400">
              Guide
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Faith-Driven Business Reinvention Guide
            </h3>

            <p className="mt-6 leading-relaxed text-zinc-400">
              A roadmap for organizations navigating change, innovation,
              digital transformation, and sustainable growth in an
              increasingly complex marketplace.
            </p>

            <button className="mt-8 rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
              Explore Guide
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
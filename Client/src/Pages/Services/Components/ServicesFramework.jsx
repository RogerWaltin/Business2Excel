export default function ServicesFramework() {
  return (
    <section className="bg-black pt-20">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Strategic Framework
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          A Kingdom Blueprint For Business Transformation
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          Lasting transformation requires more than isolated solutions.
          Business2Excel integrates strategic consulting, leadership
          development, ethical certification, and Kingdom-centered stewardship
          into a unified framework designed to help organizations thrive in a
          rapidly changing world.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto_1fr]">

          {/* Consulting Side */} {/*TODO Use framer motion or something to make an animation that breaks the consultation box into 4 small boxes*/}

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <img src="/media/consulting.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white">
                Consulting
              </h3>
              <p className="mt-4 text-zinc-200 leading-relaxed">
                Strategic guidance for organizations seeking sustainable growth,
                stronger leadership, and meaningful Kingdom impact.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-black/60 backdrop-blur-xs p-6">
                  <h4 className="font-semibold text-white">
                    Business Transformation
                  </h4>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-black/60 backdrop-blur-xs p-6">
                  <h4 className="font-semibold text-white">
                    Kingdom Leadership
                  </h4>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-black/60 backdrop-blur-xs p-6">
                  <h4 className="font-semibold text-white">
                    Stewardship & Wealth
                  </h4>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-black/60 backdrop-blur-xs p-6">
                  <h4 className="font-semibold text-white">
                    Business as Mission
                  </h4>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}

          <div className="hidden lg:block w-px bg-black" />

          {/* Certification Side */}

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <img src="/media/certificateV2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white">
                Kingdom Certification
              </h3>
              <p className="mt-4 text-zinc-200 leading-relaxed">
                A comprehensive ethical validation framework that helps
                organizations demonstrate integrity, stewardship, accountability,
                and long-term Kingdom impact.
              </p>
              <div className="mt-8 rounded-2xl border border-zinc-800 p-8 bg-black/60 backdrop-blur-xs">
                <p className="text-lg font-semibold text-white">
                  The Flagship Differentiator
                </p>
                <p className="mt-3 text-zinc-200 leading-relaxed">
                  Certification serves as the foundation for building trust,
                  aligning faith and operations, and creating a framework for
                  sustainable organizational transformation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
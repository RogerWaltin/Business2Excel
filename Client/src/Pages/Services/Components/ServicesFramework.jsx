import Reveal from "../../../Components/Reveal"

export default function ServicesFramework() {
  return (
    <section className="bg-black pt-16 sm:pt-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <Reveal>
          <span className="eyebrow">
            Strategic Framework
          </span>

          <h2 className="heading-2 mt-5 max-w-4xl">
            A Kingdom Blueprint For Business Transformation
          </h2>

          <p className="body-text mt-5 max-w-3xl">
            Lasting transformation requires more than isolated solutions.
            Business2excel integrates strategic consulting, leadership
            development, ethical certification, and Kingdom-centered stewardship
            into a unified framework designed to help organizations thrive in a
            rapidly changing world.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-6 lg:gap-8 lg:grid-cols-[1fr_auto_1fr]">

          {/* Consulting Side */} {/*NOTE: Use framer motion or something to make an animation that breaks the consultation box into 4 small boxes*/}

          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)]">

              <img src="/media/consulting.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50" />

              <div className="relative z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Consulting
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Strategic guidance for organizations seeking sustainable growth,
                  stronger leadership, and meaningful Kingdom impact.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="rounded-xl border border-zinc-800 bg-black/60 backdrop-blur-sm px-4 py-4 transition-colors duration-300 hover:border-primary/40">
                    <h4 className="text-sm font-semibold text-white">
                      Business Transformation
                    </h4>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-black/60 backdrop-blur-sm px-4 py-4 transition-colors duration-300 hover:border-primary/40">
                    <h4 className="text-sm font-semibold text-white">
                      Kingdom Leadership
                    </h4>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-black/60 backdrop-blur-sm px-4 py-4 transition-colors duration-300 hover:border-primary/40">
                    <h4 className="text-sm font-semibold text-white">
                      Stewardship & Wealth
                    </h4>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-black/60 backdrop-blur-sm px-4 py-4 transition-colors duration-300 hover:border-primary/40">
                    <h4 className="text-sm font-semibold text-white">
                      Business as Mission
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          {/* Divider */}

          <div className="hidden lg:block w-px bg-black" />

          {/* Certification Side */}

          <Reveal delay={0.12}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)]">

              <img src="/media/certificateV2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/50" />

              <div className="relative z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Kingdom Certification
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  A comprehensive ethical validation framework that helps
                  organizations demonstrate integrity, stewardship, accountability,
                  and long-term Kingdom impact.
                </p>
                <div className="mt-8 rounded-xl border border-primary/25 bg-black/60 p-5 sm:p-6 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    The Flagship Differentiator
                  </p>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    Certification serves as the foundation for building trust,
                    aligning faith and operations, and creating a framework for
                    sustainable organizational transformation.
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  )
}

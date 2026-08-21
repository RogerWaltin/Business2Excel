import Reveal from "../../../Components/Reveal"

export default function OurStory() {
  return (

    <section id="our-story" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 scroll-mt-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">

        <Reveal>

          <span className="eyebrow">
            Our Story
          </span>

          <h2 className="heading-2 mt-5">
            Restoring Purpose, Integrity, and Leadership to Modern Business
          </h2>

        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-zinc-400 leading-relaxed text-base lg:text-lg border-l-2 border-primary/30 pl-6 sm:pl-8">

            <p>
              Business2excel was born from a growing realization that modern
              business is facing more than economic disruption — it is facing a
              crisis of purpose, integrity, and leadership.
            </p>

            <p>
              Founded with a vision to bridge biblical wisdom and modern
              business excellence, Business2excel equips entrepreneurs,
              executives, organizations, and marketplace leaders to build
              businesses that are profitable, ethical, impactful, and eternally
              significant.
            </p>

            <p>
              More than a consulting organization, Business2excel is building a
              global movement where faith-driven leadership, strategic
              innovation, stewardship, and Kingdom impact converge to transform
              industries, communities, and nations.
            </p>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

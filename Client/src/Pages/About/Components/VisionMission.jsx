import Reveal from "../../../Components/Reveal"

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 scroll-mt-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-5 sm:gap-6">

        <Reveal className="h-full">
          <div className="image-card group h-full min-h-64 sm:min-h-72">

            <img src="/media/vision.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
              <span className="eyebrow">
                Our Vision
              </span>
              <p className="text-zinc-200 leading-relaxed text-base sm:text-lg mt-4">
                To see businesses, leaders, and organizations transformed through
                Kingdom principles, ethical leadership, strategic innovation, and
                biblical stewardship.
              </p>
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.12} className="h-full">
          <div className="image-card group h-full min-h-64 sm:min-h-72">

            <img src="/media/our-mission.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
              <span className="eyebrow">
                Our Mission
              </span>
              <p className="text-zinc-200 leading-relaxed text-base sm:text-lg mt-4">
                Business2excel exists to equip entrepreneurs, executives, and
                organizations with Kingdom-centered transformation, leadership
                development, ethical certification systems, strategic consulting,
                and AI-age reinvention.
              </p>
            </div>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

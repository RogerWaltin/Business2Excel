export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-28 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 relative overflow-hidden">

          <img src="/media/vision.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Vision
            </span>
            <p className="text-zinc-200 leading-relaxed text-lg mt-6">
              To see businesses, leaders, and organizations transformed through
              Kingdom principles, ethical leadership, strategic innovation, and
              biblical stewardship.
            </p>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 relative overflow-hidden">

          <img src="/media/our-mission.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Mission
            </span>
            <p className="text-zinc-200 leading-relaxed text-lg mt-6">
              Business2excel exists to equip entrepreneurs, executives, and
              organizations with Kingdom-centered transformation, leadership
              development, ethical certification systems, strategic consulting,
              and AI-age reinvention.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}
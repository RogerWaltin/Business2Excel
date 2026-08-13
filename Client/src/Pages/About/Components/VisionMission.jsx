export default function VisionMission({ color1, color2 }) {
  return (
    <section id="vision-mission" className="py-28 border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <span className={`text-${color1} uppercase tracking-widest text-sm`}>
            Our Vision
          </span>

          <p className="text-2xl leading-relaxed mt-6">
            To see businesses, leaders, and organizations transformed through
            Kingdom principles, ethical leadership, strategic innovation, and
            biblical stewardship.
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <span className={`text-${color1} uppercase tracking-widest text-sm`}>
            Our Mission
          </span>

          <p className="text-zinc-400 leading-relaxed text-lg mt-6">
            Business2Excel exists to equip entrepreneurs, executives, and
            organizations with Kingdom-centered transformation, leadership
            development, ethical certification systems, strategic consulting,
            and AI-age reinvention.
          </p>

        </div>

      </div>

    </section>
  )
}
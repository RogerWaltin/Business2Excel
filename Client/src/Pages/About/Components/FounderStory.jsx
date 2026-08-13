export default function FounderStory({ color1, color2 }) {
  return (
    <section id="founder-story" className="py-28 border-b border-zinc-900">

      <div className="max-w-5xl mx-auto px-6">

        <span className={`text-${color1} uppercase tracking-widest text-sm`}>
          Founder Story
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          A Vision for Kingdom-Centered Transformation
        </h2>

        <div className="space-y-8 text-zinc-400 leading-relaxed text-lg mt-12">

          <p>
            Business2Excel began with a burden to see business reclaimed as a
            platform for transformation, stewardship, and Kingdom impact.
          </p>

          <p>
            What started as a vision for business consulting evolved into a
            much larger mission: to build a Kingdom business transformation
            ecosystem capable of influencing leaders, organizations,
            industries, and nations.
          </p>

          <p>
            Today, Business2Excel continues to expand as a platform for
            leadership transformation, ethical certification, strategic
            consulting, and Kingdom-centered innovation.
          </p>

        </div>

      </div>

    </section>
  )
}
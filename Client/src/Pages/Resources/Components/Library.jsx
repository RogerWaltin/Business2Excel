import { Link } from "react-router-dom"
import Reveal from "../../../Components/Reveal"

function LibraryColumn({ label, image, imageClassName = "", children }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-black p-6 sm:p-7 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-primary/30">

      <img src={image} alt="hero" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${imageClassName}`} />
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/75 to-black/90" />

      <div className="relative z-10">

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          {label}
        </p>

        <div className="mt-4 space-y-1.5">
          {children}
        </div>

      </div>

    </div>
  )
}

function LibraryLink({ to, title, desc }) {
  return (
    <Link
      to={to}
      className="group/link block rounded-xl px-3.5 py-3 transition-colors duration-300 hover:bg-white/[0.06]"
    >
      <h3 className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white transition-colors duration-300 group-hover/link:text-primary">
        {title}
        <span className="text-primary/70 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
      </h3>

      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-400">
        {desc}
      </p>
    </Link>
  )
}

export default function Library() {
  return (
    <section id="library" className="bg-black py-16 sm:py-20 scroll-mt-16">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <Reveal>
          <span className="eyebrow">
            Resource Library
          </span>

          <h2 className="heading-2 mt-5 max-w-4xl">
            Browse By Format
          </h2>

          <p className="body-text mt-5 max-w-3xl text-zinc-300">
            Whether you prefer reading, listening, watching, or downloading,
            explore resources designed to help leaders navigate complexity,
            strengthen stewardship, and create lasting Kingdom impact.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 lg:grid-cols-3 items-stretch">

          {/* READ */}

          <Reveal className="h-full">
            <LibraryColumn label="Read" image="/media/books.jpg">

              <LibraryLink
                to="/resources/articles"
                title="Articles"
                desc="Strategic insights and practical business guidance."
              />

              <LibraryLink
                to="/resources/whitepapers"
                title="Whitepapers"
                desc="Research and analysis on emerging marketplace trends."
              />

              <LibraryLink
                to="/resources/ai-ethics-reports"
                title="AI & Ethics Reports"
                desc="Exploring technology, innovation, and ethical leadership."
              />

              <LibraryLink
                to="/resources/biblical-business-insights"
                title="Biblical Business Insights"
                desc="Applying biblical wisdom to modern business challenges."
              />

              <LibraryLink
                to="/resources/leadership-devotionals"
                title="Leadership Devotionals"
                desc="Encouragement for leaders seeking Kingdom impact."
              />

            </LibraryColumn>
          </Reveal>

          {/* WATCH & LISTEN */}

          <Reveal delay={0.1} className="h-full">
            <LibraryColumn label="Watch & Listen" image="/media/podcast.jpeg" imageClassName="right-30">

              <LibraryLink
                to="/resources/videos"
                title="Videos"
                desc="Interviews, training sessions, and keynote presentations."
              />

              <LibraryLink
                to="/resources/podcasts"
                title="Podcasts"
                desc="Conversations with leaders, entrepreneurs, and practitioners."
              />

            </LibraryColumn>
          </Reveal>

          {/* DOWNLOAD */}

          <Reveal delay={0.2} className="h-full">
            <LibraryColumn label="Download" image="/media/downloads.jpg">

              <LibraryLink
                to="/resources/frameworks"
                title="Frameworks"
                desc="Practical tools and implementation guides."
              />

              <LibraryLink
                to="/resources/case-studies"
                title="Case Studies"
                desc="Real-world examples of transformation and impact."
              />

            </LibraryColumn>
          </Reveal>

        </div>

      </div>

    </section>
  )
}

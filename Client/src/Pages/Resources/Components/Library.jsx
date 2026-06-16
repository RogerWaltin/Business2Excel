import { Link } from "react-router-dom"

export default function Library() {
  return (
    <section id="library" className="bg-black py-20">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Resource Library
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Browse By Format
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
          Whether you prefer reading, listening, watching, or downloading,
          explore resources designed to help leaders navigate complexity,
          strengthen stewardship, and create lasting Kingdom impact.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* READ */}

          <div className="rounded-3xl border border-zinc-800 bg-black p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Read
            </p>

            <div className="mt-6 space-y-2">

              <Link
                to="/resources/articles"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Articles →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Strategic insights and practical business guidance.
                </p>
              </Link>

              <Link
                to="/resources/whitepapers"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Whitepapers →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Research and analysis on emerging marketplace trends.
                </p>
              </Link>

              <Link
                to="/resources/ai-ethics-reports"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  AI & Ethics Reports →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Exploring technology, innovation, and ethical leadership.
                </p>
              </Link>

              <Link
                to="/resources/biblical-business-insights"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Biblical Business Insights →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Applying biblical wisdom to modern business challenges.
                </p>
              </Link>

              <Link
                to="/resources/leadership-devotionals"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Leadership Devotionals →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Encouragement for leaders seeking Kingdom impact.
                </p>
              </Link>

            </div>

          </div>

          {/* WATCH & LISTEN */}

          <div className="rounded-3xl border border-zinc-800 bg-black p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Watch & Listen
            </p>

            <div className="mt-6 space-y-2">

              <Link
                to="/resources/videos"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Videos →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Interviews, training sessions, and keynote presentations.
                </p>
              </Link>

              <Link
                to="/resources/podcasts"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Podcasts →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Conversations with leaders, entrepreneurs, and practitioners.
                </p>
              </Link>

            </div>

          </div>

          {/* DOWNLOAD */}

          <div className="rounded-3xl border border-zinc-800 bg-black p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-400">
              Download
            </p>

            <div className="mt-6 space-y-2">

              <Link
                to="/resources/frameworks"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Frameworks →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Practical tools and implementation guides.
                </p>
              </Link>

              <Link
                to="/resources/case-studies"
                className="group block rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900"
              >
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  Case Studies →
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Real-world examples of transformation and impact.
                </p>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
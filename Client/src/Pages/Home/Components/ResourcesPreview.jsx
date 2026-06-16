import { HashLink } from "react-router-hash-link";

export default function Resources() {
  return (
      <section id="resources" className="py-16 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-emerald-400 uppercase tracking-widest text-sm">
              Resources
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Insights For Kingdom Leaders
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              Access practical resources, frameworks, and thought
              leadership designed for modern business challenges
              and Kingdom impact.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Articles
              </h3>

              <p className="text-zinc-400 mt-4">
                Practical insights and perspectives for leaders.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Frameworks
              </h3>

              <p className="text-zinc-400 mt-4">
                Tools and models for organizational transformation.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                AI & Ethics Reports
              </h3>

              <p className="text-zinc-400 mt-4">
                Navigate innovation responsibly and strategically.
              </p>

            </div>

          </div>

          <div className="text-center mt-12">

            <HashLink to="/resources#library">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                Explore Resource Library
              </button>
            </HashLink>

          </div>

        </div>

      </section>
  )
}

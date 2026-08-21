import { HashLink } from "react-router-hash-link";
import Reveal from "../../../Components/Reveal";

export default function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <Reveal className="max-w-3xl mx-auto text-center">

          <span className="eyebrow">
            Resources
          </span>

          <h2 className="heading-2 mt-5">
            Insights For Kingdom Leaders
          </h2>

          <p className="body-text mt-5">
            Access practical resources, frameworks, and thought
            leadership designed for modern business challenges
            and Kingdom impact.
          </p>

        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">

          {[
            {
              title: "Articles",
              desc: "Practical insights and perspectives for leaders.",
            },
            {
              title: "Frameworks",
              desc: "Tools and models for organizational transformation.",
            },
            {
              title: "AI & Ethics Reports",
              desc: "Navigate innovation responsibly and strategically.",
            },
          ].map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08} className="h-full">

              <div className="card group h-full p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-zinc-900/80 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]">

                <div className="h-px w-8 bg-primary/60 transition-all duration-300 group-hover:w-14" />

                <h3 className="text-lg font-semibold tracking-tight mt-5">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">
                  {item.desc}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

        <Reveal delay={0.15}>
          <div className="text-center mt-10 sm:mt-12">

            <HashLink to="/resources#library">
              <button className="btn btn-primary">
                Explore Resource Library
              </button>
            </HashLink>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function WhoAreWe({ color1, color2 }) {
  return (
    <section id="who-are-we" className="py-16 border-b border-zinc-900">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className={`text-${color1} uppercase tracking-widest text-sm`}>
          Who Are We?
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-6">
          Why Business2Excel Exists
        </h2>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
          Business2Excel exists to help leaders, entrepreneurs, and
          organizations integrate Kingdom principles with strategic
          excellence, ethical leadership, innovation, and long-term impact.
        </p>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
          We believe business can be a powerful force for transformation.
          Through consulting, certification, leadership development,
          community, and business as mission initiatives, we equip
          organizations to thrive while creating meaningful Kingdom impact.
        </p>

        <HashLink
          to="/about#our-story"
          className={`inline-block mt-10 bg-${color2} hover:bg-${color1} text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300`}
        >
          Read Our Story
        </HashLink>

      </div>

    </section>
  )
}

import { HashLink } from "react-router-hash-link"
import Reveal from "../../../Components/Reveal"

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 relative overflow-hidden">

      <div className="glow top-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 bg-primary/5" />

      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

        <Reveal>

          <span className="eyebrow">
            Who Are We?
          </span>

          <h2 className="heading-2 mt-5">
            Why Business2excel Exists
          </h2>

          <p className="body-text mt-6">
            Business2excel exists to help leaders, entrepreneurs, and
            organizations integrate Kingdom principles with strategic
            excellence, ethical leadership, innovation, and long-term impact.
          </p>

          <p className="body-text mt-4">
            We believe business can be a powerful force for transformation.
            Through consulting, certification, leadership development,
            community, and business as mission initiatives, we equip
            organizations to thrive while creating meaningful Kingdom impact.
          </p>

          <HashLink
            to="/about#our-story"
            className="btn btn-primary mt-8"
          >
            Read Our Story
          </HashLink>

        </Reveal>

      </div>

    </section>
  )
}

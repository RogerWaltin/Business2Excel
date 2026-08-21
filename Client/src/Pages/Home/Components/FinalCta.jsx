import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Reveal from "../../../Components/Reveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">

      {/* Ambient glows */}
      <div className="glow -top-32 left-[15%] h-80 w-80 bg-primary/10" />
      <div className="glow -bottom-40 right-[10%] h-96 w-96 bg-primary/[0.07]" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative">

        <Reveal>

          <h2 className="heading-1">
            Build a Business That Creates
            <span className="text-primary block italic">
              Lasting Kingdom Impact
            </span>
          </h2>

          <p className="body-text mt-6 max-w-2xl mx-auto">
            Join a growing ecosystem of leaders, organizations,
            entrepreneurs, and innovators committed to Kingdom-centered
            transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-9">

            <Link to="/consultation">
              <button className="btn btn-primary">
                Book Consultation
              </button>
            </Link>

            <HashLink to="community#training-events">
              <button className="btn btn-ghost">
                Trainings & Events
              </button>
            </HashLink>

            <Link to="certification">
              <button className="btn btn-primary">
                Explore Certifications
              </button>
            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  )
}

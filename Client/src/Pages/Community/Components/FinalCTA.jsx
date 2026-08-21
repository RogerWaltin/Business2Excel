import { Link } from "react-router-dom";
import Reveal from "../../../Components/Reveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 sm:py-24 lg:py-28">

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 p-8 sm:p-12 lg:p-16 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.9)]">

            <img src="/media/deal.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />

            {/* Ambient glow */}
            <div className="glow -top-24 left-1/2 h-56 w-[28rem] -translate-x-1/2 bg-primary/15" />

            <div className="relative z-10">
              <span className="eyebrow justify-center">
                Join the Movement
              </span>
              <h2 className="heading-1 mt-5">
                Ready to Build Kingdom Impact Together?
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
                Connect with leaders, accelerate your growth, strengthen your
                influence, and become part of a global Kingdom business
                transformation ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link to="/network">
                  <button className="btn btn-primary">
                    Join the Network
                  </button>
                </Link>
                <Link to="/consultation">
                  <button className="btn btn-ghost">
                    Book a Consultation
                  </button>
                </Link>
            </div>

            </div>

          </div>
        </Reveal>

      </div>

    </section>
  )
}

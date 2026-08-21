import { HashLink } from "react-router-hash-link";
import Reveal from "../../../Components/Reveal";

export default function ServicesCTA() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="glow top-1/2 left-1/2 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 bg-primary/[0.07]" />

      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center relative">

        <Reveal>
          {/* Section Label */}
          <span className="eyebrow">
            Take The Next Step
          </span>

          {/* Heading */}
          <h2 className="heading-1 mt-5">
            Ready To Transform
            <span className="block italic">
              Your Organization?
            </span>
          </h2>

          {/* Description */}
          <p className="body-text mx-auto mt-6 max-w-2xl">
            Whether you're seeking strategic guidance, leadership transformation,
            Kingdom-centered business practices, or certification, Business2excel
            provides the framework and support to help your organization thrive
            with purpose, integrity, and lasting impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <HashLink to="/consultation">
              <button className="btn btn-primary w-full sm:w-auto">
                Book Consultation
              </button>
            </HashLink>

            <HashLink to="/certification">
              <button className="btn btn-ghost w-full sm:w-auto">
                Apply For Certification
              </button>
            </HashLink>

          </div>

        </Reveal>

      </div>


    </section>
  )
}

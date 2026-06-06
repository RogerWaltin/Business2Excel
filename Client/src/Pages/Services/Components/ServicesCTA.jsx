export default function ServicesCTA() {
  return (
    <section className="bg-black py-32">

      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Section Label */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Take The Next Step
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Ready To Transform
          <span className="block">
            Your Organization?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          Whether you're seeking strategic guidance, leadership transformation,
          Kingdom-centered business practices, or certification, Business2Excel
          provides the framework and support to help your organization thrive
          with purpose, integrity, and lasting impact.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="cursor-pointer rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-emerald-400">
            Book Consultation
          </button>
          
          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400 cursor-pointer">
            Apply For Certification
          </button> 
          
          {/*TODO figure out what to do with these two button*/}

        </div>
    
      </div>

      
    </section>
  )
}
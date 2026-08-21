import Reveal from "../../../Components/Reveal"

export default function FeaturedInsights() {
    return (
        <section id="featured-insight" className="bg-black pt-16 sm:pt-20 scroll-mt-16">

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <Reveal>
                    <span className="eyebrow">
                        Featured Insight
                    </span>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">

                        <div className="grid lg:grid-cols-2">

                            {/* Content */}

                            <div className="group relative overflow-hidden p-6 sm:p-10 lg:p-12">

                                <img src="/media/robot.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/75 to-black/60" />

                                <div className="relative z-10">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                                        Featured Report
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white mt-4">
                                        AI, Ethics, And The Future Of Kingdom Leadership
                                    </h2>
                                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-300 max-w-xl">
                                        Artificial intelligence is reshaping every industry,
                                        creating unprecedented opportunities alongside profound
                                        ethical challenges. As organizations accelerate adoption,
                                        leaders must learn to balance innovation, responsibility,
                                        human dignity, and long-term stewardship.
                                    </p>
                                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl">
                                        This report explores how Kingdom-centered leadership can
                                        navigate technological disruption without sacrificing
                                        ethical clarity, organizational trust, or meaningful
                                        human impact.
                                    </p>
                                </div>
                                {/* NOTE due to lack of content, i've temporarily disabled these two buttons */}
                                {/* <div className="mt-10 flex flex-wrap gap-4">

                                <button className="cursor-pointer rounded-xl bg-secondary px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-primary">
                                    Read Full Report
                                </button>

                                <button className="cursor-pointer rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-primary hover:text-primary">
                                    Download PDF
                                </button>

                            </div> */}

                            </div>

                            {/* Visual Side */}

                            <div className="group relative overflow-hidden flex items-center justify-center border-t border-zinc-800 p-6 sm:p-10 lg:border-t-0 lg:border-l">

                                <img src="/media/research.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/65 to-black/45" />

                                <div className="relative z-10 w-full flex justify-center py-4">

                                    <div className="backdrop-blur-md w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">

                                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                                            Research Report
                                        </p>

                                        <h3 className="font-display mt-3 text-xl sm:text-2xl font-bold text-white">
                                            AI & Biblical Leadership
                                        </h3>

                                        <div className="mt-6 space-y-2.5">

                                            {[
                                                "Ethical Decision Making",
                                                "Human Dignity & Technology",
                                                "Responsible AI Adoption",
                                                "Kingdom Leadership Principles",
                                            ].map((item) => (

                                                <div
                                                    key={item}
                                                    className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-black/50 px-4 py-3 text-sm text-zinc-300 transition-colors duration-300 hover:border-primary/40"
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                                                    {item}
                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </Reveal>

            </div>

        </section>
    )
}

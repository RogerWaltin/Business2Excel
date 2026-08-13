export default function FeaturedInsights() {
    return (
        <section id="featured-insight" className="bg-black pt-20">

            <div className="mx-auto max-w-7xl px-6">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Featured Insight
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-black">

                    <div className="grid lg:grid-cols-2">

                        {/* Content */}

                        <div className="p-10 md:p-14">

                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                                Featured Report
                            </p>

                            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                                AI, Ethics, And The Future Of Kingdom Leadership
                            </h2>

                            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                                Artificial intelligence is reshaping every industry,
                                creating unprecedented opportunities alongside profound
                                ethical challenges. As organizations accelerate adoption,
                                leaders must learn to balance innovation, responsibility,
                                human dignity, and long-term stewardship.
                            </p>

                            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                                This report explores how Kingdom-centered leadership can
                                navigate technological disruption without sacrificing
                                ethical clarity, organizational trust, or meaningful
                                human impact. Discover practical principles, emerging
                                challenges, and strategic considerations for leaders
                                operating in an increasingly AI-driven world.
                            </p>
                            {/* NOTE due to lack of content, i've temporarily disabled these two buttons */}
                            {/* <div className="mt-10 flex flex-wrap gap-4">

                                <button className="cursor-pointer rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-emerald-400">
                                    Read Full Report
                                </button>

                                <button className="cursor-pointer rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">
                                    Download PDF
                                </button>

                            </div> */}

                        </div>

                        {/* Visual Side */}

                        <div className="flex items-center justify-center border-t border-zinc-800 p-10 lg:border-t-0 lg:border-l">

                            <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

                                <p className="text-sm uppercase tracking-[0.15em] text-emerald-400">
                                    Research Report
                                </p>

                                <h3 className="mt-4 text-2xl font-bold text-white">
                                    AI & Biblical Leadership
                                </h3>

                                <div className="mt-8 space-y-4">

                                    <div className="rounded-xl border border-zinc-800 p-4">
                                        Ethical Decision Making
                                    </div>

                                    <div className="rounded-xl border border-zinc-800 p-4">
                                        Human Dignity & Technology
                                    </div>

                                    <div className="rounded-xl border border-zinc-800 p-4">
                                        Responsible AI Adoption
                                    </div>

                                    <div className="rounded-xl border border-zinc-800 p-4">
                                        Kingdom Leadership Principles
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
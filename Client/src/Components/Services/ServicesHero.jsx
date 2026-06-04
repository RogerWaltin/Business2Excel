export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-zinc-950 via-black to-black">

            {/* Background Glow */}
            <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 py-28">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <div>

                        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium tracking-widest text-emerald-400">
                            SERVICES
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
                            Transforming Organizations
                            <span className="block text-emerald-400">
                                For Lasting Kingdom Impact
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                            Helping leaders navigate disruption, strengthen leadership,
                            embrace innovation, and build organizations rooted in purpose,
                            stewardship, and excellence.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-emerald-400 cursor-pointer">
                                Book Consultation
                            </button> {/*TODO this button goes to consultation page*/}

                            <button className="rounded-xl border border-zinc-700 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-emerald-500 hover:text-emerald-400 cursor-pointer">
                                Explore Certification
                            </button>

                        </div>

                    </div>

                    {/* Right Content */}
                    <div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className="text-4xl font-bold text-emerald-400">
                                        12+
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className="text-4xl font-bold text-emerald-400">
                                        AI
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Business Reinvention
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className="text-4xl font-bold text-emerald-400">
                                        4
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Strategic Pillars
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className="text-4xl font-bold text-emerald-400">
                                        ✓
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Ethical Certification
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

                                <h3 className="text-lg font-semibold text-white">
                                    Kingdom Business Transformation
                                </h3>

                                <p className="mt-3 text-zinc-400">
                                    A strategic framework that integrates leadership,
                                    stewardship, innovation, and Kingdom principles into
                                    sustainable organizational growth.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
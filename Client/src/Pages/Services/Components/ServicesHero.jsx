import { Link } from "react-router-dom";

export default function ServicesHero() {
    const scrollToServices = () => {
        document.getElementById("kingdom-certification")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <section className="relative overflow-hidden pt-20 pb-10">

            {/* <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" /> */}
            
            <img src="/media/services.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black/70" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-flex items-center rounded-full border border-secondary/75 px-4 py-2 text-sm tracking-widest uppercase text-primary bg-black/50 backdrop-blur-xs">
                            Services
                        </span>
                        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                            Transforming Organizations
                            <span className="block text-primary">
                                For Lasting Kingdom Impact
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                            Helping leaders navigate disruption, strengthen leadership,
                            embrace innovation, and build organizations rooted in purpose,
                            stewardship, and excellence.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link to="/consultation">
                                <button className="rounded-xl bg-secondary px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-primary cursor-pointer">
                                    Book Consultation
                                </button>
                            </Link>

                            <button onClick={scrollToServices} className="rounded-xl border border-zinc-700 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-secondary hover:text-primary cursor-pointer bg-black/50 backdrop-blur-xs">
                                Explore Certifications
                            </button>

                        </div>

                    </div>

                    {/* Right Content */}
                    <div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-xs">

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-xs p-6">
                                    <p className="text-4xl font-bold text-primary">
                                        12+
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-xs p-6">
                                    <p className="text-4xl font-bold text-primary">
                                        AI
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Business Reinvention
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-xs p-6">
                                    <p className="text-4xl font-bold text-primary">
                                        4
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Strategic Pillars
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-xs p-6">
                                    <p className="text-4xl font-bold text-primary">
                                        ✓
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Ethical Certification
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-xs p-6">

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
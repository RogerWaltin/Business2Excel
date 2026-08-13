import { Link } from "react-router-dom";

export default function ServicesHero({ color1, color2 }) {
    const scrollToServices = () => {
        document.getElementById("kingdom-certification")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-zinc-950 via-black to-black pt-20">

            {/* <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" /> */}

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <div>
                        <span className={`inline-flex items-center rounded-full border border-${color2} px-4 py-2 text-sm tracking-widest uppercase text-${color1}`}>
                            Services
                        </span>
                        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                            Transforming Organizations
                            <span className={`block text-${color1}`}>
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
                                <button className={`rounded-xl bg-${color2} px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-${color1} cursor-pointer`}>
                                    Book Consultation
                                </button>
                            </Link>

                            <button onClick={scrollToServices} className={`rounded-xl border border-zinc-700 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-${color1} hover:text-${color1} cursor-pointer`}>
                                Explore Certifications
                            </button>

                        </div>

                    </div>

                    {/* Right Content */}
                    <div>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className={`text-4xl font-bold text-${color1}`}>
                                        12+
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className={`text-4xl font-bold text-${color1}`}>
                                        AI
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Business Reinvention
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className={`text-4xl font-bold text-${color1}`}>
                                        4
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Strategic Pillars
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                                    <p className={`text-4xl font-bold text-${color1}`}>
                                        ✓
                                    </p>
                                    <p className="mt-2 text-zinc-400">
                                        Ethical Certification
                                    </p>
                                </div>

                            </div>

                            <div className={`mt-8 rounded-2xl border border-${color2}/20  p-6`}>

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

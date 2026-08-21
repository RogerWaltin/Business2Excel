import { Link } from "react-router-dom";
import Reveal from "../../../Components/Reveal";

export default function ServicesHero() {
    const scrollToServices = () => {
        document.getElementById("kingdom-certification")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    const stats = [
        { value: "12+", label: "Years Experience" },
        { value: "AI", label: "Business Reinvention" },
        { value: "4", label: "Strategic Pillars" },
        { value: "✓", label: "Ethical Certification" },
    ]

    return (
        <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 border-b border-zinc-800/60">

            <img src="/media/services.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/95 via-black/80 to-zinc-950/50" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-950 to-transparent" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

                    {/* Left Content */}
                    <Reveal>
                        <span className="badge-pill">
                            Services
                        </span>
                        <h1 className="heading-1 mt-6">
                            Transforming Organizations
                            <span className="block text-primary italic">
                                For Lasting Kingdom Impact
                            </span>
                        </h1>

                        <p className="body-text mt-6 max-w-xl">
                            Helping leaders navigate disruption, strengthen leadership,
                            embrace innovation, and build organizations rooted in purpose,
                            stewardship, and excellence.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <Link to="/consultation">
                                <button className="btn btn-primary">
                                    Book Consultation
                                </button>
                            </Link>

                            <button onClick={scrollToServices} className="btn btn-ghost">
                                Explore Certifications
                            </button>

                        </div>

                    </Reveal>

                    {/* Right Content */}
                    <Reveal delay={0.15}>
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-7 backdrop-blur-md shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)]">

                            <div className="grid gap-3.5 grid-cols-2">

                                {stats.map((stat) => (

                                    <div key={stat.label} className="rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-4 sm:p-5 transition-colors duration-300 hover:border-primary/40">
                                        <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">
                                            {stat.label}
                                        </p>
                                    </div>

                                ))}

                            </div>

                            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-4 sm:p-5">

                                <h3 className="text-base font-semibold text-white">
                                    Kingdom Business Transformation
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    A strategic framework that integrates leadership,
                                    stewardship, innovation, and Kingdom principles into
                                    sustainable organizational growth.
                                </p>

                            </div>

                        </div>
                    </Reveal>

                </div>

            </div>

        </section>
    )
}

import Reveal from "../../../Components/Reveal"

export default function ServicesCertification() {
    const benefits = [
        {
            title: "Credibility & Trust",
            description:
                "Demonstrate a commitment to ethical leadership, stewardship, and Kingdom values that strengthens trust with employees, customers, and stakeholders.",
        },
        {
            title: "Strategic Alignment",
            description:
                "Align organizational culture, leadership practices, and business operations around a clear Kingdom-centered framework for growth and impact.",
        },
        {
            title: "Long-Term Impact",
            description:
                "Build a sustainable foundation that balances profitability, purpose, stewardship, and meaningful community transformation.",
        },
    ]

    const process = [
        {
            step: "01",
            title: "Assessment",
            description:
                "Evaluate current leadership, culture, operations, and strategic priorities against Kingdom-centered standards.",
        },
        {
            step: "02",
            title: "Alignment",
            description:
                "Identify opportunities for growth and align organizational practices with biblical principles and best practices.",
        },
        {
            step: "03",
            title: "Certification",
            description:
                "Demonstrate commitment to established standards and receive recognition for Kingdom-centered excellence.",
        },
        {
            step: "04",
            title: "Transformation",
            description:
                "Continue strengthening leadership, culture, stewardship, and organizational impact through ongoing development.",
        },
    ]

    return (
        <section
            id="kingdom-certification"
            className="bg-black pt-16 sm:pt-20 scroll-mt-16"
        >

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <Reveal>
                    <span className="eyebrow">
                        Kingdom Certification
                    </span>

                    <h2 className="heading-2 mt-5 max-w-4xl">
                        The Standard For Kingdom-Centered Excellence
                    </h2>

                    <p className="body-text mt-5 max-w-4xl">
                        Kingdom Certification is more than a credential. It is a comprehensive
                        framework designed to help organizations integrate biblical values,
                        ethical leadership, responsible stewardship, and long-term impact into
                        every aspect of their operations.
                    </p>

                    <p className="body-text mt-4 max-w-4xl">
                        In a business environment increasingly shaped by uncertainty,
                        disruption, and competing priorities, certification provides a clear
                        pathway toward organizational alignment, credibility, and sustainable
                        transformation rooted in Kingdom principles.
                    </p>
                </Reveal>

                {/* Benefits */}

                <div className="mt-12 sm:mt-16">

                    <Reveal>
                        <h3 className="heading-3 text-white">
                            Why Certification Matters
                        </h3>
                    </Reveal>

                    <div className="mt-6 sm:mt-8 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {benefits.map((benefit, index) => (

                            <Reveal key={benefit.title} delay={index * 0.08} className="h-full">

                                <div
                                    className="group h-full rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                                >

                                    <div className="h-px w-8 bg-primary/60 transition-all duration-300 group-hover:w-14" />

                                    <h4 className="text-lg font-semibold tracking-tight text-white mt-5">
                                        {benefit.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                        {benefit.description}
                                    </p>

                                </div>

                            </Reveal>

                        ))}

                    </div>

                </div>



            </div>

            {/* Process */}

            <div className="mt-16 sm:mt-20 py-14 sm:py-16 relative overflow-hidden">

                <img src="/media/journey.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

                <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/75 to-black/90" />

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">

                    <Reveal>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                            The Certification Journey
                        </h3>
                    </Reveal>

                    <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {process.map((item, index) => (
                            <Reveal key={item.step} delay={index * 0.08} className="h-full">
                                <div
                                    className="group h-full rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-primary/40"
                                >
                                    <p className="font-display text-4xl font-bold text-primary">
                                        {item.step}
                                    </p>
                                    <h4 className="mt-3.5 text-base font-semibold tracking-tight text-white">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

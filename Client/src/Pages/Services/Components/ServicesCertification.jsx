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
            className="bg-black pt-20"
        >

            <div className="mx-auto max-w-7xl px-6">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Kingdom Certification
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    The Standard For Kingdom-Centered Excellence
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-400">
                    Kingdom Certification is more than a credential. It is a comprehensive
                    framework designed to help organizations integrate biblical values,
                    ethical leadership, responsible stewardship, and long-term impact into
                    every aspect of their operations.
                </p>

                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-zinc-400">
                    In a business environment increasingly shaped by uncertainty,
                    disruption, and competing priorities, certification provides a clear
                    pathway toward organizational alignment, credibility, and sustainable
                    transformation rooted in Kingdom principles.
                </p>

                {/* Benefits */}

                <div className="mt-20">

                    <h3 className="text-3xl font-bold text-white">
                        Why Certification Matters
                    </h3>

                    <div className="mt-10 grid gap-8 lg:grid-cols-3">

                        {benefits.map((benefit) => (

                            <div
                                key={benefit.title}
                                className="rounded-3xl border border-zinc-800 bg-black p-8"
                            >

                                <h4 className="text-2xl font-semibold text-white">
                                    {benefit.title}
                                </h4>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    {benefit.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Process */}

                <div className="mt-24">

                    <h3 className="text-3xl font-bold text-white">
                        The Certification Journey
                    </h3>

                    <div className="mt-10 grid gap-8 lg:grid-cols-4">

                        {process.map((item) => (

                            <div
                                key={item.step}
                                className="rounded-3xl border border-zinc-800 bg-black p-8"
                            >

                                <p className="text-5xl font-bold text-primary">
                                    {item.step}
                                </p>

                                <h4 className="mt-4 text-xl font-semibold text-white">
                                    {item.title}
                                </h4>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}
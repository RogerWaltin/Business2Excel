export default function FeaturedResources() {
    const resources = [
        {
            type: "Framework",
            title: "7 Kingdom Principles For Business Transformation",
            description:
                "A practical framework for aligning leadership, culture, strategy, and organizational purpose through a Kingdom-centered lens.",
        },
        {
            type: "Report",
            title: "AI & Biblical Leadership",
            description:
                "Exploring how leaders can embrace technological innovation while maintaining ethical clarity, human dignity, and Kingdom-centered stewardship.",
        },
        {
            type: "Blueprint",
            title: "Kingdom Stewardship Blueprint",
            description:
                "Strategic guidance for faithful stewardship, wealth management, generosity, legacy planning, and long-term Kingdom impact.",
        },
        {
            type: "Guide",
            title: "Faith-Driven Business Reinvention Guide",
            description:
                "A roadmap for organizations navigating change, innovation, digital transformation, and sustainable growth in an increasingly complex marketplace.",
        },
    ]

    const imagePositions = [
        "top-0 left-0",
        "top-0 -left-[calc(100%+2rem)]",
        "-top-[calc(100%+2rem)] left-0",
        "-top-[calc(100%+2rem)] -left-[calc(100%+2rem)]",
    ]

    return (
        <section id="featured-resources" className="bg-black pt-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Label */}
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Featured Resources
                </p>

                {/* Heading */}
                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    Practical Frameworks For Leaders Building With Purpose
                </h2>

                {/* Paragraph */}
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                    Explore Business2excel's flagship reports, guides, and
                    strategic frameworks designed to help leaders navigate
                    disruption, strengthen stewardship, and create lasting
                    Kingdom impact.
                </p>

                {/* Resources Grid */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {resources.map((resource, index) => (
                        <div
                            key={resource.title}
                            className="group relative overflow-hidden rounded-3xl border border-zinc-800"
                        >

                            {/* Shared Image Cut-Out */}
                            <img
                                src="/media/featuredResources1.jpg"
                                alt=""
                                aria-hidden="true"
                                className={`absolute h-[calc(200%+2rem)] w-[calc(200%+2rem)] max-w-none object-cover ${imagePositions[index]}`}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/70 transition-all duration-300 group-hover:bg-black/55" />

                            {/* Card Content */}
                            <div className="relative z-10 flex h-full flex-col p-10">

                                <p className="text-sm uppercase tracking-[0.15em] text-primary">
                                    {resource.type}
                                </p>

                                <h3 className="mt-4 text-3xl font-bold text-white">
                                    {resource.title}
                                </h3>

                                <p className="mt-6 leading-relaxed text-zinc-300">
                                    {resource.description}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
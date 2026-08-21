import Reveal from "../../../Components/Reveal"

export default function KingdomWorldview() {
    const worldviewPrinciples = [
        "integrity",
        "accountability",
        "stewardship",
        "justice",
        "wisdom",
        "servant leadership",
        "generosity",
        "human dignity",
    ]

    return (
        <section id="kingdom-worldview" className="py-16 sm:py-20 lg:py-24 border-b border-zinc-800/60 scroll-mt-16">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                <Reveal className="max-w-3xl">

                    <span className="eyebrow">
                        Kingdom Worldview
                    </span>

                    <h2 className="heading-2 mt-5">
                        Business as a Platform for Stewardship and Transformation
                    </h2>

                </Reveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-10 sm:mt-12">

                    {worldviewPrinciples.map((item, index) => (

                        <Reveal key={item} delay={(index % 4) * 0.06} className="h-full">

                            <div
                                className="group card h-full px-6 py-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                            >

                                <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0 mr-3" />

                                <h3 className="capitalize text-sm sm:text-base font-medium text-zinc-100 text-center">
                                    {item}
                                </h3>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>

        </section>
    )
}

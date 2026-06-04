export default function WhyB2E() {

    const challenges = [
        "AI disruption",
        "ethical uncertainty",
        "leadership burnout",
        "cultural fragmentation",
        "consumer distrust",
        "mission drift",
        "rapid digital transformation",
    ]

    const frameworks = [
        "strategic excellence",
        "ethical clarity",
        "leadership wisdom",
        "innovation",
        "long-term purpose",
    ]

    return (
        <section id="why-business2excel-exists" className="py-28 border-b border-zinc-900">

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="text-emerald-400 uppercase tracking-widest text-sm">
                        Why Business2Excel Exists
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6">
                        Future-Ready Businesses Need More Than Technical Expertise
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 mt-16">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

                        <h3 className="text-2xl font-bold mb-8">
                            Modern Challenges
                        </h3>

                        <div className="space-y-4">

                            {challenges.map((item) => (

                                <div
                                    key={item}
                                    className="bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4"
                                >

                                    <span className="capitalize text-zinc-300">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

                        <h3 className="text-2xl font-bold mb-8">
                            Our Framework
                        </h3>

                        <div className="space-y-4">

                            {frameworks.map((item) => (

                                <div
                                    key={item}
                                    className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl px-5 py-4"
                                >

                                    <span className="capitalize text-emerald-400">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
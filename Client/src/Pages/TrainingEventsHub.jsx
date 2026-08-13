const opportunities = [
    {
        category: "Workshops",
        title: "Practical Training",
        description:
            "Interactive learning experiences focused on implementation, leadership, stewardship, and innovation.",
    },
    {
        category: "Conferences",
        title: "Kingdom Gatherings",
        description:
            "Annual flagship events connecting leaders, entrepreneurs, consultants, and innovators.",
    },
    {
        category: "Webinars",
        title: "Online Learning",
        description:
            "Accessible virtual sessions covering leadership, certification, and transformation topics.",
    },
    {
        category: "Mentorship",
        title: "Guided Growth",
        description:
            "Receive strategic guidance from experienced Kingdom leaders and practitioners.",
    },
]

export default function TrainingEventsHub({ color1, color2 }) {
    return (
        <div className="bg-zinc-950 text-white">

            {/* Hero */}

            <section className="py-20 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className={`text-${color1} uppercase tracking-widest text-sm`}>
                        Training & Events
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Equipping Leaders
                        <span className={`text-${color1} block`}>
                            For Kingdom Impact
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
                        Participate in workshops, conferences, webinars, and mentorship
                        opportunities designed to strengthen leadership, stewardship,
                        innovation, and organizational transformation.
                    </p>

                </div>

            </section>

            {/* Opportunities */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {opportunities.map((item) => (

                            <div
                                key={item.category}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                            >

                                <span className={`text-${color1} uppercase text-sm tracking-wider`}>
                                    {item.category}
                                </span>

                                <h3 className="text-2xl font-bold mt-4">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400 mt-4">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Upcoming Opportunities */}

            {/* <section className="py-16 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Upcoming Opportunities
                        </h2>

                        <p className="text-zinc-400 mt-6">
                            Register your interest and receive updates about future
                            workshops, conferences, webinars, and mentorship programs.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Leadership Workshops</h3>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Kingdom Conferences</h3>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
                            <h3 className="font-semibold">Mentorship Cohorts</h3>
                        </div>

                    </div>

                </div>

            </section> */}

            {/* Registration Form */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-center">
                            Join Our Programmes
                        </h2>

                        <form className="space-y-6 mt-10">

                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-${color2}`}
                            />

                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-${color2}`}
                            />

                            <input
                                type="text"
                                required
                                placeholder="Organization"
                                className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-${color2}`}
                            />

                            <select
                                className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-${color2}`}
                            >
                                <option selected disabled >Select Area of Interest</option>
                                <option>Workshops</option>
                                <option>Conferences</option>
                                <option>Webinars</option>
                                <option>Mentorship</option>
                            </select>

                            <textarea
                                rows="5"
                                placeholder="Tell us about your goals..."
                                className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-${color2} resize-none`}
                            />

                            <button
                                type="submit"
                                className={`w-full bg-${color2} hover:bg-${color1} text-black font-semibold py-4 rounded-xl transition-all duration-300 cursor-pointer`}
                            >
                                Submit Registration
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    )
}
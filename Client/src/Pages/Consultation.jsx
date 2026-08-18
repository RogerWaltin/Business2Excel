export default function Consultation() {
    return (
        <div className="bg-zinc-950 text-white">

            {/* Hero */}

            <section className="py-20 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-primary uppercase tracking-widest text-sm">
                        Consultation
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Begin Your
                        <span className="text-primary block">
                            Transformation Journey
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
                        Schedule a strategic consultation to explore how
                        Business2excel can help your organization integrate
                        Kingdom principles, leadership excellence, innovation,
                        and lasting impact.
                    </p>

                </div>

            </section>

            {/* Form */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-3xl mx-auto px-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-center">
                            Request A Consultation
                        </h2>

                        <form className="space-y-6 mt-10">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <input
                                type="text"
                                placeholder="Organization"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary"
                            />

                            <textarea
                                rows="6"
                                placeholder="Tell us about your goals and challenges..."
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-secondary resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-primary text-black font-semibold py-4 rounded-xl transition-all duration-300 cursor-pointer"
                            >
                                Submit Consultation Request
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* What Happens Next */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            What Happens Next?
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">

                        {[
                            {
                                title: "Initial Discovery",
                                desc: "We learn about your organization, goals, challenges, and opportunities.",
                            },
                            {
                                title: "Strategic Assessment",
                                desc: "We identify areas for Kingdom alignment, leadership growth, and transformation.",
                            },
                            {
                                title: "Recommended Pathway",
                                desc: "Receive tailored recommendations for consulting, certification, training, or mentorship.",
                            },
                        ].map((item) => (

                            <div
                                key={item.title}
                                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
                            >

                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400 mt-4 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Final CTA */}

            <section className="py-20">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Build A Business That Creates
                        <span className="text-primary block">
                            Lasting Kingdom Impact
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                        We look forward to learning more about your vision,
                        your organization, and the transformation you seek.
                    </p>

                </div>

            </section>

        </div>
    )
}
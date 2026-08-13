export default function Network({ color1, color2 }) {
    return (
        <div className="bg-zinc-950 text-white">

            {/* Hero */}

            <section className="py-20 border-b border-zinc-900">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-emerald-400 uppercase tracking-widest text-sm">
                        Kingdom Business Network
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold mt-6">
                        Join A Community Of
                        <span className="text-emerald-400 block">
                            Kingdom-Minded Leaders
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
                        Connect with entrepreneurs, executives, consultants,
                        investors, ministry leaders, and innovators who share
                        a vision for Kingdom-centered transformation and impact.
                    </p>

                </div>

            </section>

            {/* Application Form */}

            <section className="py-16 border-b border-zinc-900">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold text-center">
                            Join the Movement
                        </h2>

                        <form className="space-y-6 mt-10">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                            />

                            <input
                                type="text"
                                placeholder="Organization"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                            />

                            <input
                                type="text"
                                placeholder="Role / Position"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                            />

                            <textarea
                                rows="5"
                                placeholder="Tell us a little about yourself and why you would like to join the network..."
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-emerald-500 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 rounded-xl transition-all duration-300 cursor-pointer"
                            >
                                Submit Application
                            </button>

                        </form>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-20">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-5xl font-bold">
                        Together We Can Create
                        <span className="text-emerald-400 block">
                            Lasting Kingdom Impact
                        </span>
                    </h2>

                    <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                        Become part of a growing network committed to leadership,
                        stewardship, transformation, and Kingdom influence.
                    </p>

                </div>

            </section>

        </div>
    )
}
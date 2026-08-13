export default function AbourHero({ color1, color2 }) {
    return (
        <section className="relative overflow-hidden pb-16 border-b border-zinc-900">

            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" /> */}

            <div className="max-w-7xl mx-auto px-6 py-17 relative z-10">

                <div className="max-w-4xl">
                    <span className={`inline-flex items-center rounded-full border border-${color2} px-4 py-2 text-sm tracking-widest uppercase text-${color1}`}>
                        About
                    </span>
                    <h1 className="text-5xl md:text-5xl font-bold leading-tight mt-8">
                        Building a Global
                        <span className={`text-${color1} block`}>
                            Kingdom Business
                        </span>
                        Transformation Ecosystem
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
                        Business2Excel equips entrepreneurs, executives, and organizations
                        to integrate Kingdom principles, ethical leadership, strategic
                        innovation, and AI-age transformation into modern business.
                    </p>

                </div>

            </div>

        </section>
    )
}
export default function AbourHero() {
    return (
        <section className="relative overflow-hidden pb-30 border-b border-zinc-900">

            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_35%)]" /> */}

            <img src="/media/about.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black/70" />

            <div className="max-w-7xl mx-auto px-6 py-17 relative z-10">

                <div className="max-w-4xl">
                    <span className="inline-flex items-center rounded-full border border-secondary/75 px-4 py-2 text-sm tracking-widest uppercase text-primary bg-black/50 backdrop-blur-xs">
                        About
                    </span>
                    <h1 className="text-5xl md:text-5xl font-bold leading-tight mt-8">
                        Building a Global
                        <span className="text-primary block">
                            Kingdom Business
                        </span>
                        Transformation Ecosystem
                    </h1>

                    <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl">
                        Business2excel equips entrepreneurs, executives, and organizations
                        to integrate Kingdom principles, ethical leadership, strategic
                        innovation, and AI-age transformation into modern business.
                    </p>

                </div>

            </div>

        </section>
    )
}
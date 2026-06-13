import { HashLink } from "react-router-hash-link"

export default function Footer() {

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Training & Events", to: "/community#training-events" },
        { label: "Services", to: "/services" },
        { label: "Community", to: "/community" },
        { label: "About", to: "/about" },
        { label: "Kingdom Certification", to: "/services#kingdom-certification" },
    ]

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12">

                    {/* Brand */}

                    <div>

                        <HashLink
                            to="/"
                            className="text-3xl font-bold tracking-tight group text-white hover:text-emerald-400 transition-colors duration-300"
                        >
                            Business
                            <span className="text-emerald-400 group-hover:text-white transition-colors duration-300">
                                2
                            </span>
                            Excel
                        </HashLink>

                        <p className="text-zinc-400 leading-relaxed mt-6 max-w-md">
                            Business2Excel equips leaders, entrepreneurs, and organizations
                            to integrate Kingdom principles, ethical leadership,
                            innovation, and AI-age transformation into modern business.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-white font-semibold text-lg mb-6">
                            Quick Links
                        </h3>

                        <div className="grid grid-cols-2 gap-y-4">

                            {navLinks.map((link) => (

                                <HashLink
                                    key={link.label}
                                    to={link.to}
                                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
                                >
                                    {link.label}
                                </HashLink>

                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-white font-semibold text-lg mb-5.5">
                            Contact Us
                        </h3>

                        <HashLink to={"/contact"}>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Book Consultation
                            </p>
                        </HashLink>

                        <HashLink to={"/contact"}>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Reach Out To Us
                            </p>
                        </HashLink>

                    </div>

                </div>

            </div>

            {/* Bottom Bar */}

            <div className="border-t border-zinc-800">

                <div className="max-w-7xl mx-auto px-6 py-6 text-center">

                    <p className="text-sm text-zinc-500">
                        © 2026 Business2Excel. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}
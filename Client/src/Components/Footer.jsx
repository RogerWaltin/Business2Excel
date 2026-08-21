import { HashLink } from "react-router-hash-link"
import logo from "../Assets/B2E_LogoOld.png"

export default function Footer() {

    const quickLinks = [
        { label: "Home", to: "/" },
        { label: "Training & Events", to: "/community#training-events" },
        { label: "Services", to: "/services" },
        { label: "Community", to: "/community" },
        { label: "About", to: "/about" },
        { label: "Kingdom Certification", to: "/services#kingdom-certification" },
    ]

    const mainLinks = [
        { label: "Contact", to: "/contact" },
        { label: "Book Consultation", to: "/consultation" },
        { label: "Apply For Certifications", to: "/certification" },

    ]

    return (
        <footer className="bg-zinc-950 relative overflow-hidden">

            {/* Subtle top glow */}
            <div className="glow -top-40 left-1/2 h-72 w-xl -translate-x-1/2 bg-primary/5" />

            <div className="relative">

                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">

                        {/* Brand */}

                        <div>
                            <HashLink smooth to="/" className="inline-block">
                                <img src={logo} alt="logo" className="w-28 lg:w-32 h-auto" />
                            </HashLink>

                            <p className="text-sm leading-relaxed text-zinc-500 mt-4 max-w-md">
                                Business2excel equips leaders, entrepreneurs, and organizations
                                to integrate Kingdom principles, ethical leadership,
                                innovation, and AI-age transformation into modern business.
                            </p>
                        </div>

                        {/* Quick Links */}

                        <div>

                            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white mb-5">
                                Quick Links
                            </h3>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">

                                {quickLinks.map((link) => (

                                    <HashLink
                                        key={link.label}
                                        to={link.to}
                                        className="text-sm text-zinc-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.label}
                                    </HashLink>

                                ))}

                            </div>

                        </div>

                        {/* Contact */}

                        <div>

                            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white mb-5">
                                Reach Out To Us
                            </h3>

                            <div className="flex flex-col gap-y-3">

                                {mainLinks.map((link) => (

                                    <HashLink
                                        key={link.label}
                                        to={link.to}
                                        className="text-sm text-zinc-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.label}
                                    </HashLink>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}

                <div className="border-t border-zinc-800/70">

                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 text-center">

                        <p className="text-xs text-zinc-600">
                            © 2026 Business2excel. All rights reserved.
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    )
}

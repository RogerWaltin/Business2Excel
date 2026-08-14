import { HashLink } from "react-router-hash-link"
import logo from "../Assets/B2EOriLogo.jpeg"

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
        <footer className="bg-zinc-950 border-t border-zinc-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12">

                    {/* Brand */}

                    <div>
                        <HashLink smooth to="/">
                            <img src={logo} alt="logo" className="w-28 lg:w-32 h-auto" />
                        </HashLink>
                        
                        <p className="text-zinc-400 leading-relaxed mt-2 max-w-md">
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

                            {quickLinks.map((link) => (

                                <HashLink
                                    key={link.label}
                                    to={link.to}
                                    className="text-zinc-400 hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </HashLink>

                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-white font-semibold text-lg mb-6">
                            Reach Out To Us
                        </h3>

                        <div className="flex flex-col gap-y-4">

                            {mainLinks.map((link) => (

                                <HashLink
                                    key={link.label}
                                    to={link.to}
                                    className="text-zinc-400 hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </HashLink>

                            ))}

                        </div>

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
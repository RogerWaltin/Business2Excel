import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ]

    const socialLinks = [
        { icon: faFacebookF, href: "https://facebook.com", label: "Facebook" },
        { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
        { icon: faLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: faXTwitter, href: "https://x.com", label: "X" },
    ]

    return (
        <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
            <div className="max-w-7xl mx-50 px-6 py-14 grid gap-12 md:grid-cols-[2fr_1fr_1.5fr]">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">
                        Business2Excel<span className="align-super text-sm">™</span>
                    </h2>

                    <p className="text-sm leading-relaxed text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae officiis molestiae
                        doloremque eligendi, exercitationem neque iste blanditiis.
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        {socialLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

                    <ul className="space-y-3">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <Link to={link.to} className="hover:text-white transition-colors duration-200">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>

                    <p className="text-sm text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum.
                    </p>

                    <a
                        href="mailto:contact@business2excel.com"
                        className="inline-block text-sm text-white hover:text-zinc-300 transition-colors duration-200"
                    >
                        contact@business2excel.com
                    </a>
                </div>
            </div>

            <div className="border-t border-zinc-800 py-5 px-6 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} Business2Excel™. All rights reserved.
            </div>
        </footer>
    )
}
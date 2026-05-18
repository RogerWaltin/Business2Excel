import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

const desktopLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
    ? "bg-zinc-800 text-green-400"
    : "text-white hover:bg-zinc-800 hover:text-green-400"
  }`

const mobileLinkClass = ({ isActive }) =>
  `px-4 py-3 rounded-lg transition-all duration-300 ${isActive
    ? "bg-zinc-800 text-green-400"
    : "text-white hover:bg-zinc-800 hover:text-green-400"
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white hover:text-green-400 transition-colors duration-300"
        >
          Business2Excel
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">

          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer hover:text-green-400 transition-colors duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col gap-2 border-t border-zinc-800 bg-zinc-950 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"}`}>

        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            className={mobileLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}

      </div>

    </nav>
  )
}
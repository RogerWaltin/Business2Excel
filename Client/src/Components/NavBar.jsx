import { useState } from "react"
import { Link } from "react-router-dom"

const navSections = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Resources", to: "/resources" },
  { label: "Community", to: "/community" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

export default function Navbar() {

  const [activeDropdown, setActiveDropdown] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  return (
    <div className="sticky top-0 z-50">

      <div className="relative">

        {/* Navbar */}
        <nav className="bg-zinc-900/75 backdrop-blur-md border-b border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors duration-300">
              Business2Excel
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center h-full">

              {navSections.map((section) => (

                <div
                  key={section.label}
                  className="relative h-full"
                  onMouseEnter={() => setActiveDropdown(section.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >

                  {/* Nav Button */}
                  <button className={`h-full flex items-center gap-2 px-5 transition-all duration-300 cursor-pointer border-b-2 ${activeDropdown === section.label ? "border-emerald-400 text-emerald-400" : "border-transparent text-white hover:text-emerald-400"}`}>

                    <span className="font-medium">
                      {section.label}
                    </span>

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === section.label ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                  </button>

                  {/* Empty Desktop Dropdown */}
                  <div className={`absolute left-0 top-18 w-72 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${activeDropdown === section.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>

                    <div className="p-6 min-h-48">
                      
                      {/* Add your dropdown content here */}

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen
                ? <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                : <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>

          </div>

        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-750" : "max-h-0"}`}>

          <div className="px-6 py-4 flex flex-col gap-2">

            {navSections.map((section) => (

              <div key={section.label} className="flex flex-col">

                {/* Mobile Trigger */}
                <button
                  onClick={() => setMobileDropdown((prev) => prev === section.label ? null : section.label)}
                  className="flex items-center justify-between px-4 py-4 rounded-xl text-white hover:bg-zinc-900 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
                >

                  <span className="text-lg font-medium">
                    {section.label}
                  </span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === section.label ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>

                </button>

                {/* Empty Mobile Dropdown */}
                <div className={`overflow-hidden transition-all duration-500 ${mobileDropdown === section.label ? "max-h-96 opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"}`}>

                  <div className="ml-4 rounded-2xl bg-zinc-900 border border-zinc-800 min-h-32 p-4">

                    {/* Add your mobile dropdown content here */}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}
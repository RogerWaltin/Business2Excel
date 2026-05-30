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
  const [menuOpen, setMenuOpen] = useState(false)

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

                <div key={section.label} to={section.to} className="relative h-full flex items-center" >

                  {/* Nav Button */}
                  <Link to={section.to} className={`h-fit w-fit flex items-center mx-7 transition-all duration-300 cursor-pointer border-b-2 border-transparent text-white hover:text-emerald-400`}>

                    <span className="font-medium">
                      {section.label}
                    </span>

                  </Link>

                  

                </div>

              ))}

            </div>

            {/* Hamburger */} {/*BUG There's a delay when closing the hamburger menu. not sure why*/}
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
                <button className="flex items-center justify-between px-4 py-4 rounded-xl text-white hover:bg-zinc-900 hover:text-emerald-400 transition-all duration-300 cursor-pointer">

                  <span className="text-lg font-medium">
                    {section.label}
                  </span>

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}
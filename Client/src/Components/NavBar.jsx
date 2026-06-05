import { useState } from "react"
import { HashLink } from "react-router-hash-link"
//BUG when clicking a page in navbar, it goes to the bottom of the page not top.
// BUG when clicking on a page that you are currently on, it doesnt go back to top of page
const navSections = [

  {
    label: "Home",
    to: "/"
  },

  {
    label: "Services",
    to: "/services",
    dropdown: [
      { label: "Consulting", to: "/services#consulting" },
      { label: "Kingdom Certification", to: "/services#kingdom-certification" },
      { label: "Business Transformation", to: "/services#business-transformation" },
      { label: "Kingdom Leadership", to: "/services#kingdom-leadership" },
      { label: "Stewardship & Wealth", to: "/services#stewardship-wealth" },
      { label: "Business as Mission", to: "/services#business-as-mission" },
      { label: "Strategic Consultation", to: "/services#strategic-consultation" },
    ],
  },

  {
    label: "Resources",
    to: "/resources",
    dropdown: [
      { label: "Articles", to: "/resources/articles" },
      { label: "Videos", to: "/resources/videos" },
      { label: "Podcasts", to: "/resources/podcasts" },
      { label: "Whitepapers", to: "/resources/whitepapers" },
      { label: "AI + Ethics Reports", to: "/resources/ai-ethics-reports" },
      { label: "Biblical Business Insights", to: "/resources/biblical-business-insights" },
      { label: "Leadership Devotionals", to: "/resources/leadership-devotionals" },
      { label: "Downloadable Frameworks", to: "/resources/downloadable-frameworks" },
      { label: "Case Studies", to: "/resources/case-studies" },
      { label: "Media Archive", to: "/resources/media-archive" },
    ],
  },

  {
    label: "Community",
    to: "/community",
    dropdown: [
      { label: "Community", to: "/community#community" },
      { label: "Kingdom Business Network", to: "/community#kingdom-business-network" },
      { label: "Training & Events", to: "/community#training-events" },
      { label: "Workshops", to: "/community#workshops" },
      { label: "Conferences", to: "/community#conferences" },
      { label: "Webinars", to: "/community#webinars" },
      { label: "Mentorship", to: "/community#mentorship" },
      { label: "Member Directory", to: "/community#member-directory" },
      { label: "Impact", to: "/community#impact" },
      { label: "Mission Projects", to: "/community#mission-projects" },
      { label: "Transformation Stories", to: "/community#transformation-stories" },
    ],
  },

  {
    label: "About",
    to: "/about",
    dropdown: [
      { label: "Our Story", to: "/about#our-story" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Founder Story", to: "/about#founder-story" },
      { label: "Vision & Mission", to: "/about#vision-mission" },
      { label: "Kingdom Worldview", to: "/about#kingdom-worldview" },
      { label: "Why Business2Excel Exists", to: "/about#why-business2excel-exists" },
      { label: "Case Studies", to: "/about#testimonials-case-studies" },
      { label: "FAQ", to: "/about#faq" },
    ],
  },

  {
    label: "Contact",
    to: "/contact"
  },

]

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({})

  function toggleDropdown(label) {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <div className="sticky top-0 z-50 overflow-x-clip">

      <div className="relative">

        {/* Navbar */}
        <nav className="bg-zinc-900/75 backdrop-blur-md border-b border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center">

            {/* Logo */}
            <HashLink
              smooth
              to="/"
              className="mr-auto text-2xl font-bold tracking-tight group text-white hover:text-emerald-400 transition-colors duration-300"
            >

              Business
              <span className="text-emerald-400 group-hover:text-white transition-colors duration-300">
                2
              </span>
              Excel

            </HashLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1 h-full">

              {navSections.map((section) => (

                <div
                  key={section.label}
                  className="relative group h-full flex items-center"
                >

                  {/* Main Nav Link */}
                  <HashLink
                    smooth
                    to={section.to}
                    className="h-fit w-fit flex items-center gap-2 mx-7 text-white hover:text-emerald-400 transition-all duration-300"
                  >

                    <span className="font-medium">
                      {section.label}
                    </span>

                    {section.dropdown && (

                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />

                      </svg>

                    )}

                  </HashLink>

                  {/* Desktop Dropdown */}
                  {section.dropdown && (

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                      <div className={`${section.label === "Services" ? "w-187.5" : "w-225"} bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl`}>

                        {section.label === "Services" ? (

                          <div className="grid grid-cols-2 gap-12">

                            {/* Consulting */}

                            <div>

                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Consulting
                              </p>

                              <div className="mt-3 h-px bg-zinc-800" />

                              <div className="mt-5 flex flex-col">

                                <HashLink
                                  smooth
                                  to="/services#business-transformation"
                                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                                >
                                  Business Transformation
                                </HashLink>

                                <HashLink
                                  smooth
                                  to="/services#kingdom-leadership"
                                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                                >
                                  Kingdom Leadership
                                </HashLink>

                                <HashLink
                                  smooth
                                  to="/services#stewardship-and-wealth"
                                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                                >
                                  Stewardship & Wealth
                                </HashLink>

                                <HashLink
                                  smooth
                                  to="/services#business-as-mission"
                                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                                >
                                  Business as Mission
                                </HashLink>

                              </div>

                            </div>

                            {/* Certification */}

                            <div>

                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Certification
                              </p>

                              <div className="mt-3 h-px bg-zinc-800" />

                              <div className="mt-5 flex flex-col">

                                <HashLink
                                  smooth
                                  to="/services#kingdom-certification"
                                  className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                                >
                                  Kingdom Certification
                                </HashLink>

                              </div>

                            </div>

                          </div>

                        ) : (

                          <div className="grid grid-cols-3 gap-3">

                            {section.dropdown.map((item) => (

                              <HashLink
                                key={item.label}
                                smooth
                                to={item.to}
                                className="flex items-center rounded-2xl px-5 py-4 text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                              >
                                {item.label}
                              </HashLink>

                            ))}

                          </div>

                        )}

                      </div>

                    </div>

                  )}

                </div>

              ))}

            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >

              {menuOpen ? (

                <svg
                  className="w-7 h-7"
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
                  className="w-7 h-7"
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

        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden transition-[max-height] duration-300 ease-in-out ${menuOpen ? "max-h-500" : "max-h-0"}`}
        >

          <div className="px-6 py-4 flex flex-col gap-2">

            {navSections.map((section) => (

              <div
                key={section.label}
                className="bg-zinc-900 rounded-2xl overflow-hidden"
              >

                {/* Mobile Main Button */}
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className="w-full flex items-center justify-between px-4 py-4 text-white hover:text-emerald-400 transition-all duration-300 cursor-pointer"
                >

                  <HashLink
                    smooth
                    to={section.to}
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg font-medium"
                  >

                    {section.label}

                  </HashLink>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns[section.label] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />

                  </svg>

                </button>

                {/* Mobile Dropdown */}
                {section.dropdown && (

                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${mobileDropdowns[section.label] ? "max-h-250" : "max-h-0"}`}
                  >

                    <div className="pb-3">

                      {section.dropdown.map((item) => (

                        <HashLink
                          key={item.label}
                          smooth
                          to={item.to}
                          onClick={() => {
                            setMenuOpen(false)
                            setMobileDropdowns({})
                          }}
                          className="block mx-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-300"
                        >

                          {item.label}

                        </HashLink>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

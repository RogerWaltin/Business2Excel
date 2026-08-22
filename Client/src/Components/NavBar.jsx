import { useState, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import logo from "/media/Business2excel_Logo.png"

const navSections = [
  {
    label: "Home",
    to: "/"
  },
  {
    label: "Services", to: "/services",
    dropdownGroups: [
      {
        title: "Consulting",
        links: [
          {
            label: "Business Transformation", to: "/services#business-transformation",
          },

          {
            label: "Kingdom Leadership", to: "/services#kingdom-leadership",
          },

          {
            label: "Stewardship & Wealth", to: "/services#stewardship-and-wealth",
          },

          {
            label: "Business as Mission", to: "/services#business-as-mission",
          }
        ]
      },
      {
        title: "Certification",
        links: [
          {
            label: "Kingdom Certification", to: "/services#kingdom-certification",
          }
        ]
      }
    ],
  },
  {
    label: "Resources", to: "/resources",
    dropdownGroups: [
      {
        title: "Featured",
        links: [
          {
            label: "Featured Insight", to: "/resources#featured-insight",
          },
          {
            label: "Featured Resources", to: "/resources#featured-resources",
          },
        ],
      },
      {
        title: "Resource Library",
        links: [
          {
            label: "Articles", to: "/resources/articles",
          },
          {
            label: "Whitepapers", to: "/resources/whitepapers",
          },
          {
            label: "Videos", to: "/resources/videos",
          },
          {
            label: "Podcasts", to: "/resources/podcasts",
          },
          {
            label: "AI + Ethics Reports", to: "/resources/ai-ethics-reports",
          },
          {
            label: "Biblical Business Insights", to: "/resources/biblical-business-insights",
          },
          {
            label: "Leadership Devotionals", to: "/resources/leadership-devotionals",
          },
          {
            label: "Downloadable Frameworks", to: "/resources/frameworks",
          },
          {
            label: "Case Studies", to: "/resources/case-studies",
          },
        ],
      },
    ]
  },
  {
    label: "Community", to: "/community",
    dropdownGroups: [
      {
        title: "Community",
        links: [
          {
            label: "Impact", to: "/community#impact",
          },
          // {
          //   label: "Networks, Projects & Stories", to: "/community#network-projects-stories",
          // },
          {
            label: "Training & Events", to: "/community#training-events",
          },
          // {
          //   label: "Member Directory", to: "/community#member-directory",
          // },
        ],
      },
      {
        title: "Training & Events",
        links: [
          {
            label: "Workshops", to: "/community#workshops",
          },
          {
            label: "Conferences", to: "/community#conferences",
          },
          {
            label: "Webinars", to: "/community#webinars",
          },
          {
            label: "Mentorship", to: "/community#mentorship",
          },
        ],
      },

    ],
  },
  {
    label: "About", to: "/about",

    dropdownGroups: [
      {
        title: "About Us",

        links: [
          {
            label: "Our Story", to: "/about#our-story",
          },
          {
            label: "Leadership", to: "/about#leadership",
          },
          {
            label: "Founder Story", to: "/about#founder-story",
          },
          {
            label: "FAQ", to: "/about#faq",
          },
        ],
      },
      {
        title: "Identity",

        links: [
          {
            label: "Vision & Mission", to: "/about#vision-mission",
          },
          {
            label: "Kingdom Worldview", to: "/about#kingdom-worldview",
          },
          {
            label: "Case Studies", to: "/about#testimonials-case-studies",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact"
  },

]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")

    function handleResize(e) {
      if (e.matches) {
        setMenuOpen(false)
        setOpenSection(null)
      }
    }

    mediaQuery.addEventListener("change", handleResize)
    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  function handleMenu() {
    setMenuOpen((prev) => !prev)
    if (menuOpen) {
      setOpenSection(null)
    }
  }

  function toggleSection(label) {
    setOpenSection((prev) => (prev === label ? null : label))
  }

  return (
    <div className="sticky top-0 z-50 overflow-x-clip">

      <div className="relative">

        {/* Navbar */}
        <nav className="bg-zinc-950/80 backdrop-blur-md">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 flex items-center">

            {/* Logo */}
            <HashLink smooth to="/" className="mr-auto flex items-center">
              <img src={logo} alt="logo" className="w-24 sm:w-28 lg:w-32 h-auto" />
            </HashLink>

            {/* Hamburger */} {/* BUG rapidly clicking hamburger menu causes the logo to not switch and the dropdown menu stuck in current state */}
            <button
              onClick={handleMenu}
              className="lg:hidden ml-auto text-zinc-300 hover:text-primary transition-colors duration-300 cursor-pointer rounded-lg p-1.5 -mr-1.5"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

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
                    className="h-fit w-fit flex items-center gap-1.5 mx-5 text-sm text-zinc-300 hover:text-primary transition-colors duration-300"
                  >
                    <span className="font-medium">{section.label}</span>

                    {section.dropdownGroups && (
                      <svg
                        className="w-3.5 h-3.5 mt-px opacity-70 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </HashLink>

                  {/* Desktop Dropdown */}
                  {section.dropdownGroups && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-136 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-x-8 gap-y-6">
                        {section.dropdownGroups.map((group) => (
                          <div key={group.title}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                              {group.title}
                            </p>
                            <div className="mt-3 h-px bg-linear-to-r from-primary/25 to-transparent" />
                            <div className="mt-3 flex flex-col">
                              {group.links.map((link) => (
                                <HashLink
                                  key={link.label}
                                  smooth
                                  to={link.to}
                                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:bg-zinc-800/70 hover:text-primary"
                                >
                                  {link.label}
                                </HashLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

          {/* Gold hairline */}
          <div className="h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

        </nav>

        {/* ── Mobile Menu Overlay ── */}
        <div
          className={`
            lg:hidden fixed inset-x-0 top-16 bottom-0 z-40
            bg-zinc-950/98 backdrop-blur-xl
            overflow-y-auto overscroll-contain
            transition-all duration-300 ease-in-out
            ${menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <div className="px-5 py-5 flex flex-col gap-1 pb-16">

            {navSections.map((section) => {
              const hasDropdown = Boolean(section.dropdownGroups)
              const isOpen = openSection === section.label

              return (
                <div key={section.label} className="border-b border-zinc-800/60 last:border-none">

                  {/* Section row */}
                  {hasDropdown ? (

                    <button
                      onClick={() => toggleSection(section.label)}
                      className="w-full flex items-center justify-between py-3.5 text-base font-medium text-white hover:text-primary transition-colors duration-200 cursor-pointer"
                      aria-label={isOpen ? `Collapse ${section.label}` : `Expand ${section.label}`}
                    >

                      <HashLink
                        smooth
                        to={section.to}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMenu()
                        }}
                      >
                        {section.label}
                      </HashLink>

                      <svg
                        className={`w-4.5 h-4.5 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>

                    </button>

                  ) : (

                    <HashLink
                      smooth
                      to={section.to}
                      onClick={handleMenu}
                      className="block py-3.5 text-base font-medium text-white hover:text-primary transition-colors duration-200"
                    >
                      {section.label}
                    </HashLink>

                  )}

                  {/* Accordion body — rendered when open */}
                  {hasDropdown && isOpen && (
                    <div className="pb-4 flex flex-col gap-5">
                      {section.dropdownGroups.map((group) => (
                        <div key={group.title}>

                          {/* Group title */}
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary px-2 mb-1.5">
                            {group.title}
                          </p>

                          {/* Links */}
                          <div className="flex flex-col">
                            {group.links.map((link) => (
                              <HashLink
                                key={link.label}
                                smooth
                                to={link.to}
                                onClick={handleMenu}
                                className="rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-zinc-800/70 hover:text-primary transition-colors duration-200"
                              >
                                {link.label}
                              </HashLink>
                            ))}
                          </div>

                        </div>
                      ))}
                    </div>
                  )}

                </div>
              )
            })}

          </div>
        </div>

      </div>

    </div>
  )
}

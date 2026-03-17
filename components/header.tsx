"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

const dienstenItems = [
  { label: "Vloer laten leggen", href: "/diensten/vloer-laten-leggen" },
  { label: "Egaliseren", href: "/diensten/egaliseren" },
  { label: "Vloerverwarming", href: "/diensten/vloerverwarming" },
  { label: "Dichtsmeren van de leidingen", href: "/diensten/dichtsmeren" },
  { label: "Plinten plaatsen", href: "/diensten/plinten-plaatsen" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDienstenOpen, setIsDienstenOpen] = useState(false)
  const [isMobileDienstenOpen, setIsMobileDienstenOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  
  // Pages with transparent header that changes on scroll
  const isTransparentPage = pathname === "/" || pathname === "/veelgestelde-vragen"

  useEffect(() => {
    // Trigger initial animation
    setIsLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if header should have solid background
  const hasSolidBg = !isTransparentPage || isScrolled
  const textColor = hasSolidBg ? "text-[#3b3522]" : "text-foreground"
  const textColorMuted = hasSolidBg ? "text-[#3b3522] hover:text-[#5a4d38]" : "text-foreground/80 hover:text-foreground"
  const borderColor = hasSolidBg ? "border-[#3b3522]" : "border-foreground"

  // Check if a path is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  // Get link class based on active state
  const getLinkClass = (href: string) => {
    if (isActive(href)) {
      return `px-3 py-1 text-sm font-medium uppercase tracking-wide transition-colors duration-300 border ${textColor} ${borderColor}`
    }
    return `text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${textColorMuted}`
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidBg 
          ? "bg-[#c9b99a] shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-bold tracking-tight uppercase transition-colors duration-300 ${textColor}`}>
              Compleet vloeren
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={getLinkClass("/")}
            >
              Home
            </Link>
            
            {/* Diensten Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDienstenOpen(true)}
              onMouseLeave={() => setIsDienstenOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 ${isActive("/diensten") 
                  ? `px-3 py-1 border ${textColor} ${borderColor}` 
                  : textColorMuted
                } text-sm font-medium uppercase tracking-wide transition-colors duration-300`}
              >
                Diensten
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDienstenOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDienstenOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div className="bg-[#d4c4a8] border border-[#b8a888] shadow-lg min-w-[280px]">
                    {dienstenItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-5 py-3 text-sm uppercase tracking-wide transition-colors ${
                          pathname === item.href 
                            ? "bg-[#c9b99a] text-[#3b3522] font-medium" 
                            : "text-[#4a4538] hover:bg-[#c9b99a]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/assortiment" 
              className={getLinkClass("/assortiment")}
            >
              Assortiment
            </Link>
            <Link 
              href="/over-ons" 
              className={getLinkClass("/over-ons")}
            >
              Over ons
            </Link>
            <Link 
              href="/veelgestelde-vragen" 
              className={getLinkClass("/veelgestelde-vragen")}
            >
              Veelgestelde vragen
            </Link>
            <Link 
              href="/contact" 
              className={getLinkClass("/contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${hasSolidBg ? "border-[#3b3522]/20" : "border-foreground/20"}`}>
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`text-sm font-medium uppercase tracking-wide ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Diensten Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileDienstenOpen(!isMobileDienstenOpen)}
                  className={`flex items-center justify-between w-full text-sm font-medium uppercase tracking-wide ${textColor}`}
                >
                  Diensten
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDienstenOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileDienstenOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {dienstenItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm uppercase tracking-wide ${hasSolidBg ? "text-[#3b3522]/70" : "text-foreground/60"}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                href="/assortiment" 
                className={`text-sm font-medium uppercase tracking-wide ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Assortiment
              </Link>
              <Link 
                href="/over-ons" 
                className={`text-sm font-medium uppercase tracking-wide ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Over ons
              </Link>
              <Link 
                href="/veelgestelde-vragen" 
                className={`text-sm font-medium uppercase tracking-wide ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Veelgestelde vragen
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-medium uppercase tracking-wide ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

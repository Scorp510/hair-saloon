import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import logoImage from "@/assets/dank-logo-transparent.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["about", "services", "features", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", section: "about" },
    { name: "Services", href: "#services", section: "services" },
    { name: "Why Us", href: "#features", section: "features" },
    { name: "Reviews", href: "#testimonials", section: "testimonials" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative bg-black rounded-lg p-1">
              <img 
                src={logoImage} 
                alt="DANK Salon" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  activeSection === link.section
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.section && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-4 relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                BOOK NOW
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
              <Menu size={20} />
            </span>
            <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
              <X size={20} />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-6 px-4 gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-left text-lg font-medium transition-all duration-300 py-3 px-4 rounded-xl ${
                  activeSection === link.section
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-4 mt-4 rounded-xl transition-all duration-300"
            >
              <Scissors className="w-5 h-5" />
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 py-6 px-4 md:px-8 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-poppins font-bold">
            <a href="#home" className="gradient-text">
              Shivam Daffar
            </a>
          </h2>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-item font-poppins text-textPrimary hover:text-accent transition-colors text-[15px] ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-textPrimary" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md py-4 px-4 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-poppins text-textPrimary hover:text-accent transition-colors ${
                    activeSection === item.href.substring(1) ? "text-accent" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

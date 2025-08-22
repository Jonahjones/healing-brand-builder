import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const navItems = [
    { name: "About", href: "/about" }, // Always navigate to /about page
    { name: "Specialties", href: "/specialties" },
    { name: "Approach", href: "/approach" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" }
  ];

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    // If on home page, scroll to top
    if (onHome) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };



  const handleContactClick = () => {
    if (onHome) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 0; // Exact positioning
        const elementPosition = contactSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = '/contact';
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="font-heading font-bold text-primary hover:text-primary/80 transition-colors duration-300 flex-shrink-0"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            <span className="hidden lg:inline">Zach Rehbein-Jones, LCSW</span>
            <span className="hidden sm:inline lg:hidden">Zach Rehbein-Jones</span>
            <span className="sm:hidden">Z. Rehbein-Jones</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gentle-terracotta focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gentle-terracotta focus:ring-offset-2 ${
                  (pathname === item.href || (item.name === "About" && pathname === "/about")) 
                    ? 'text-primary bg-primary/10 shadow-lg' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
              >
                {item.name}
              </Link>
            ))}
            {onHome ? (
              <Button 
                className="cta-enhanced text-white font-bold px-6 py-2 rounded-lg"
                onClick={handleContactClick}
                style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
              >
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="hidden xl:inline">Book Your Free Consultation</span>
                  <span className="xl:hidden">Book Consultation</span>
                </span>
              </Button>
            ) : (
              <Link to="/contact">
                <Button 
                  className="cta-enhanced text-white font-bold px-6 py-2 rounded-lg"
                  onClick={handleContactClick}
                  style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
                >
                  <span className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="hidden xl:inline">Book Your Free Consultation</span>
                    <span className="xl:hidden">Book Consultation</span>
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-white/95 backdrop-blur-md rounded-lg mx-2 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`font-medium px-4 py-3 text-left rounded-md transition-all duration-500 hover:bg-primary/5 text-base transform hover:translate-x-2 ${
                    (pathname === item.href || (item.name === "About" && pathname === "/about"))
                      ? 'text-primary bg-primary/10 shadow-md'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                {onHome ? (
                  <Button 
                    className="w-full cta-enhanced text-white font-bold py-3 rounded-lg"
                    onClick={handleContactClick}
                  >
                    <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                  </Button>
                ) : (
                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full cta-enhanced text-white font-bold py-3 rounded-lg"
                      onClick={handleContactClick}
                    >
                      <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA Button - Mobile Optimized */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        {onHome ? (
          <Button 
            className="w-full cta-enhanced text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-white/30"
            onClick={handleContactClick}
          >
            <span className="hidden sm:inline"><Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation</span>
            <span className="sm:hidden"><Calendar className="w-5 h-5 mr-2" />Book Now</span>
          </Button>
        ) : (
          <Link to="/contact" className="block">
            <Button 
              className="w-full cta-enhanced text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-white/30"
              onClick={handleContactClick}
            >
              <span className="hidden sm:inline"><Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation</span>
              <span className="sm:hidden"><Calendar className="w-5 h-5 mr-2" />Book Now</span>
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navigation;
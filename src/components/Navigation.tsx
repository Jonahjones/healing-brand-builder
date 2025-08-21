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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary truncate hover:text-primary/80 transition-colors duration-300"
          >
            <span className="hidden sm:inline">Zach Rehbein-Jones, LCSW</span>
            <span className="sm:hidden">Zach Rehbein-Jones, LCSW</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
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
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5 ${
                  (pathname === item.href || (item.name === "About" && pathname === "/about")) 
                    ? 'text-primary bg-primary/10 shadow-lg' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {onHome ? (
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-white/30 ring-2 ring-gentle-terracotta/20"
                onClick={handleContactClick}
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            ) : (
              <Link to="/contact">
                <Button 
                  className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-white/30 ring-2 ring-gentle-terracotta/20"
                  onClick={handleContactClick}
                >
                  <span className="relative z-10 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                    onClick={handleContactClick}
                  >
    <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                  </Button>
                ) : (
                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
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
            className="w-full group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/30 ring-2 ring-gentle-terracotta/20"
            onClick={handleContactClick}
          >
            <span className="hidden sm:inline"><Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation</span>
            <span className="sm:hidden"><Calendar className="w-5 h-5 mr-2" />Book Now</span>
          </Button>
        ) : (
          <Link to="/contact" className="block">
            <Button 
              className="w-full group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/30 ring-2 ring-gentle-terracotta/20"
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
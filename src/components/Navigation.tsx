import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Approach", href: "#virtual-therapy" },
    { name: "Pricing", href: "#rates" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Enhanced smooth scrolling with custom timing
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest' 
      });
      
      // Set active section for visual feedback
      setActiveSection(targetId);
      
      // Close mobile menu
      setIsMenuOpen(false);
      
      // Add a slight delay to ensure smooth completion
      setTimeout(() => {
        // Optional: Add any post-scroll effects here
      }, 800);
    }
  };

  const handleLogoClick = () => {
    // Smooth scroll to top when logo is clicked
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setActiveSection("");
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary truncate hover:text-primary/80 transition-colors duration-300"
          >
            <span className="hidden sm:inline">Zach Rehbein-Jones, LCSW</span>
            <span className="sm:hidden">Zach R-J, LCSW</span>
          </button>
          
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
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-primary bg-primary/10 shadow-lg' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                  });
                  setActiveSection('contact');
                }
              }}
            >
              📅 Book Your Free Consultation
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-white/95 backdrop-blur-md rounded-lg mx-2 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium px-4 py-3 text-left rounded-md transition-all duration-500 hover:bg-primary/5 text-base transform hover:translate-x-2 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10 shadow-md'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      });
                      setActiveSection('contact');
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  📅 Book Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA Button - Mobile Optimized */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button 
          className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
              setActiveSection('contact');
            }
          }}
        >
                        <span className="hidden sm:inline">📅 Book Your Free Consultation</span>
                        <span className="sm:hidden">📅 Book Now</span>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
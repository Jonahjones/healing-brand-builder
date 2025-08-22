import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Lock, Award, Calendar } from "lucide-react";
import { HeroBackgroundImage } from "@/components/ui/responsive-image";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden backdrop-blur-sm"
    >
      {/* Optimized background image with improved loading */}
      <div className="absolute inset-0 opacity-60">
        <HeroBackgroundImage
          src="/lovable-uploads/pexels-karolina-grabowska-5237975.jpg"
          alt="Peaceful therapy environment with natural lighting"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 lg:from-white/90 lg:via-white/70 lg:to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen">
        <div className="text-left lg:max-w-2xl">
          {/* Premium brand indicator */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 bg-gentle-terracotta rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cozy-brown/20 shadow-sm">
              <span className="text-xs font-semibold text-cozy-brown uppercase tracking-wider">Licensed Therapist</span>
            </div>
          </div>
          
          {/* Clean, readable headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 leading-tight text-cozy-brown">
            <span className="block mb-1">Mental Health</span>
            <span className="block">Therapy That Gets</span>
            <span className="text-gentle-terracotta block">Results</span>
          </h1>
          
          {/* More compact description */}
          <div className="card-enhanced rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-base sm:text-lg text-cozy-brown leading-relaxed font-medium">
              <span className="font-bold text-gentle-terracotta">Online therapy</span> with
              <a href="/approach/" className="font-bold text-earth-clay hover:underline"> practical strategies</a> that breaks through mental challenges and builds lasting change.
            </p>
            <p className="text-sm sm:text-base text-cozy-brown/70 leading-relaxed font-medium mt-2 pt-2 border-t border-gentle-terracotta/20">
              Licensed in <span className="font-bold text-gentle-terracotta">California</span> and <span className="font-bold text-earth-clay">Wisconsin</span>
            </p>
          </div>
          
          {/* Trust badges - enhanced visibility */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md border border-gentle-terracotta/30">
              <Award className="w-4 h-4 text-gentle-terracotta" />
              <span className="text-xs sm:text-sm font-semibold text-cozy-brown">LCSW Licensed</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md border border-earth-clay/30">
              <Lock className="w-4 h-4 text-earth-clay" />
              <span className="text-xs sm:text-sm font-semibold text-cozy-brown">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md border border-forest-green/30">
              <CheckCircle className="w-4 h-4 text-forest-green" />
              <span className="text-xs sm:text-sm font-semibold text-cozy-brown">Insurance Accepted</span>
            </div>
          </div>
          
          {/* More reasonably sized CTA section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="cta-enhanced group relative overflow-hidden text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerOffset = 0; // Exact positioning
                    const elementPosition = contactSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">Book Your Free Consultation</span>
                  <span className="sm:hidden">Book Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

            </div>
          </div>
        </div>

        {/* Right column intentionally minimal to show background image */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
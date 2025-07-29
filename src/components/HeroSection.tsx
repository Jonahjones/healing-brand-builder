import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Lock, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/pexels-karolina-grabowska-5237975.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 lg:from-white/90 lg:via-white/70 lg:to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen">
        <div className="text-left lg:max-w-2xl">
          {/* Premium brand indicator */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cozy-brown/20 shadow-sm">
              <span className="text-xs font-semibold text-cozy-brown uppercase tracking-wider">Licensed Therapist</span>
            </div>
          </div>
          
          {/* More reasonably sized headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 leading-tight">
            <span className="text-cozy-brown block mb-1">Mental Health</span>
            <span className="text-transparent bg-gradient-to-r from-gentle-terracotta via-earth-clay to-cozy-brown bg-clip-text block">
              Coaching That Gets
            </span>
            <span className="text-gentle-terracotta block">Results</span>
          </h1>
          
          {/* More compact description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gentle-terracotta/20 shadow-xl mb-4 sm:mb-6">
            <p className="text-base sm:text-lg text-cozy-brown leading-relaxed font-medium">
              I provide adults and young adults with <span className="font-bold text-gentle-terracotta">honest feedback</span>,
              <span className="font-bold text-earth-clay"> practical strategies</span>, and
              <span className="font-bold text-cozy-brown"> committed support</span> to break through mental challenges and build lasting change.
            </p>
            <p className="text-sm sm:text-base text-cozy-brown/70 leading-relaxed font-medium mt-2 pt-2 border-t border-gentle-terracotta/20">
              Licensed in <span className="font-bold text-gentle-terracotta">California</span> and <span className="font-bold text-earth-clay">Wisconsin</span>
            </p>
          </div>
          
          {/* More compact trust badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge variant="outline" className="bg-white/95 backdrop-blur-sm border-2 border-gentle-terracotta/30 text-cozy-brown font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-gentle-terracotta" />
              LCSW Licensed
            </Badge>
            <Badge variant="outline" className="bg-white/95 backdrop-blur-sm border-2 border-earth-clay/30 text-cozy-brown font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-earth-clay" />
              HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="bg-white/95 backdrop-blur-sm border-2 border-success-green/30 text-cozy-brown font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-success-green" />
              Insurance Accepted
            </Badge>
          </div>
          
          {/* More reasonably sized CTA section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white border-0 font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center">
                  📱 Book Free Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cozy-brown/30 bg-white/90 backdrop-blur-sm text-cozy-brown hover:bg-cozy-brown hover:text-white font-bold text-sm sm:text-base px-6 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🤝 See If We're a Good Fit
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
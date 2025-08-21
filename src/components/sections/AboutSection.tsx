import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { ProfileImage } from "@/components/ui/responsive-image";
const zachProfessionalImage = "/lovable-uploads/62dfc03a-96b9-4f6c-821e-c327b9b4a5d6.png";

export default function AboutSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "about" : undefined} className={`pt-24 pb-16 ${withId ? 'backdrop-blur-sm bg-white/5' : 'bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/30'} relative overflow-hidden min-h-screen transition-all duration-1000 ease-out`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gentle-terracotta/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-8 sm:mb-12">
          {/* Professional Photo with Enhanced Design */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              {/* Decorative background shapes */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gentle-terracotta/20 to-soft-sage/20 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-cozy-brown/10 to-earth-clay/10 rounded-2xl"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <ProfileImage
                  src={zachProfessionalImage}
                  alt="Zach Rehbein-Jones, Licensed Clinical Social Worker"
                  className="w-full rounded-xl shadow-lg object-cover aspect-[3/4]"
                  loading="lazy"
                />

                {/* Enhanced License Badge */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-gentle-terracotta to-earth-clay text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-xl">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Licensed LCSW
                </div>

                {/* Trust indicator */}
                <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-lg border border-soft-sage/20">
                  <span className="text-xs font-medium text-cozy-brown">WI & CA Licensed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content with Better Visual Hierarchy */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            {/* Spacing for header clearance */}
            <div className="pt-4 sm:pt-6"></div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-cozy-brown block">You Deserve a Therapist Who</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
                Truly Understands and Supports You
              </span>
            </h1>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-soft-sage/20 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl text-cozy-brown/90 leading-relaxed">
                Licensed Clinical Social Worker providing online counseling in California and Wisconsin. I create a compassionate, judgment-free space where your unique experiences are truly understood.
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 rounded-2xl p-4 sm:p-6 border border-gentle-terracotta/20 overflow-hidden shadow-lg">
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl"></div>
              <p className="relative text-base sm:text-lg text-cozy-brown leading-relaxed">
                I combine clinical expertise with genuine care for <a href="/specialties/" className="text-gentle-terracotta hover:underline font-medium">anxiety, depression, life transitions, and relationships</a>. Together we'll build an authentic connection using my <a href="/approach/" className="text-gentle-terracotta hover:underline font-medium">evidence-based approach</a>.
              </p>
            </div>

            {/* Enhanced Action Section */}
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-white/30 ring-2 ring-gentle-terracotta/20"
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
                  <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
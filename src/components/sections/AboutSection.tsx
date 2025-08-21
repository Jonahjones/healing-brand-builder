import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
const zachProfessionalImage = "/lovable-uploads/62dfc03a-96b9-4f6c-821e-c327b9b4a5d6.png";

export default function AboutSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "about" : undefined} className="pt-24 pb-16 bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 relative overflow-hidden min-h-screen">
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

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <img
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown leading-tight">
              You Deserve a Therapist Who
              <span className="block text-gentle-terracotta">Understands and Supports You</span>
            </h1>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-soft-sage/20 shadow-lg">
              <p className="text-base sm:text-lg lg:text-xl text-cozy-brown/90 leading-relaxed">
                I am a Licensed Clinical Social Worker licensed in California and Wisconsin who knows seeking therapy takes courage. You want more than credentials. You want a compassionate, judgment-free space where your unique experiences are understood.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 rounded-2xl p-4 sm:p-6 border border-gentle-terracotta/20">
              <p className="text-base sm:text-lg text-cozy-brown/80 leading-relaxed">
                Whether facing anxiety, depression, life transitions, or relationship challenges, I combine clinical expertise with genuine care to guide your healing journey. Outside sessions, I am a Bucks fan and runner. Together we will build an authentic connection that supports your growth.
              </p>
            </div>

            {/* Enhanced Action Section */}
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerOffset = 80;
                    const elementPosition = contactSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                📅 Book Your Free Consultation
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
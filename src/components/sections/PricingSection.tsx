import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Shield, CreditCard, Users, Calendar } from "lucide-react";
import s from "./PricingSection.module.css";

export default function PricingSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "rates" : undefined} data-page-hero data-pricing-root className={`${withId ? 'backdrop-blur-sm bg-white/5' : 'bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/30'} relative overflow-hidden min-h-screen transition-all duration-1000 ease-out ${s.pricing}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cozy-brown/8 to-warm-sage/8 rounded-full blur-3xl"></div>
      
      <div className={`${s.container} relative z-10`}>
        {/* Hero section */}
        <header data-pricing-lead data-lead="pricing" data-role="pricing-hero" className="text-center mb-4">
          {withId ? (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-cozy-brown block">Investment in Your</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
                Mental Health Journey
              </span>
            </h2>
          ) : (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-cozy-brown block">Investment in Your</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
                Mental Health Journey
              </span>
            </h1>
          )}
          <p className="text-sm sm:text-base text-cozy-brown/70 max-w-xl mx-auto leading-relaxed">
            Quality therapy that's accessible. Multiple payment options and insurance support.
          </p>
        </header>

        {/* Main pricing display */}
        <div className="max-w-4xl mx-auto">
          {/* Central pricing card */}
          <Card className="bg-white border-2 border-gentle-terracotta/20 shadow-xl mb-8 hover:transform-none hover:shadow-xl transition-none max-w-2xl mx-auto">
            {/* Price Header - More prominent */}
            <CardHeader className="text-center pt-8 pb-6 bg-gradient-to-br from-gentle-terracotta/5 to-warm-sage/5">
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-3 mb-3">
                  <span className="text-6xl font-heading font-bold text-cozy-brown">$100</span>
                  <span className="text-2xl text-cozy-brown/70 font-medium">/session</span>
                </div>
                <p className="text-lg text-cozy-brown/80 font-medium">45-minute focused sessions</p>
              </div>
            </CardHeader>

            <CardContent className="pt-0 pb-8 px-8">
              {/* Value proposition - more concise */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-semibold text-cozy-brown mb-4">
                  What makes this investment worthwhile?
                </h3>
                <p className="text-lg text-cozy-brown/70 leading-relaxed">
                  Professional therapy designed to move you forward.
                </p>
              </div>

              {/* Benefits - Single column for better readability */}
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-gentle-terracotta/5 to-warm-sage/5 rounded-xl p-6">
                  <h4 className="font-heading font-semibold text-cozy-brown mb-4 text-lg flex items-center gap-3">
                    <Check className="w-6 h-6 text-gentle-terracotta" />
                    Professional Care
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gentle-terracotta rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">Evidence-based methods</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gentle-terracotta rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">Personalized approach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gentle-terracotta rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">Between-session support</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-warm-sage/5 to-gentle-terracotta/5 rounded-xl p-6">
                  <h4 className="font-heading font-semibold text-cozy-brown mb-4 text-lg flex items-center gap-3">
                    <Shield className="w-6 h-6 text-warm-sage" />
                    Accessible Options
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-warm-sage rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">Sliding scale pricing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-warm-sage rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">Insurance superbills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-warm-sage rounded-full flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium">HSA/FSA eligible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prominent CTA */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-white/30 ring-2 ring-gentle-terracotta/20 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      const headerOffset = 0;
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
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Your Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <p className="text-sm text-cozy-brown/60 mt-4 leading-relaxed">
                  Let's discuss your needs and see if we're a good fit • No pressure, just clarity
                </p>
              </div>



            </CardContent>
          </Card>

          {/* Simple closing message */}
          <div className="text-center mt-6">
            <p className="text-cozy-brown/60 text-sm leading-relaxed max-w-2xl mx-auto">
              Professional care with genuine compassion for your journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cozy-brown">
              <span className="block">Investment in Your</span>
              <span className="text-gentle-terracotta block">
                Mental Health Journey
              </span>
            </h2>
          ) : (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-cozy-brown">
              <span className="block">Investment in Your</span>
              <span className="text-gentle-terracotta block">
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
          <Card className="bg-white border border-gentle-terracotta/20 shadow-lg mb-6 max-w-3xl mx-auto">
            {/* Compact price header */}
            <CardHeader className="text-center py-6 bg-white border-b border-gentle-terracotta/10">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-heading font-bold text-cozy-brown">$100</span>
                <span className="text-lg text-cozy-brown/70 font-medium">/session</span>
              </div>
              <p className="text-cozy-brown/80 text-sm">45-minute focused sessions</p>
            </CardHeader>

            <CardContent className="p-6">
              {/* Left side: Value proposition, Right side: Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Left side - Value proposition */}
                <div className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold text-cozy-brown">
                    What makes this investment worthwhile?
                  </h3>
                  <p className="text-cozy-brown/70 text-sm leading-relaxed">
                    Professional therapy designed to move you forward with evidence-based methods and personalized care.
                  </p>
                </div>

                {/* Right side - Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cozy-brown text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta" />
                      Professional Care
                    </h4>
                    <div className="space-y-2 text-sm pl-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gentle-terracotta rounded-full"></div>
                        <span className="text-cozy-brown/80">Evidence-based methods</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gentle-terracotta rounded-full"></div>
                        <span className="text-cozy-brown/80">Personalized approach</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gentle-terracotta rounded-full"></div>
                        <span className="text-cozy-brown/80">Between-session support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cozy-brown text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4 text-warm-sage" />
                      Accessible Options
                    </h4>
                    <div className="space-y-2 text-sm pl-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-warm-sage rounded-full"></div>
                        <span className="text-cozy-brown/80">Sliding scale pricing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-warm-sage rounded-full"></div>
                        <span className="text-cozy-brown/80">Insurance superbills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-warm-sage rounded-full"></div>
                        <span className="text-cozy-brown/80">HSA/FSA eligible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact CTA */}
              <div className="text-center pt-4">
                <Button 
                  className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Free Consultation
                </Button>
                <p className="text-xs text-cozy-brown/60 mt-3">
                  No pressure, just clarity • Let's see if we're a good fit
                </p>
              </div>



            </CardContent>
          </Card>



        </div>
      </div>
    </section>
  );
}
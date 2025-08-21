import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Shield, CreditCard, Users, Phone } from "lucide-react";
import s from "./PricingSection.module.css";

export default function PricingSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "rates" : undefined} data-page-hero data-pricing-root className={`bg-gradient-to-br from-warm-cream via-white to-natural-beige relative overflow-hidden min-h-screen ${s.pricing}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cozy-brown/8 to-warm-sage/8 rounded-full blur-3xl"></div>
      
      <div className={`${s.container} relative z-10`}>
        {/* Hero section */}
        <header data-pricing-lead data-lead="pricing" data-role="pricing-hero" className="text-center mb-4">
          {withId ? (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-cozy-brown mb-2">
              Investment in Your <span className="text-gentle-terracotta">Wellbeing</span>
            </h2>
          ) : (
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-cozy-brown mb-2">
              Investment in Your <span className="text-gentle-terracotta">Wellbeing</span>
            </h1>
          )}
          <p className="text-sm sm:text-base text-cozy-brown/70 max-w-xl mx-auto leading-relaxed">
            Quality therapy that's accessible. Multiple payment options and insurance support.
          </p>
        </header>

        {/* Main pricing display */}
        <div className="max-w-4xl mx-auto">
          {/* Central pricing card */}
          <Card className="bg-soft-cream/40 border-2 border-gentle-terracotta/20 shadow-xl mb-6 hover:transform-none hover:shadow-xl transition-none">
            <CardHeader className="text-center pt-6 pb-4 bg-gradient-to-br from-gentle-terracotta/5 to-warm-sage/5">
              <div className="w-16 h-16 bg-gradient-to-br from-gentle-terracotta/20 to-warm-sage/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-gentle-terracotta" />
              </div>
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-heading font-bold text-cozy-brown">$100</span>
                  <span className="text-xl text-cozy-brown/70 font-medium">/session</span>
                </div>
                <p className="text-cozy-brown/80 font-medium">45-minute focused sessions</p>
              </div>

            </CardHeader>
            <CardContent className="pt-6 pb-6">
              {/* Enhanced value proposition */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-heading font-semibold text-cozy-brown mb-3">
                  What makes this investment worthwhile?
                </h3>
                <p className="text-cozy-brown/70 leading-relaxed max-w-lg mx-auto">
                  Professional therapy with someone who genuinely cares about your progress. Every session is designed to move you forward.
                </p>
              </div>

              {/* Enhanced benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-cozy-brown mb-3 text-base flex items-center gap-2">
                    <Check className="w-5 h-5 text-gentle-terracotta" />
                    Professional Care
                  </h4>
                  <div className="space-y-3 pl-7">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gentle-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">Evidence-based therapy methods that actually work</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gentle-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">Personalized approach tailored to your specific needs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gentle-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">Between-session support and resources</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-cozy-brown mb-3 text-base flex items-center gap-2">
                    <Shield className="w-5 h-5 text-warm-sage" />
                    Accessible Options
                  </h4>
                  <div className="space-y-3 pl-7">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-warm-sage rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">Sliding scale pricing for qualifying clients</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-warm-sage rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">Insurance superbills for reimbursement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-warm-sage rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-cozy-brown font-medium text-sm">HSA/FSA eligible • Payment plans available</span>
                    </div>
                  </div>
                </div>
              </div>



              {/* Strong CTA */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-gentle-terracotta to-earth-clay text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 mb-3"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Free 15-Minute Consultation
                </Button>
                <p className="text-sm text-cozy-brown/60">
                  Let's discuss your needs and see if we're a good fit • No pressure, just clarity
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Simple closing message */}
          <div className="text-center mt-6">
            <p className="text-cozy-brown/60 text-sm leading-relaxed max-w-2xl mx-auto">
              Taking the first step toward better mental health takes courage. I'm here to support you with 
              professional care, clear communication, and genuine compassion for your journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
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
        <header data-pricing-lead data-lead="pricing" data-role="pricing-hero" className="text-center mb-6">
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
          <Card className="bg-soft-cream/40 border-2 border-gentle-terracotta/20 shadow-xl mb-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gentle-terracotta to-warm-sage"></div>
            <CardHeader className="text-center pt-4 pb-3 bg-gradient-to-br from-gentle-terracotta/5 to-warm-sage/5">
              <div className="w-12 h-12 bg-gentle-terracotta/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-6 h-6 text-gentle-terracotta" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-4xl font-bold text-cozy-brown">$100</span>
                <span className="text-lg text-cozy-brown/60 font-medium">/session</span>
              </div>
              <CardDescription className="text-sm text-cozy-brown/60">45-minute therapy sessions</CardDescription>
            </CardHeader>
            <CardContent className="pt-3 pb-4">
              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-cozy-brown mb-2 text-sm">What's Included</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">Evidence-based methods</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">Personalized treatment plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">Between-session resources</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-cozy-brown mb-2 text-sm">Payment & Insurance</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">Sliding scale available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">Insurance superbills provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gentle-terracotta flex-shrink-0" />
                      <span className="text-cozy-brown/80 text-sm">HSA/FSA eligible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment options summary */}
              <div className="bg-gentle-terracotta/5 rounded-lg p-3 border border-gentle-terracotta/20">
                <h4 className="font-semibold text-cozy-brown mb-2 text-center text-sm">Flexible Payment Options</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <DollarSign className="w-4 h-4 text-gentle-terracotta" />
                    </div>
                    <p className="text-xs font-medium text-cozy-brown">Private Pay</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <Shield className="w-4 h-4 text-gentle-terracotta" />
                    </div>
                    <p className="text-xs font-medium text-cozy-brown">Insurance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <Users className="w-4 h-4 text-gentle-terracotta" />
                    </div>
                    <p className="text-xs font-medium text-cozy-brown">Sliding Scale</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <CreditCard className="w-4 h-4 text-gentle-terracotta" />
                    </div>
                    <p className="text-xs font-medium text-cozy-brown">Payment Plans</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  );
}
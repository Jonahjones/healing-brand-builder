import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, DollarSign, Shield, CreditCard, Users } from "lucide-react";
import s from "./PricingSection.module.css";

export default function PricingSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "rates" : undefined} data-page-hero data-pricing-root className={`bg-gradient-to-br from-warm-cream via-white to-natural-beige relative overflow-hidden ${s.pricing}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cozy-brown/8 to-warm-sage/8 rounded-full blur-3xl"></div>
      
      <div className={`${s.container} relative z-10`}>
        {/* Hero section */}
        <header data-pricing-lead data-lead="pricing" data-role="pricing-hero" className="text-center mb-8">
          {withId ? (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cozy-brown mb-4">
              Investment in Your <span className="text-gentle-terracotta">Wellbeing</span>
            </h2>
          ) : (
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cozy-brown mb-4">
              Investment in Your <span className="text-gentle-terracotta">Wellbeing</span>
            </h1>
          )}
          <p className="text-base sm:text-lg text-cozy-brown/70 max-w-2xl mx-auto leading-relaxed">
            Quality therapy that's accessible. Multiple payment options and insurance support.
          </p>
        </header>

        {/* Main content grid: 2-column on desktop */}
        <div className={s.mainGrid}>
          {/* Left column: Payment options */}
          <div className={s.paymentOptions}>
            <h3 className="text-xl font-semibold text-cozy-brown mb-6 text-center lg:text-left">Payment Options</h3>
            
            <div className={s.optionsGrid}>
              {/* Private Pay */}
              <Card className={`${s.optionCard} bg-soft-cream/40 shadow-lg hover:shadow-xl transition-all duration-300 border border-cozy-brown/10`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-success-green/10 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-success-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cozy-brown">Private Pay</h4>
                      <p className="text-sm text-cozy-brown/60">Direct payment, immediate access</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-green flex-shrink-0" />
                      <span className="text-cozy-brown/80">No insurance hassles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success-green flex-shrink-0" />
                      <span className="text-cozy-brown/80">Immediate scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Insurance */}
              <Card className={`${s.optionCard} bg-soft-cream/40 shadow-lg hover:shadow-xl transition-all duration-300 border border-cozy-brown/10`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cozy-brown">Insurance</h4>
                      <p className="text-sm text-cozy-brown/60">Out-of-network provider</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Detailed superbills provided</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Submit directly to insurance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Payment Plans */}
              <Card className={`${s.optionCard} bg-soft-cream/40 shadow-lg hover:shadow-xl transition-all duration-300 border border-cozy-brown/10`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cozy-brown">Payment Plans</h4>
                      <p className="text-sm text-cozy-brown/60">Flexible arrangements</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Case-by-case basis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Multiple payment options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Sliding Scale */}
              <Card className={`${s.optionCard} bg-soft-cream/40 shadow-lg hover:shadow-xl transition-all duration-300 border border-cozy-brown/10`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cozy-brown">Sliding Scale</h4>
                      <p className="text-sm text-cozy-brown/60">Based on financial need</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Income-based pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-cozy-brown/80">Accessible therapy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column: Session pricing */}
          <div className={s.sessionPricing}>
            <Card className="bg-soft-cream/40 border-2 border-gentle-terracotta/20 shadow-xl sticky top-24">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success-green to-warm-sage"></div>
              <CardHeader className="text-center pt-6 pb-4 bg-gradient-to-br from-success-green/5 to-warm-sage/5">
                <div className="w-16 h-16 bg-success-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-success-green" />
                </div>
                <CardTitle className="text-2xl font-semibold text-cozy-brown">Session Pricing</CardTitle>
                <CardDescription className="text-base text-cozy-brown/60">45-minute therapy sessions</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-5xl font-semibold text-cozy-brown">$100</span>
                    <span className="text-xl text-cozy-brown/60">/session</span>
                  </div>
                  <p className="text-sm text-cozy-brown/60">Private pay pricing</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-cozy-brown/80">Sliding scale available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-cozy-brown/80">Insurance reimbursement support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                    <span className="text-cozy-brown/80">Detailed superbills provided</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-success-green/5 rounded-lg border border-success-green/20">
                  <h4 className="font-semibold text-cozy-brown mb-2">What's Included</h4>
                  <ul className="space-y-1 text-sm text-cozy-brown/70">
                    <li>• Evidence-based therapy methods</li>
                    <li>• Personalized treatment plan</li>
                    <li>• Between-session resources</li>
                    <li>• HSA/FSA eligible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment details */}
        <div className={s.paymentDetails}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-2 sm:p-3">
              <h3 className="text-lg font-semibold text-cozy-brown mb-3 text-center">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold text-cozy-brown mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Insurance Coverage
                  </h4>
                  <ul className="space-y-2 text-sm text-cozy-brown/70">
                    <li>• Out-of-network provider</li>
                    <li>• Detailed superbills provided</li>
                    <li>• Submit directly to your insurance</li>
                    <li>• Reimbursement varies by plan</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cozy-brown mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-purple-500" />
                    Payment Methods
                  </h4>
                  <ul className="space-y-2 text-sm text-cozy-brown/70">
                    <li>• Credit/debit cards accepted</li>
                    <li>• HSA/FSA eligible</li>
                    <li>• Payment due at time of service</li>
                    <li>• Sliding scale considered case-by-case</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
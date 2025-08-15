import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, DollarSign, Shield, CreditCard, Users } from "lucide-react";
import s from "./PricingSection.module.css";

export default function PricingSection({ withId = true }: { withId?: boolean }) {
  return (
    <section id={withId ? "rates" : undefined} data-pricing-root className={`py-8 sm:py-12 bg-gradient-to-br from-soft-cream via-background to-soft-cream ${s.pricing}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${s.container}`}>
        <div data-pricing-layout>
        <header data-pricing-lead data-lead="pricing" className="text-center mb-8 sm:mb-10">
          {withId ? (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Investment in Your <span className="text-success-green font-bold">Wellbeing</span>
            </h2>
          ) : (
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Investment in Your <span className="text-success-green font-bold">Wellbeing</span>
            </h1>
          )}
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Quality therapy that's accessible. Multiple payment options and insurance support.
          </p>
        </header>

        {/* More compact main pricing card */}
        <div data-pricing-card className="max-w-md mx-auto mb-8 sm:mb-10">
          <Card className="bg-white border-2 border-success-green/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden price-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success-green to-warm-sage"></div>
            <CardHeader className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 bg-gradient-to-br from-success-green/5 to-warm-sage/5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-green/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              </div>
              <CardTitle className="text-lg sm:text-xl font-heading font-bold text-foreground">Session Pricing</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">45-minute therapy sessions</CardDescription>
            </CardHeader>
            <CardContent className="pt-3 sm:pt-4 pb-4 sm:pb-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground price">$100</span>
                  <span className="text-lg text-muted-foreground unit">/session</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Private pay pricing</p>
              </div>

              <ul className="features space-y-2 sm:space-y-3 mb-4 sm:mb-6" aria-label="features">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span className="text-foreground">Sliding scale available</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span className="text-foreground">Insurance reimbursement support</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-success-green flex-shrink-0" />
                  <span className="text-foreground">Detailed superbills provided</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Simplified payment options */}
        <div data-pricing-tiles className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 ${s.pills}`}>
          <div className={`bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-success-green/10 hover:border-success-green/30 transition-colors ${s.pill}`}>
            <DollarSign className="w-6 h-6 text-success-green mx-auto mb-2" />
            <h3 className="font-semibold text-sm text-foreground mb-1">Private Pay</h3>
            <p className="text-xs text-muted-foreground">Direct payment, immediate access</p>
          </div>

          <div className={`bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-success-green/10 hover:border-success-green/30 transition-colors ${s.pill}`}>
            <Shield className="w-6 h-6 text-success-green mx-auto mb-2" />
            <h3 className="font-semibold text-sm text-foreground mb-1">Insurance</h3>
            <p className="text-xs text-muted-foreground">Superbills for reimbursement</p>
          </div>

          <div className={`bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-success-green/10 hover:border-success-green/30 transition-colors ${s.pill}`}>
            <CreditCard className="w-6 h-6 text-success-green mx-auto mb-2" />
            <h3 className="font-semibold text-sm text-foreground mb-1">Payment Plans</h3>
            <p className="text-xs text-muted-foreground">Flexible arrangements available</p>
          </div>

          <div className={`bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-success-green/10 hover:border-success-green/30 transition-colors ${s.pill}`}>
            <Users className="w-6 h-6 text-success-green mx-auto mb-2" />
            <h3 className="font-semibold text-sm text-foreground mb-1">Sliding Scale</h3>
            <p className="text-xs text-muted-foreground">Based on financial need</p>
          </div>
        </div>
        </div>

        <section data-pricing-details>
        {/* Insurance information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-success-green/20 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 text-center">Insurance & Payment Details</h3>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ${s.panels}`}>
            <div className={s.panel}>
              <h4 className="font-semibold text-foreground mb-2">Insurance Coverage</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Out-of-network provider</li>
                <li>• Detailed superbills provided</li>
                <li>• Submit directly to your insurance</li>
                <li>• Reimbursement varies by plan</li>
              </ul>
            </div>
            
            <div className={s.panel}>
              <h4 className="font-semibold text-foreground mb-2">Payment Methods</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Credit/debit cards accepted</li>
                <li>• HSA/FSA eligible</li>
                <li>• Payment due at time of service</li>
                <li>• Sliding scale considered case-by-case</li>
              </ul>
            </div>
          </div>
        </div>
        </section>
      </div>
    </section>
  );
}
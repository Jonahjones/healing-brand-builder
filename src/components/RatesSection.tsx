import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, DollarSign, Shield, CreditCard, Users } from "lucide-react";

const RatesSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-soft-cream via-background to-soft-cream">
      {/* Scroll target positioned at the color break */}
      <div id="rates" className="absolute -mt-12"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Investment in Your <span className="text-success-green font-bold">Wellbeing</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Quality therapy that's accessible. Multiple payment options and insurance support.
          </p>
        </div>

        {/* More compact main pricing card */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10">
          <Card className="bg-white border-2 border-success-green/20 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success-green to-warm-sage"></div>
            <CardHeader className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 bg-gradient-to-br from-success-green/5 to-warm-sage/5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-green/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              </div>
              <CardTitle className="text-lg sm:text-xl font-heading font-bold text-foreground">Session Pricing</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">50-minute therapy sessions</CardDescription>
            </CardHeader>
            <CardContent className="pt-3 sm:pt-4 pb-4 sm:pb-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">$150</span>
                  <span className="text-base sm:text-lg text-muted-foreground">/ session</span>
                </div>
                <p className="text-muted-foreground text-sm">Private pay rate</p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 p-2 bg-success-green/5 rounded-lg">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-success-green/20 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-success-green" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-sm">Sliding scale available for qualifying clients</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-warm-sage/5 rounded-lg">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-warm-sage/20 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-warm-sage" />
                  </div>
                  <span className="text-foreground font-medium text-xs sm:text-sm">Insurance co-pays vary by plan</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* More compact insurance & payment options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-trust-blue/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-trust-blue" />
            </div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">Insurance Accepted</h3>
            <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
              <p>• Alma: Aetna & Cigna</p>
              <p>• Headway: Aetna, Cigna, BCBS</p>
              <p>• Carelon & Quest Behavioral</p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-energy-coral/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-energy-coral" />
            </div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">Payment Options</h3>
            <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
              <p>• Superbills for reimbursement</p>
              <p>• HSA/FSA eligible</p>
              <p>• Secure online payments</p>
            </div>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-optimism-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-optimism-yellow" />
            </div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">Accessibility</h3>
            <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
              <p>• Sliding scale pricing</p>
              <p>• Financial hardship support</p>
              <p>• Transparent costs</p>
            </div>
          </div>
        </div>

        {/* More compact bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-success-green/10 to-warm-sage/10 rounded-xl p-4 sm:p-6 border border-success-green/20">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
              Questions About Pricing?
            </h4>
            <p className="text-muted-foreground mb-3 text-sm sm:text-base">
              I'm committed to making therapy accessible. Let's discuss what works for your situation.
            </p>
            <div className="inline-flex items-center gap-2 text-success-green font-medium text-sm">
              <span>Contact me for a free consultation</span>
              <Check className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
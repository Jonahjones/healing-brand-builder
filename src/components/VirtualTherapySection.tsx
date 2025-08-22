import { Brain, Heart, Target, CheckCircle, Lock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VirtualTherapySection = () => {
  const therapeuticMethods = [
    {
      title: "CBT",
      subtitle: "Cognitive Behavioral Therapy",
      description: "Break negative thought cycles that drive anxiety and depression.",
      benefit: "Practical tools for lasting control",
      icon: Brain,
      color: "gentle-terracotta"
    },
    {
      title: "Mindfulness",
      subtitle: "Present-Moment Awareness",
      description: "Stay present and observe thoughts without judgment.",
      benefit: "Respond clearly, not react emotionally",
      icon: Heart,
      color: "gentle-terracotta"
    },
    {
      title: "DBT",
      subtitle: "Dialectical Behavior Therapy",
      description: "Manage intense emotions and improve relationships.",
      benefit: "Crisis strategies + emotional strength",
      icon: Target,
      color: "gentle-terracotta"
    }
  ];



  return (
    <section id="virtual-therapy" className="py-6 sm:py-8 lg:py-12 backdrop-blur-sm bg-white/5 relative overflow-hidden transition-all duration-1000 ease-out">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/8 to-earth-clay/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cozy-brown/5 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gentle-terracotta/5 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* More compact main header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 px-3 py-1.5 rounded-full mb-4 border border-gentle-terracotta/20 shadow-lg backdrop-blur-sm">
            <div className="w-5 h-5 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-bold text-cozy-brown uppercase tracking-wider">Evidence-Based Care</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-cozy-brown mb-3">
            How I Help You <span className="text-gentle-terracotta block lg:inline">Heal & Thrive</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gentle-terracotta font-semibold">
              Proven virtual therapy approaches delivered through secure online counseling sessions.
            </p>
          </div>
        </div>
        
        {/* More compact therapeutic methods */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-cozy-brown mb-2">
              Research-Backed Methods
            </h3>
            <p className="text-sm text-cozy-brown/70 max-w-2xl mx-auto">Evidence-based approaches at your pace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {therapeuticMethods.map((method, index) => {
              const Icon = method.icon;
            return (
              <Card key={index} className="card-prominent">
                <CardContent className="p-5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--${method.color}) / 0.15), hsl(var(--${method.color}) / 0.25))`
                    }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: `hsl(var(--${method.color}))` }}
                    />
                  </div>

                  {/* More compact content */}
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg font-heading font-bold text-cozy-brown mb-1.5">
                      {method.title}
                    </h4>
                    <p className="text-xs font-semibold text-gentle-terracotta mb-2 uppercase tracking-wider">
                      {method.subtitle}
                    </p>

                    <p className="text-cozy-brown/80 mb-3 leading-relaxed text-xs sm:text-sm">
                      {method.description}
                    </p>

                    <div
                      className="text-xs font-bold px-2.5 py-1.5 rounded-full shadow-md"
                style={{
                        backgroundColor: `hsl(var(--${method.color}))`,
                        color: 'white'
                      }}
                    >
                      ✓ {method.benefit}
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>


        
        {/* More compact bottom call-to-action cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-prominent relative rounded-xl p-4 sm:p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gentle-terracotta/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-lg flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-cozy-brown">
                  Evidence-Based Methods
                </h4>
              </div>
              <p className="text-cozy-brown/80 leading-relaxed mb-3 text-sm">
                Proven therapeutic approaches tailored to your unique goals.
              </p>
              <div className="flex items-center gap-2 text-gentle-terracotta font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Personalized approach for your success</span>
              </div>
            </div>
          </div>

          <div className="card-prominent relative rounded-xl p-4 sm:p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cozy-brown/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cozy-brown to-earth-clay rounded-lg flex items-center justify-center shadow-md">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-cozy-brown">
              Secure & Professional
                </h4>
              </div>
              <p className="text-cozy-brown/80 leading-relaxed mb-3 text-sm">
                HIPAA-compliant online therapy platforms with professional standards.
              </p>
              <div className="flex items-center gap-2 text-cozy-brown font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Bank-level encryption & privacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTherapySection;
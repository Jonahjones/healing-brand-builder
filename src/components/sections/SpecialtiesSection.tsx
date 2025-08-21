import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Shield, Users, Leaf } from "lucide-react";

export default function SpecialtiesSection({ withId = true }: { withId?: boolean }) {
  const specialties = [
    {
      tag: "Anxiety",
      icon: Brain,
      title: "Anxiety",
      subtitle: "Take control of anxiety with proven skills that calm your mind and restore balance.",
      expectation: "Identify your anxiety triggers, learn calming techniques, and gain confidence step by step.",
      color: "gentle-terracotta"
    },
    {
      tag: "Depression", 
      icon: Heart,
      title: "Depression",
      subtitle: "Regain motivation and reconnect with what matters most.",
      expectation: "Work together to overcome symptoms, rebuild connections, and create sustainable wellness habits.",
      color: "earth-clay"
    },
    {
      tag: "Addiction",
      icon: Shield,
      title: "Addiction",
      subtitle: "Break the cycle of addiction and build a life you are proud of.",
      expectation: "Address underlying causes, build a strong support system, and create a personalized recovery plan.",
      color: "cozy-brown"
    },
    {
      tag: "Relationships",
      icon: Users,
      title: "Relationships", 
      subtitle: "Enhance communication, set healthy boundaries, and deepen intimacy.",
      expectation: "Learn healthy communication patterns, address challenges, and build stronger bonds.",
      color: "warm-sage"
    },
    {
      tag: "Life Transitions",
      icon: Leaf,
      title: "Life Transitions",
      subtitle: "Navigate change with confidence and find new purpose.",
      expectation: "Process change together, explore new opportunities, and move forward with intention.",
      color: "forest-green"
    }
  ];

  return (
    <section id={withId ? "specialties" : undefined} className={`pt-24 pb-16 ${withId ? 'backdrop-blur-sm bg-white/5' : 'bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/30'} relative overflow-hidden min-h-screen transition-all duration-1000 ease-out`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-earth-clay/10 to-cozy-brown/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Much more compact header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cozy-brown block">Specialties That</span>
            <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
              Transform Lives
            </span>
          </h1>
          <p className="text-sm sm:text-base text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed px-4">
            Expert support for life's most challenging moments. Evidence-based approaches tailored to your unique needs and goals.
          </p>
        </div>

        {/* Clean cards grid similar to approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            // Get explicit classes for each color to avoid dynamic class issues
            const getColorClasses = (color: string) => {
              switch (color) {
                case "gentle-terracotta":
                  return { bg: "bg-orange-500/10", text: "text-orange-500" };
                case "earth-clay":
                  return { bg: "bg-amber-500/10", text: "text-amber-600" };
                case "cozy-brown":
                  return { bg: "bg-amber-700/10", text: "text-amber-700" };
                case "warm-sage":
                  return { bg: "bg-green-500/10", text: "text-green-500" };
                case "forest-green":
                  return { bg: "bg-emerald-600/10", text: "text-emerald-600" };
                default:
                  return { bg: "bg-gray-500/10", text: "text-gray-500" };
              }
            };
            const colorClasses = getColorClasses(specialty.color);
            
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{specialty.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {specialty.subtitle}
                  </p>
                  
                  <div className="border-l-4 border-gentle-terracotta/30 pl-4 bg-gentle-terracotta/5 py-3 rounded-r">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-gentle-terracotta font-bold">What to expect:</span> {specialty.expectation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
}
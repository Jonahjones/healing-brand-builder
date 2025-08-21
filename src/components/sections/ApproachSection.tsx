import { Brain, Heart, MessageCircle, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ApproachSection({ withId = true }: { withId?: boolean }) {
  const methods = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Learn to identify and change negative thought patterns that drive anxiety and depression.",
      whyItMatters: "This gives you practical tools to break the cycle of negative thinking and regain control.",
      icon: Brain,
      color: "gentle-terracotta"
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Practice staying present and observing thoughts without judgment to lower stress and emotional reactions.",
      whyItMatters: "This helps you respond to challenges clearly instead of reacting from overwhelm.",
      icon: Heart,
      color: "energy-coral"
    },
    {
      title: "Motivational Interviewing",
      description: "Explore your motivations and resolve uncertainty about making positive changes.",
      whyItMatters: "This empowers you to find your own reasons for change and boosts lasting success.",
      icon: MessageCircle,
      color: "success-green"
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Master skills to manage intense emotions, improve relationships, and tolerate distress.",
      whyItMatters: "This provides solid strategies for crisis moments and builds emotional strength.",
      icon: Target,
      color: "warm-sage"
    }
  ];

  return (
    <section id={withId ? "approach" : undefined} data-page-hero className={`pt-24 pb-16 ${withId ? 'backdrop-blur-sm bg-white/5' : 'bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/30'} relative overflow-hidden min-h-screen transition-all duration-1000 ease-out`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cozy-brown/8 to-warm-sage/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header data-lead="approach" className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cozy-brown block">Evidence-Based</span>
            <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
              Therapeutic Approach
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            // Get explicit classes for each color to avoid dynamic class issues
            const getColorClasses = (color: string) => {
              switch (color) {
                case "gentle-terracotta":
                  return { bg: "bg-gentle-terracotta/10", text: "text-gentle-terracotta" };
                case "energy-coral":
                  return { bg: "bg-orange-500/10", text: "text-orange-500" };
                case "success-green":
                  return { bg: "bg-green-500/10", text: "text-green-500" };
                case "warm-sage":
                  return { bg: "bg-green-400/10", text: "text-green-400" };
                default:
                  return { bg: "bg-gray-500/10", text: "text-gray-500" };
              }
            };
            const colorClasses = getColorClasses(method.color);
            
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="border-l-4 border-success-green/30 pl-4 bg-success-green/5 py-1.5 rounded-r">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-success-green font-bold">Why this matters:</span> {method.whyItMatters}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-success-green/20 max-w-4xl mx-auto mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Your Therapy Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We'll work together to identify which approaches resonate most with you and your goals. 
              Every person is unique, and your therapy should be too. I'll adapt these methods to 
              fit your specific needs and help you build lasting skills for mental wellness.
            </p>
            
            {/* Enhanced CTA Button */}
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-white/20"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerOffset = 120; // Increased for better positioning
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
                <Calendar className="w-5 h-5 mr-2" />Book Your Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cozy-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
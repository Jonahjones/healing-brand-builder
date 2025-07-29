import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Shield, Users, Compass } from "lucide-react";

const ServicesSection = () => {
  const specialties = [
    {
      title: "Anxiety",
      valueProp: "Break free from anxiety: Learn proven skills to calm your mind and take control of your life.",
      topOutcomes: [
        "Reduce panic attacks by 80%",
        "Sleep better within 2 weeks",
        "Feel confident in social situations"
      ],
      whatToExpect: "We'll identify your anxiety triggers, practice calming techniques, and build your confidence step by step.",
      icon: Brain,
      color: "trust-blue",
      bgColor: "trust-blue/5"
    },
    {
      title: "Depression", 
      valueProp: "Rediscover joy and energy: Build meaningful connections and find your spark again.",
      topOutcomes: [
        "Increase daily motivation",
        "Rebuild meaningful relationships",
        "Develop healthy coping strategies"
      ],
      whatToExpected: "Together, we'll work on lifting the fog, rebuilding your energy, and creating hope for your future.",
      icon: Heart,
      color: "energy-coral",
      bgColor: "energy-coral/5"
    },
    {
      title: "Addiction",
      valueProp: "Reclaim your freedom: Break the cycle and build a life you're proud of living.",
      topOutcomes: [
        "Develop strong coping mechanisms",
        "Rebuild trust with loved ones",
        "Create sustainable recovery habits"
      ],
      whatToExpect: "We'll address underlying causes, build your support system, and create a personalized recovery plan.",
      icon: Shield,
      color: "success-green",
      bgColor: "success-green/5"
    },
    {
      title: "Relationships",
      valueProp: "Transform your connections: Communicate better, set boundaries, and build deeper intimacy.",
      topOutcomes: [
        "Improve communication skills",
        "Resolve conflicts constructively",
        "Strengthen emotional intimacy"
      ],
      whatToExpect: "Learn healthy communication patterns, work through relationship challenges, and build stronger bonds.",
      icon: Users,
      color: "optimism-yellow",
      bgColor: "optimism-yellow/5"
    },
    {
      title: "Life Transitions",
      valueProp: "Navigate change with confidence: Turn life's challenges into opportunities for growth.",
      topOutcomes: [
        "Adapt to major life changes",
        "Rebuild your sense of identity",
        "Create a vision for your future"
      ],
      whatToExpect: "We'll process the change together, explore new possibilities, and help you move forward with purpose.",
      icon: Compass,
      color: "calm-lavender",
      bgColor: "calm-lavender/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Specialties</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert support for life's most challenging moments. Evidence-based approaches tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={index} 
                className={`border-2 hover:shadow-2xl transition-all duration-300 bg-white group relative overflow-hidden hover:-translate-y-2`}
                style={{
                  borderColor: `hsl(var(--${specialty.color}) / 0.2)`,
                  backgroundColor: `hsl(var(--${specialty.bgColor}))`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `hsl(var(--${specialty.color}) / 0.1)` }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: `hsl(var(--${specialty.color}))` }}
                      />
                    </div>
                    <Badge 
                      variant="outline" 
                      className="font-semibold"
                      style={{ 
                        borderColor: `hsl(var(--${specialty.color}) / 0.3)`,
                        color: `hsl(var(--${specialty.color}))`
                      }}
                    >
                      {specialty.title}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-heading font-bold text-foreground leading-tight mb-3">
                    {specialty.valueProp}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Top Outcomes</h4>
                    <ul className="space-y-2">
                      {specialty.topOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div 
                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2"
                            style={{ backgroundColor: `hsl(var(--${specialty.color}))` }}
                          ></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border/30">
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">What to Expect</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {specialty.whatToExpect}
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
};

export default ServicesSection;
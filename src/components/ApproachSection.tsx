import { Brain, Heart, MessageCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApproachSection = () => {
  const methods = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Learn to identify and change negative thought patterns that drive anxiety and depression.",
      whyItMatters: "This gives you practical tools to break the cycle of negative thinking and regain control.",
      icon: Brain,
      color: "trust-blue"
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
      color: "optimism-yellow"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Evidence-Based and Trauma-Informed Methods</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            I use proven therapeutic approaches backed by research that create lasting change. Every method is trauma-informed so we move at your pace in a safe, supportive space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 bg-white border-2 hover:-translate-y-2"
                style={{
                  borderColor: `hsl(var(--${method.color}) / 0.2)`
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ 
                        backgroundColor: `hsl(var(--${method.color}) / 0.1)`
                      }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: `hsl(var(--${method.color}))` }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {method.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {method.description}
                      </p>
                      
                      <div className="pt-3 border-t border-border/30">
                        <p className="text-sm font-medium">
                          <span 
                            className="font-semibold"
                            style={{ color: `hsl(var(--${method.color}))` }}
                          >
                            Why it matters:
                          </span>{" "}
                          <span className="text-muted-foreground">
                            {method.whyItMatters}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Trauma-Informed Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All approaches acknowledge how trauma shapes thoughts, feelings, and relationships.
              We focus on safety, trust, and your autonomy. You control the pace of healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
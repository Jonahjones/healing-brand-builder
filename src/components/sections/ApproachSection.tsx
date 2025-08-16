import { Brain, Heart, MessageCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ApproachSection({ withId = true }: { withId?: boolean }) {
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
      color: "warm-sage"
    }
  ];

  return (
    <section id={withId ? "approach" : undefined} data-page-hero className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header data-lead="approach" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-success-green">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I use evidence-based methods that are proven to work. Here's what to expect from our therapeutic approach.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            // Get explicit classes for each color to avoid dynamic class issues
            const getColorClasses = (color: string) => {
              switch (color) {
                case "trust-blue":
                  return { bg: "bg-blue-500/10", text: "text-blue-500" };
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
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="border-l-4 border-success-green/30 pl-4 bg-success-green/5 py-3 rounded-r">
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-success-green/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Therapy Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We'll work together to identify which approaches resonate most with you and your goals. 
              Every person is unique, and your therapy should be too. I'll adapt these methods to 
              fit your specific needs and help you build lasting skills for mental wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
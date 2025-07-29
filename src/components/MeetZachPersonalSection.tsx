import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trophy, Coffee, Heart, Zap, Target, Users, MessageSquare } from "lucide-react";
import zachMarathonImage from "@/assets/zach-marathon-training.jpg";
import milwaukeeSportsImage from "@/assets/milwaukee-sports-coffee.jpg";
import medalsImage from "@/assets/medals-and-achievements.jpg";

const MeetZachPersonalSection = () => {
  const personalFacts = [
    {
      icon: Trophy,
      question: "What's your favorite marathon?",
      answer: "Boston 2019 - ran it in a snowstorm and learned that sometimes the toughest conditions create the most meaningful victories.",
      connection: "Just like therapy: breakthrough moments often happen when we push through the hard stuff."
    },
    {
      icon: Coffee,
      question: "Milwaukee sports fan?",
      answer: "Brewers, Bucks, Packers - I bleed blue and gold! Love the community spirit and how teams bounce back from losses.",
      connection: "Sports taught me that resilience isn't about being perfect - it's about showing up consistently."
    },
    {
      icon: Target,
      question: "What drives your approach to growth?",
      answer: "Same thing that gets me up at 5 AM for long runs - the belief that small, consistent actions create massive change.",
      connection: "Whether it's mile markers or therapy goals, progress happens one step at a time."
    }
  ];

  const passionConnections = [
    {
      icon: Zap,
      passion: "Running",
      therapeutic: "Mental endurance training",
      description: "I help clients build the same stamina for life's challenges that I've developed for 26.2 miles."
    },
    {
      icon: Users,
      passion: "Team Sports",
      therapeutic: "Collaborative healing",
      description: "Like a good coach, I'm in your corner - pushing you forward while respecting your pace."
    },
    {
      icon: Heart,
      passion: "Personal Growth",
      therapeutic: "Authentic connection",
      description: "I share my own journey because real growth happens when we drop the masks and get honest."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream to-natural-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-soft-sage/10 border-soft-sage/30 text-soft-sage font-medium px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Beyond the License
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-cozy-brown mb-6">
            Meet Zach Beyond the Therapy Room
          </h2>
          <p className="text-xl text-earth-clay max-w-3xl mx-auto">
            The person behind the professional - and how my passions shape the way I help you heal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Personal Stories */}
          <div className="lg:col-span-8 space-y-8">
            {/* Marathon Hero Image */}
            <Card className="overflow-hidden shadow-2xl border-natural-beige">
              <div className="relative h-64 lg:h-80">
                <img 
                  src={zachMarathonImage} 
                  alt="Zach running during marathon training at sunrise, showing his dedication to personal growth and endurance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cozy-brown/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-heading font-bold text-warm-cream mb-2">
                    "Every mile teaches you something about yourself"
                  </h3>
                  <p className="text-warm-cream/90">
                    26 marathons and counting - each one a lesson in perseverance that I bring to our sessions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Q&A Cards */}
            <div className="space-y-6">
              {personalFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <Card key={index} className="p-6 border-gentle-terracotta/20 warm-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gentle-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-soft-sage" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-cozy-brown text-lg mb-2">
                          {fact.question}
                        </h4>
                        <p className="text-earth-clay mb-3 leading-relaxed">
                          {fact.answer}
                        </p>
                        <div className="bg-soft-sage/10 p-3 rounded-lg border-l-4 border-forest-green">
                          <p className="text-forest-green font-medium text-sm">
                            💡 {fact.connection}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar - Visual Elements */}
          <div className="lg:col-span-4 space-y-6">
            {/* Milwaukee Sports Love */}
            <Card className="p-6 bg-gradient-to-br from-forest-green/5 to-soft-sage/10 border-forest-green/20">
              <div className="text-center">
                <img 
                  src={milwaukeeSportsImage} 
                  alt="Milwaukee Brewers cap next to coffee and therapy journal, showing Zach's love for local sports"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-heading font-bold text-cozy-brown mb-2">
                  Milwaukee Born & Raised
                </h4>
                <p className="text-earth-clay text-sm mb-3">
                  Brewers tailgates, Bucks games, and Packers Sundays - community and loyalty run deep here.
                </p>
                <Badge variant="outline" className="bg-forest-green/10 border-forest-green/30 text-forest-green">
                  🧀 Cheese & Therapy
                </Badge>
              </div>
            </Card>

            {/* Passion-Therapy Connections */}
            <Card className="p-6">
              <h4 className="font-heading font-bold text-cozy-brown mb-4 text-center">
                How My Passions Inform My Practice
              </h4>
              <div className="space-y-4">
                {passionConnections.map((connection, index) => {
                  const IconComponent = connection.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-4 h-4 text-soft-sage" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-cozy-brown text-sm">
                            {connection.passion}
                          </span>
                          <span className="text-earth-clay/60 text-xs">→</span>
                          <span className="text-forest-green text-sm font-medium">
                            {connection.therapeutic}
                          </span>
                        </div>
                        <p className="text-earth-clay text-xs">
                          {connection.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetZachPersonalSection;
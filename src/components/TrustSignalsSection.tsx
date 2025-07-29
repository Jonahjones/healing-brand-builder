import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

const TrustSignalsSection = () => {
  const credentials = [
    { 
      text: "Licensed Clinical Social Worker (LCSW)", 
      icon: Shield,
      color: "trust-blue",
      stat: "LCSW"
    },
    { 
      text: "Over 5 years of experience", 
      icon: Award,
      color: "gentle-terracotta",
      stat: "5+"
    },
    { 
      text: "500+ successful sessions", 
      icon: Users,
      color: "success-green",
      stat: "500+"
    },
    { 
      text: "Serving Wisconsin and California", 
      icon: Clock,
      color: "earth-clay",
      stat: "2"
    }
  ];

  const certifications = [
    "Cognitive Behavioral Therapy (CBT)",
    "Mindfulness-Based Stress Reduction", 
    "Solution-Focused Therapy",
    "HIPAA-compliant practice ensuring confidentiality"
  ];

  return (
    <section id="credentials" className="py-20 bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-soft-sage/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-gentle-terracotta/8 to-earth-clay/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-soft-sage/10 to-cozy-brown/8 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cozy-brown/10 to-gentle-terracotta/10 px-6 py-3 rounded-full mb-8">
            <Star className="w-5 h-5 text-gentle-terracotta" />
            <span className="text-sm font-semibold text-cozy-brown uppercase tracking-wider">Trusted Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-cozy-brown mb-6">
            Licensed and 
            <span className="block text-gentle-terracotta">Trusted Professional</span>
          </h2>
          <p className="text-xl text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed">
            Your healing journey is in experienced, qualified hands. Every session is backed by years of training and genuine care.
          </p>
        </div>
        
        {/* Enhanced Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  {/* Background decoration */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-20 blur-lg"
                    style={{ backgroundColor: `hsl(var(--${credential.color}))` }}
                  ></div>
                  
                  {/* Main icon container */}
                  <div 
                    className="relative w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 bg-white/80 backdrop-blur-sm border-2"
                    style={{ borderColor: `hsl(var(--${credential.color}) / 0.3)` }}
                  >
                    <Icon 
                      className="w-10 h-10" 
                      style={{ color: `hsl(var(--${credential.color}))` }}
                    />
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-cozy-brown group-hover:text-gentle-terracotta transition-colors duration-300">
                  {credential.text}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Certifications */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-soft-sage/20 shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cozy-brown mb-3">Therapeutic Approaches & Certifications</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-cozy-brown/5 to-gentle-terracotta/5 border border-soft-sage/20">
                <div className="w-8 h-8 bg-gentle-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-gentle-terracotta" />
                </div>
                <span className="text-cozy-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Bottom Trust Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 rounded-2xl p-8 border border-gentle-terracotta/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gentle-terracotta" />
              <h4 className="text-xl font-bold text-cozy-brown">Your Trust Matters</h4>
              <Shield className="w-6 h-6 text-gentle-terracotta" />
            </div>
            <p className="text-lg text-cozy-brown/80 leading-relaxed">
              Fully licensed, insured, and committed to your confidentiality. Every session is conducted with the highest professional standards and genuine care for your wellbeing.
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-cozy-brown/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>Licensed Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
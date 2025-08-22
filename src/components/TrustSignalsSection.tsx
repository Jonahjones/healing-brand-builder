import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

const TrustSignalsSection = () => {
  const credentials = [
    { 
      text: "Licensed Clinical Social Worker (LCSW)", 
      icon: Shield,
      stat: "LCSW"
    },
    { 
      text: "Over 5 years of experience", 
      icon: Award,
      stat: "5+"
    },
    { 
      text: "500+ successful sessions", 
      icon: Users,
      stat: "500+"
    },
    { 
      text: "Serving Wisconsin and California", 
      icon: Clock,
      stat: "2"
    }
  ];



  return (
    <section id="credentials" className="py-20 backdrop-blur-sm bg-white/5 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gentle-terracotta/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gentle-terracotta/3 rounded-full blur-3xl"></div>
      
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
            // Use sage green for success/growth indicator
            const isSuccessIndicator = credential.text.includes("successful sessions");
            const iconColor = isSuccessIndicator ? "forest-green" : "gentle-terracotta";
            
            return (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  {/* Background decoration */}
                  <div className={`absolute inset-0 rounded-3xl opacity-20 blur-lg ${isSuccessIndicator ? 'bg-forest-green' : 'bg-gentle-terracotta'}`}></div>
                  
                  {/* Main icon container */}
                  <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 bg-white/95 backdrop-blur-sm border-2 ${isSuccessIndicator ? 'border-forest-green/30' : 'border-gentle-terracotta/30'}`}>
                    <Icon className={`w-10 h-10 ${isSuccessIndicator ? 'text-forest-green' : 'text-gentle-terracotta'}`} />
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-cozy-brown group-hover:text-gentle-terracotta transition-colors duration-300">
                  {credential.text}
                </p>
              </div>
            );
          })}
        </div>
        

        
        {/* Enhanced Bottom Trust Statement */}
        <div className="text-center">
          <div className="card-prominent rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gentle-terracotta" />
              <h4 className="text-xl font-bold text-cozy-brown">Your Trust Matters</h4>
              <Shield className="w-6 h-6 text-gentle-terracotta" />
            </div>
            <p className="text-lg text-cozy-brown/80 leading-relaxed">
              Fully licensed, insured, and committed to your confidentiality with genuine care.
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
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, CheckCircle, Phone, Award, Sun } from "lucide-react";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

const OnlineTherapyCalifornia = () => {
  const californiaCities = [
    { name: "Los Angeles", population: "3.9M", focus: "Career stress, entertainment industry pressure, anxiety" },
    { name: "San Francisco", population: "874K", focus: "Tech stress, housing anxiety, work-life balance" },
    { name: "San Diego", population: "1.4M", focus: "Military PTSD, relationship counseling, depression" },
    { name: "Sacramento", population: "525K", focus: "Government work stress, family therapy, life transitions" },
    { name: "San Jose", population: "1.0M", focus: "Silicon Valley burnout, perfectionism, anxiety disorders" }
  ];

  return (
    <main className="page">
      <Helmet>
        <title>Online Therapist California | Virtual Therapy Los Angeles, San Francisco | Zach Rehbein-Jones LCSW</title>
        <meta name="description" content="Licensed online therapist serving all of California. Virtual therapy for Los Angeles, San Francisco, San Diego residents. LCSW providing anxiety, depression & trauma treatment via secure video sessions." />
        <meta name="keywords" content="online therapist California, virtual therapist Los Angeles, San Francisco online therapy, San Diego telehealth, California virtual counseling, online LCSW California, virtual therapy sessions California, telehealth therapist California" />
        <link rel="canonical" href="https://resilientmindcounseling.info/online-therapy-california/" />
      </Helmet>
      
      <StructuredData 
        url="https://resilientmindcounseling.info/online-therapy-california/" 
        name="Online Therapy California" 
        description="Licensed virtual therapist serving California residents with online therapy sessions"
      />
      
      <SocialMeta 
        title="Online Therapist California | Virtual Therapy Los Angeles, San Francisco"
        description="Licensed online therapist serving all of California. Virtual therapy for Los Angeles, San Francisco, San Diego residents."
        url="https://resilientmindcounseling.info/online-therapy-california/"
      />

      <section className="pt-24 pb-16 bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-sunset-peach/10 border-sunset-peach/30 text-sunset-peach font-medium px-4 py-2 mb-6">
              <Sun className="w-4 h-4 mr-2" />
              California Licensed
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cozy-brown block">Online Therapist</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta via-earth-clay to-cozy-brown bg-clip-text block">
                Serving California
              </span>
            </h1>
            <p className="text-lg text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Licensed Clinical Social Worker providing secure, professional <strong>online therapy sessions</strong> to residents throughout California. 
              Specializing in anxiety, depression, trauma, and relationship counseling via HIPAA-compliant video sessions.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gentle-terracotta" />
                <span className="text-sm font-medium text-cozy-brown">LCSW Licensed in California</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-forest-green" />
                <span className="text-sm font-medium text-cozy-brown">HIPAA Secure Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-earth-clay" />
                <span className="text-sm font-medium text-cozy-brown">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* California Cities Served */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-cozy-brown text-center mb-8">
              Online Therapy Available Throughout California
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {californiaCities.map((city, index) => (
                <Card key={index} className="border-gentle-terracotta/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-gentle-terracotta mt-1" />
                      <div>
                        <h3 className="font-bold text-cozy-brown text-lg">{city.name}</h3>
                        <p className="text-sm text-cozy-brown/60">Population: {city.population}</p>
                      </div>
                    </div>
                    <p className="text-sm text-cozy-brown/80 leading-relaxed">
                      <strong>Common Focus Areas:</strong> {city.focus}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Online Therapy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-cozy-brown mb-6">
                Why Choose Online Therapy in California?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Beat California Traffic</h3>
                    <p className="text-cozy-brown/80 text-sm">No more LA or Bay Area commute stress - therapy from your safe space</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Tech-Forward Approach</h3>
                    <p className="text-cozy-brown/80 text-sm">Modern, secure video platform perfect for tech-savvy Californians</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Flexible Scheduling</h3>
                    <p className="text-cozy-brown/80 text-sm">Works with demanding California work schedules and time zones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Privacy & Discretion</h3>
                    <p className="text-cozy-brown/80 text-sm">Complete confidentiality - important in competitive California markets</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cozy-brown mb-6">
                California-Specific Treatment Focus:
              </h2>
              <div className="space-y-3">
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Tech Industry Stress</h3>
                  <p className="text-sm text-cozy-brown/80">Silicon Valley burnout, imposter syndrome, work-life balance</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Entertainment Industry Pressure</h3>
                  <p className="text-sm text-cozy-brown/80">Performance anxiety, rejection sensitivity, career uncertainty</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Cost of Living Stress</h3>
                  <p className="text-sm text-cozy-brown/80">Housing anxiety, financial pressure, life planning challenges</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Lifestyle Transitions</h3>
                  <p className="text-sm text-cozy-brown/80">Moving to/from California, career changes, relationship adjustments</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 border-gentle-terracotta/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-cozy-brown mb-4">
                  Ready to Start Online Therapy in California?
                </h2>
                <p className="text-cozy-brown/80 mb-6">
                  Free 15-minute consultation to discuss your needs and ensure we're a good fit for online therapy.
                </p>
                <a 
                  href="/contact/"
                  className="inline-flex items-center gap-2 cta-enhanced text-white font-bold px-8 py-4 rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                  Start Your California Online Therapy
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineTherapyCalifornia;

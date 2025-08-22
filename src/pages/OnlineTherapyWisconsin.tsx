import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, CheckCircle, Phone, Award } from "lucide-react";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

const OnlineTherapyWisconsin = () => {
  const wisconsinCities = [
    { name: "Milwaukee", population: "577,000", focus: "Urban stress, career anxiety, relationship issues" },
    { name: "Madison", population: "270,000", focus: "Student stress, academic pressure, life transitions" },
    { name: "Green Bay", population: "107,000", focus: "Work-life balance, seasonal depression, family therapy" },
    { name: "Kenosha", population: "100,000", focus: "Trauma recovery, depression support, couples counseling" },
    { name: "Racine", population: "78,000", focus: "Anxiety management, substance recovery support, grief counseling" }
  ];

  return (
    <main className="page">
      <Helmet>
        <title>Online Therapist Wisconsin | Virtual Therapy Milwaukee, Madison | Zach Rehbein-Jones LCSW</title>
        <meta name="description" content="Licensed online therapist serving all of Wisconsin. Virtual therapy for Milwaukee, Madison, Green Bay residents. LCSW providing anxiety, depression & trauma treatment via secure video sessions." />
        <meta name="keywords" content="online therapist Wisconsin, virtual therapist Milwaukee, Madison online therapy, Green Bay telehealth, Wisconsin virtual counseling, online LCSW Wisconsin, virtual therapy sessions Wisconsin, telehealth therapist Wisconsin" />
        <link rel="canonical" href="https://resilientmindcounseling.info/online-therapy-wisconsin/" />
      </Helmet>
      
      <StructuredData 
        url="https://resilientmindcounseling.info/online-therapy-wisconsin/" 
        name="Online Therapy Wisconsin" 
        description="Licensed virtual therapist serving Wisconsin residents with online therapy sessions"
      />
      
      <SocialMeta 
        title="Online Therapist Wisconsin | Virtual Therapy Milwaukee, Madison"
        description="Licensed online therapist serving all of Wisconsin. Virtual therapy for Milwaukee, Madison, Green Bay residents."
        url="https://resilientmindcounseling.info/online-therapy-wisconsin/"
      />

      <section className="pt-24 pb-16 bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-soft-sage/10 border-soft-sage/30 text-soft-sage font-medium px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Wisconsin Licensed
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cozy-brown block">Online Therapist</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
                Serving Wisconsin
              </span>
            </h1>
            <p className="text-lg text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Licensed Clinical Social Worker providing secure, professional <strong>online therapy sessions</strong> to residents throughout Wisconsin. 
              Specializing in anxiety, depression, trauma, and relationship counseling via HIPAA-compliant video sessions.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gentle-terracotta" />
                <span className="text-sm font-medium text-cozy-brown">LCSW Licensed in Wisconsin</span>
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

          {/* Wisconsin Cities Served */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-cozy-brown text-center mb-8">
              Online Therapy Available Throughout Wisconsin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wisconsinCities.map((city, index) => (
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
                Why Choose Online Therapy in Wisconsin?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Convenient Access</h3>
                    <p className="text-cozy-brown/80 text-sm">No travel time to Milwaukee or Madison - therapy from your comfortable space</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Wisconsin Weather Proof</h3>
                    <p className="text-cozy-brown/80 text-sm">Never miss a session due to snow, ice, or harsh Wisconsin winters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Rural Wisconsin Friendly</h3>
                    <p className="text-cozy-brown/80 text-sm">Quality mental health care regardless of your location in Wisconsin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-cozy-brown">Same Quality Care</h3>
                    <p className="text-cozy-brown/80 text-sm">Evidence-based therapy approaches delivered via secure video platform</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cozy-brown mb-6">
                Specialized Online Treatment For:
              </h2>
              <div className="space-y-3">
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Anxiety Disorders</h3>
                  <p className="text-sm text-cozy-brown/80">Generalized anxiety, social anxiety, panic attacks, phobias</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Depression Support</h3>
                  <p className="text-sm text-cozy-brown/80">Major depression, seasonal depression (common in Wisconsin), mood disorders</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Trauma & PTSD</h3>
                  <p className="text-sm text-cozy-brown/80">Past trauma, PTSD, trauma-informed care approaches</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-gentle-terracotta/20">
                  <h3 className="font-semibold text-cozy-brown">Relationship Issues</h3>
                  <p className="text-sm text-cozy-brown/80">Couples counseling, family dynamics, communication skills</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 border-gentle-terracotta/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-cozy-brown mb-4">
                  Ready to Start Online Therapy in Wisconsin?
                </h2>
                <p className="text-cozy-brown/80 mb-6">
                  Free 15-minute consultation to discuss your needs and ensure we're a good fit for online therapy.
                </p>
                <a 
                  href="/contact/"
                  className="inline-flex items-center gap-2 cta-enhanced text-white font-bold px-8 py-4 rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                  Start Your Wisconsin Online Therapy
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineTherapyWisconsin;

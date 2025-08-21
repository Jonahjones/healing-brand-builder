import { Helmet } from "react-helmet-async";
import { ChevronDown, CheckCircle, Phone, DollarSign, Shield, Calendar, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const faqData = [
    {
      icon: Shield,
      category: "Licensing & Credentials",
      question: "What states are you licensed to provide therapy in?",
      answer: "I am a Licensed Clinical Social Worker (LCSW) licensed to provide therapy in both Wisconsin and California through secure, HIPAA-compliant virtual sessions. My licenses are in good standing and I maintain continuing education requirements in both states.",
      color: "gentle-terracotta"
    },
    {
      icon: DollarSign,
      category: "Pricing & Insurance",
      question: "How much do therapy sessions cost?",
      answer: "My private pay rate is $100 for 45-minute therapy sessions. I offer sliding scale pricing for qualifying clients and accept insurance co-pays which vary based on your specific plan benefits. I'm also in-network with several major insurance providers through Alma and Headway.",
      color: "emerald-600"
    },
    {
      icon: CheckCircle,
      category: "Insurance",
      question: "Do you accept insurance for virtual therapy sessions?",
      answer: "Yes, I accept several insurance plans through Alma and Headway, including Aetna, Cigna, and Blue Cross Blue Shield. I also provide superbills for out-of-network reimbursement. Contact me to verify your specific coverage and benefits.",
      color: "violet-600"
    },
    {
      icon: Heart,
      category: "Treatment Approach",
      question: "What therapy approaches do you use?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Mindfulness-Based Stress Reduction, and Trauma-Informed Care. My approach is tailored to each client's unique needs, goals, and preferences.",
      color: "rose-600"
    },
    {
      icon: Calendar,
      category: "Scheduling",
      question: "How do I schedule my first appointment?",
      answer: "You can schedule your free 15-minute consultation through my contact form or by calling directly. During this consultation, we'll discuss your needs, answer any questions, and determine if we're a good fit before scheduling your first full session.",
      color: "amber-600"
    },
    {
      icon: Phone,
      category: "Technology",
      question: "What platform do you use for virtual therapy sessions?",
      answer: "I use a HIPAA-compliant, secure video platform that meets all privacy requirements for healthcare. You'll receive simple instructions and a link before your session - no special software downloads required. Sessions work on computers, tablets, and smartphones.",
      color: "cyan-600"
    },
    {
      icon: Shield,
      category: "Privacy & Safety",
      question: "How do you ensure confidentiality in virtual sessions?",
      answer: "I use only HIPAA-compliant platforms with end-to-end encryption. All sessions and records are kept strictly confidential according to professional ethics and state laws. I'll discuss privacy considerations and help you create a private space for sessions.",
      color: "indigo-600"
    },
    {
      icon: Heart,
      category: "Specializations",
      question: "What conditions do you specialize in treating?",
      answer: "I specialize in anxiety disorders, depression, trauma and PTSD, relationship issues, life transitions, and sports psychology. I work with adults and young adults who are motivated to create positive change in their lives through evidence-based therapeutic approaches.",
      color: "pink-600"
    }
  ];

  return (
    <main className="page">
      <Helmet>
        <title>Frequently Asked Questions | Zach Rehbein-Jones, LCSW</title>
        <meta name="description" content="Common questions about virtual therapy, insurance, pricing, and treatment approaches. Licensed therapist serving Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/faq/" />
      </Helmet>
      <StructuredData 
        url="https://resilientmindcounseling.info/faq/" 
        name="FAQ" 
        description="Frequently asked questions about virtual therapy services"
      />
      <SocialMeta 
        title="FAQ - Virtual Therapy Questions Answered | Zach Rehbein-Jones, LCSW"
        description="Common questions about virtual therapy, insurance, pricing, and treatment approaches. Licensed therapist serving Wisconsin and California."
        url="https://resilientmindcounseling.info/faq/"
      />

      <section className="pt-24 pb-16 bg-gradient-to-br from-warm-cream/80 via-natural-beige/60 to-soft-sage/30 min-h-screen transition-all duration-1000 ease-out">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-cozy-brown block">Frequently Asked</span>
              <span className="text-transparent bg-gradient-to-r from-gentle-terracotta/90 via-earth-clay/85 to-cozy-brown/90 bg-clip-text block">
                Questions
              </span>
            </h1>
            <p className="text-lg text-cozy-brown/80 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about virtual therapy, insurance, pricing, and my therapeutic approach. 
              Don't see your question? <a href="/contact/" className="text-gentle-terracotta hover:underline font-medium">Contact me directly</a>.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const IconComponent = item.icon;
              const isOpen = openItem === index;
              
              return (
                <Card key={index} className="card-enhanced border-gentle-terracotta/30 hover:border-gentle-terracotta/50 overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gentle-terracotta/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <button
                      onClick={() => toggleItem(index)}
                      className="relative w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-gentle-terracotta/20 focus:ring-inset"
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${index}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`} aria-hidden="true">
                            <IconComponent className={`w-6 h-6 text-${item.color} group-hover:text-gentle-terracotta transition-colors duration-300`} />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-cozy-brown/60 uppercase tracking-wider mb-1">
                              {item.category}
                            </div>
                            <h2 
                              id={`faq-question-${index}`}
                              className="text-lg font-semibold text-cozy-brown leading-tight"
                            >
                              {item.question}
                            </h2>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-cozy-brown/60 transition-transform duration-300 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div 
                        id={`faq-content-${index}`}
                        className="px-6 pb-6"
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        <div className="ml-16 pt-4 border-t border-gentle-terracotta/20">
                          <div className="bg-gradient-to-r from-warm-cream/50 to-natural-beige/30 rounded-xl p-4 border border-gentle-terracotta/10">
                            <p className="text-cozy-brown leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="card-enhanced border-gentle-terracotta/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-cozy-brown mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-cozy-brown/80 mb-6 max-w-lg mx-auto">
                  I'm here to help! Schedule your free 15-minute consultation to discuss your specific needs and get personalized answers.
                </p>
                <a 
                  href="/contact/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gentle-terracotta to-earth-clay text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;

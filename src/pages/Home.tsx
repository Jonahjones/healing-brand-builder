import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import VirtualTherapySection from "@/components/VirtualTherapySection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import AboutSection from "@/components/sections/AboutSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import SmoothAnchorOffset from "@/components/SmoothAnchorOffset";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

const Home = () => {
  return (
    <main className="relative">
      {/* Unified Spiral Gradient Background */}
      <div className="fixed inset-0 z-0">
        {/* Complex spiral gradient with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/10 via-transparent to-earth-clay/15"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-warm-cream/30 to-cozy-brown/8"></div>
        
        {/* Spiral decorative elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/12 to-earth-clay/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-tl from-soft-sage/15 to-cozy-brown/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-gradient-to-tr from-natural-beige/20 to-gentle-terracotta/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-earth-clay/12 to-warm-cream/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content with backdrop blur for depth */}
      <div className="relative z-10">
        <h1 className="sr-only">Virtual therapy in Wisconsin and California with Zach Rehbein Jones LCSW</h1>
        <Helmet>
          <title>Virtual Therapy in Wisconsin & California | Resilient Mind Counseling</title>
          <meta name="description" content="Online therapy with Zach Rehbein-Jones, LCSW. Anxiety, depression, trauma, and couples counseling. Free 15-minute consultation. Serving Wisconsin and California." />
          <link rel="canonical" href="https://resilientmindcounseling.info/" />
        </Helmet>
        <StructuredData url="https://resilientmindcounseling.info/" name="Home" isHome={true} />
        <SocialMeta 
          title="Virtual Therapy in Wisconsin & California | Resilient Mind Counseling"
          description="Online therapy with Zach Rehbein-Jones, LCSW. Anxiety, depression, trauma, and couples counseling. Free 15-minute consultation. Serving Wisconsin and California."
          url="https://resilientmindcounseling.info/"
        />
        <SmoothAnchorOffset />
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <VirtualTherapySection />
        <TrustSignalsSection />
        <PricingSection />
        
        {/* Crawlable links for SEO */}
        <nav aria-label="Explore" className="explore-links py-16 backdrop-blur-sm bg-white/10 relative overflow-hidden transition-all duration-1000 ease-out">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gentle-terracotta/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gentle-terracotta rounded-full"></div>
              <h3 className="text-sm font-bold text-cozy-brown uppercase tracking-wider">Explore Our Services</h3>
            </div>
            <ul className="flex flex-wrap justify-center gap-3">
              <li>
                <a href="/about/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/specialties/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>Specialties</span>
                </a>
              </li>
              <li>
                <a href="/approach/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>Approach</span>
                </a>
              </li>
              <li>
                <a href="/pricing/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="/faq/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="/contact/" className="inline-flex items-center gap-2 bg-gentle-terracotta/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/20 text-white font-semibold text-sm hover:bg-gentle-terracotta hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;

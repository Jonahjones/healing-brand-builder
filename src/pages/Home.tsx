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
        {/* Clean, subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-white to-soft-sage/15"></div>
        
        {/* Minimal floating elements for subtle depth */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/4 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-success-green/6 to-transparent rounded-full blur-3xl"></div>
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
        <nav aria-label="Explore" className="explore-links py-16 backdrop-blur-sm bg-white/20 relative overflow-hidden transition-all duration-1000 ease-out">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gentle-terracotta/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gentle-terracotta rounded-full"></div>
              <h3 className="text-sm font-bold text-cozy-brown uppercase tracking-wider">Explore Our Services</h3>
            </div>
            <ul className="flex flex-wrap justify-center gap-3">
              <li>
                <a href="/about/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/specialties/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>Specialties</span>
                </a>
              </li>
              <li>
                <a href="/approach/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>Approach</span>
                </a>
              </li>
              <li>
                <a href="/pricing/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="/faq/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-cozy-brown font-semibold text-sm hover:bg-gentle-terracotta hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="/contact/" className="inline-flex items-center gap-2 bg-gentle-terracotta/85 backdrop-blur-sm px-4 py-3 rounded-xl border border-gentle-terracotta/15 text-white font-semibold text-sm hover:bg-gentle-terracotta hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
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

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
    <main>
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
      <nav aria-label="Explore" className="explore-links py-8 bg-warm-cream/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-lg font-heading font-semibold text-cozy-brown mb-4">Explore Our Services</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li><a href="/about/" className="text-gentle-terracotta hover:text-cozy-brown transition-colors underline">About</a></li>
            <li><a href="/specialties/" className="text-gentle-terracotta hover:text-cozy-brown transition-colors underline">Specialties</a></li>
            <li><a href="/approach/" className="text-gentle-terracotta hover:text-cozy-brown transition-colors underline">Approach</a></li>
            <li><a href="/pricing/" className="text-gentle-terracotta hover:text-cozy-brown transition-colors underline">Pricing</a></li>
            <li><a href="/contact/" className="text-gentle-terracotta hover:text-cozy-brown transition-colors underline">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <ContactSection />
    </main>
  );
};

export default Home;

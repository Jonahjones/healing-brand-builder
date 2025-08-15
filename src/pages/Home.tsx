import HeroSection from "@/components/HeroSection";
import VirtualTherapySection from "@/components/VirtualTherapySection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import AboutSection from "@/components/sections/AboutSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import SmoothAnchorOffset from "@/components/SmoothAnchorOffset";

const Home = () => {
  return (
    <main>
      <SmoothAnchorOffset />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <VirtualTherapySection />
      <TrustSignalsSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default Home;

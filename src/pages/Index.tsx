import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TherapistStorySection from "@/components/TherapistStorySection";
import VirtualTherapySection from "@/components/VirtualTherapySection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import RatesSection from "@/components/RatesSection";
import ContactSection from "@/components/ContactSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TherapistStorySection />
      <SpecialtiesSection />
      <VirtualTherapySection />
      <TrustSignalsSection />
      <RatesSection />
      <ContactSection />
    </div>
  );
};

export default Index;

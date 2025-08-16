import { Helmet } from "react-helmet-async";
import PricingSection from "@/components/sections/PricingSection";
import StructuredData from "@/seo/StructuredData";

export default function Pricing() {
  return (
    <main>
      <Helmet>
        <title>Therapy pricing | Sliding scale and superbills | Resilient Mind Counseling</title>
        <meta name="description" content="Session rates, sliding scale, and out of network superbills. Transparent pricing for online therapy in Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/pricing/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/pricing/" name="Pricing" />
      <div className="page page--pricing">
        <PricingSection withId={false} />
      </div>
    </main>
  );
}
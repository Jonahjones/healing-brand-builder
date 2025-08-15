import { Helmet } from "react-helmet-async";
import PricingSection from "@/components/sections/PricingSection";

export default function Pricing() {
  return (
    <main>
      <Helmet>
        <title>Therapy pricing | Sliding scale and superbills | Resilient Mind Counseling</title>
        <meta name="description" content="Session rates, sliding scale, and out of network superbills. Transparent pricing for online therapy in Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/pricing/" />
      </Helmet>
      <div className="page page--pricing">
        <PricingSection withId={false} />
      </div>
    </main>
  );
}
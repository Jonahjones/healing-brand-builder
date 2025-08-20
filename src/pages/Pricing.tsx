import { Helmet } from "react-helmet-async";
import PricingSection from "@/components/sections/PricingSection";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

export default function Pricing() {
  return (
    <main style={{padding: '0', background: 'transparent'}}>
      <Helmet>
        <title>Therapy Pricing | Sliding Scale & Insurance | Virtual Therapy Wisconsin & California</title>
        <meta name="description" content="$100/session with sliding scale available. Insurance superbills provided. Transparent pricing for online therapy in Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/pricing/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/pricing/" name="Pricing" />
      <SocialMeta 
        title="Therapy Pricing | Sliding Scale & Insurance | Virtual Therapy Wisconsin & California"
        description="$100/session with sliding scale available. Insurance superbills provided. Transparent pricing for online therapy in Wisconsin and California."
        url="https://resilientmindcounseling.info/pricing/"
      />
      <PricingSection withId={false} />
    </main>
  );
}
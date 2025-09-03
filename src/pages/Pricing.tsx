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
        <meta name="keywords" content="therapy pricing, therapy cost, sliding scale therapy, insurance therapy, superbills, affordable therapy, online therapy rates" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://resilientmindcounseling.info/pricing" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/pricing" name="Pricing" />
      <SocialMeta 
        title="Therapy Pricing | Sliding Scale & Insurance | Virtual Therapy Wisconsin & California"
        description="$100/session with sliding scale available. Insurance superbills provided. Transparent pricing for online therapy in Wisconsin and California."
        url="https://resilientmindcounseling.info/pricing"
      />
      <PricingSection withId={false} />
    </main>
  );
}
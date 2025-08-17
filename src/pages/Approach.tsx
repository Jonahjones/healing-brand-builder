// src/pages/Approach.tsx
import { Helmet } from "react-helmet-async";
import ApproachSection from "@/components/sections/ApproachSection";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

export default function Approach() {
  return (
    <main>
      <Helmet>
        <title>Therapy Approach | CBT & EMDR Informed | Virtual Therapy Wisconsin & California</title>
        <meta
          name="description"
          content="Evidence-based therapy approach with CBT, EMDR, and mindfulness. Collaborative goals and compassionate care via telehealth for Wisconsin and California."
        />
        <link rel="canonical" href="https://resilientmindcounseling.info/approach/" />
      </Helmet>

      <StructuredData url="https://resilientmindcounseling.info/approach/" name="Approach" />
      <SocialMeta 
        title="Therapy Approach | CBT & EMDR Informed | Virtual Therapy Wisconsin & California"
        description="Evidence-based therapy approach with CBT, EMDR, and mindfulness. Collaborative goals and compassionate care via telehealth for Wisconsin and California."
        url="https://resilientmindcounseling.info/approach/"
      />
      <div className="page page--approach">
        <ApproachSection withId={false} />
      </div>
    </main>
  );
}
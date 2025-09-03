import { Helmet } from "react-helmet-async";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

export default function Specialties() {
  return (
    <main>
      <Helmet>
        <title>Therapy Specialties | Anxiety, Trauma & Couples | Virtual Therapy Wisconsin & California</title>
        <meta name="description" content="Expert anxiety therapy, trauma treatment, and couples counseling via telehealth. Evidence-based care for Wisconsin and California residents." />
        <meta name="keywords" content="anxiety therapy, depression treatment, trauma therapy, PTSD treatment, couples counseling, relationship therapy, life transitions, virtual therapy specialties" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://resilientmindcounseling.info/specialties" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/specialties" name="Specialties" />
      <SocialMeta 
        title="Therapy Specialties | Anxiety, Trauma & Couples | Virtual Therapy Wisconsin & California"
        description="Expert anxiety therapy, trauma treatment, and couples counseling via telehealth. Evidence-based care for Wisconsin and California residents."
        url="https://resilientmindcounseling.info/specialties"
      />
      <div className="page page--specialties">
        <SpecialtiesSection withId={false} />
      </div>
    </main>
  );
}
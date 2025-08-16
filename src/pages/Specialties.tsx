import { Helmet } from "react-helmet-async";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import StructuredData from "@/seo/StructuredData";

export default function Specialties() {
  return (
    <main>
      <Helmet>
        <title>Therapy specialties in Wisconsin and California | Resilient Mind Counseling</title>
        <meta name="description" content="Anxiety therapy, trauma therapy, and couples counseling by telehealth. Serving Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/specialties/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/specialties/" name="Specialties" />
      <div className="page page--specialties">
        <SpecialtiesSection withId={false} />
      </div>
    </main>
  );
}
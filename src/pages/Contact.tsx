import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";
import StructuredData from "@/seo/StructuredData";

export default function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact a therapist | Book a free consultation | Resilient Mind Counseling</title>
        <meta name="description" content="Call 414-348-0996 or email zach@resilientmindcounseling.info. Online therapy for adults in Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/contact/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/contact/" name="Contact" />
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}
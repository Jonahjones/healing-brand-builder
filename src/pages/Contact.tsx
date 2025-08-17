import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

export default function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact & Free Consultation | Virtual Therapy Wisconsin & California</title>
        <meta name="description" content="Book your free 15-minute consultation today. Call 414-348-0996 or email zach@resilientmindcounseling.info. Online therapy for Wisconsin and California." />
        <link rel="canonical" href="https://resilientmindcounseling.info/contact/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/contact/" name="Contact" />
      <SocialMeta 
        title="Contact & Free Consultation | Virtual Therapy Wisconsin & California"
        description="Book your free 15-minute consultation today. Call 414-348-0996 or email zach@resilientmindcounseling.info. Online therapy for Wisconsin and California."
        url="https://resilientmindcounseling.info/contact/"
      />
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}
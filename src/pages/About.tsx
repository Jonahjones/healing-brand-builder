import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/sections/AboutSection";
import StructuredData from "@/seo/StructuredData";
import SocialMeta from "@/seo/SocialMeta";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About Zach Rehbein-Jones, LCSW | Virtual Therapy in Wisconsin & California</title>
        <meta name="description" content="Meet Zach Rehbein-Jones, LCSW. Licensed therapist offering online therapy for adults in Wisconsin and California. Clear goals and compassionate care." />
        <link rel="canonical" href="https://resilientmindcounseling.info/about/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/about/" name="About" />
      <SocialMeta 
        title="About Zach Rehbein-Jones, LCSW | Virtual Therapy in Wisconsin & California"
        description="Meet Zach Rehbein-Jones, LCSW. Licensed therapist offering online therapy for adults in Wisconsin and California. Clear goals and compassionate care."
        url="https://resilientmindcounseling.info/about/"
      />
      <div className="page page--about">
        <AboutSection withId={false} />
      </div>
    </main>
  );
}
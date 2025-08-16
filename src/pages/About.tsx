import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/sections/AboutSection";
import StructuredData from "@/seo/StructuredData";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About Zach Rehbein-Jones, LCSW | Resilient Mind Counseling</title>
        <meta name="description" content="Meet Zach Rehbein-Jones, LCSW. Online therapy for adults in Wisconsin and California. Clear goals and compassionate care." />
        <link rel="canonical" href="https://resilientmindcounseling.info/about/" />
      </Helmet>
      <StructuredData url="https://resilientmindcounseling.info/about/" name="About" />
      <div className="page page--about">
        <AboutSection withId={false} />
      </div>
    </main>
  );
}
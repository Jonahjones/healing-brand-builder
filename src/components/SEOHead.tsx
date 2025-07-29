import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Zach Rehbein-Jones, LCSW | Virtual Therapy in Wisconsin & California | Online Anxiety & Depression Help",
  description = "Licensed virtual therapy in Wisconsin & California. Expert online help for anxiety, depression, trauma, and relationships. HIPAA-secure sessions with sports psychology expertise.",
  keywords = "Wisconsin virtual therapy, California online therapy, anxiety help online, depression therapy virtual, online therapist Wisconsin, virtual counseling California, LCSW telehealth, sports psychology therapy",
  canonicalUrl = "https://zachrehbeinjones.com",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Additional accessibility and SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Zach Rehbein-Jones, LCSW",
          "description": "Licensed Clinical Social Worker providing virtual therapy services",
          "url": canonicalUrl,
          "areaServed": [
            {
              "@type": "State",
              "name": "Wisconsin"
            },
            {
              "@type": "State", 
              "name": "California"
            }
          ],
          "serviceType": [
            "Virtual Therapy",
            "Online Counseling", 
            "Anxiety Treatment",
            "Depression Therapy",
            "Trauma Therapy",
            "Relationship Counseling"
          ],
          "hasCredential": "Licensed Clinical Social Worker (LCSW)",
          "medicalSpecialty": "Mental Health",
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Cognitive Behavioral Therapy"
            },
            {
              "@type": "MedicalTherapy", 
              "name": "Dialectical Behavior Therapy"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Mindfulness-Based Therapy" 
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
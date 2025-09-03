import { Helmet } from "react-helmet-async";

type Props = {
  url: string;
  name: string;         // Page label for breadcrumbs
  isHome?: boolean;
  description?: string; // Page description for better SEO
};

export default function StructuredData({ url, name, isHome, description }: Props) {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://resilientmindcounseling.info/",
    "name": "Resilient Mind Counseling",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zach Rehbein-Jones, LCSW",
    "url": "https://resilientmindcounseling.info/",
    "email": "mailto:zach@resilientmindcounseling.info",
    "telephone": "+1-414-348-0996",
    "jobTitle": "Licensed Clinical Social Worker",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Wisconsin" },
      { "@type": "AdministrativeArea", "name": "California" }
    ]
  };

  const localBiz = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Resilient Mind Counseling",
    "alternateName": "Zach Rehbein-Jones, LCSW",
    "url": "https://resilientmindcounseling.info/",
    "telephone": "+1-414-348-0996",
    "email": "mailto:zach@resilientmindcounseling.info",
    "description": "Licensed Clinical Social Worker providing virtual therapy services for anxiety, depression, trauma, and relationship issues in Wisconsin and California.",
    "serviceType": ["Psychotherapy", "Mental Health Counseling", "Virtual Therapy", "Online Counseling"],
    "areaServed": [
      { "@type": "State", "name": "Wisconsin" },
      { "@type": "State", "name": "California" }
    ],
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "image": "https://resilientmindcounseling.info/og-image.svg",
    "priceRange": "$100",
    "paymentAccepted": ["Insurance", "Credit Card", "Cash"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Therapy",
            "description": "One-on-one therapy sessions for anxiety, depression, and life transitions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Couples Therapy",
            "description": "Relationship counseling for couples seeking to improve communication and connection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Trauma Therapy",
            "description": "Specialized treatment for trauma and PTSD using evidence-based approaches"
          }
        }
      ]
    }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://resilientmindcounseling.info/" },
      ...(isHome ? [] : [{ "@type": "ListItem", "position": 2, "name": name, "item": url }])
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <script type="application/ld+json">{JSON.stringify(localBiz)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
    </Helmet>
  );
}

import { Helmet } from "react-helmet-async";

let injected = false;

type Props = { url: string; name: string; isHome?: boolean };

export default function StructuredData({ url, name, isHome }: Props) {
  if (injected) return null;
  injected = true;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://resilientmindcounseling.info/",
    "name": "Resilient Mind Counseling",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://resilientmindcounseling.info/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zach Rehbein-Jones, LCSW",
    "url": "https://resilientmindcounseling.info/",
    "jobTitle": "Licensed Clinical Social Worker",
    "email": "mailto:zach@resilientmindcounseling.info",
    "telephone": "+1-414-348-0996",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Wisconsin" },
      { "@type": "AdministrativeArea", "name": "California" }
    ]
  };

  const localBiz = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Resilient Mind Counseling",
    "url": "https://resilientmindcounseling.info/",
    "telephone": "+1-414-348-0996",
    "email": "mailto:zach@resilientmindcounseling.info",
    "image": "https://resilientmindcounseling.info/icon-512.png",
    "areaServed": ["Wisconsin","California"],
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] }]
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

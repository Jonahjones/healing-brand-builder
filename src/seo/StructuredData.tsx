import { Helmet } from "react-helmet-async";

type Props = {
  url: string;
  name: string;         // Page label for breadcrumbs
  isHome?: boolean;
};

export default function StructuredData({ url, name, isHome }: Props) {
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
    "@type": "LocalBusiness",
    "name": "Resilient Mind Counseling",
    "url": "https://resilientmindcounseling.info/",
    "telephone": "+1-414-348-0996",
    "email": "mailto:zach@resilientmindcounseling.info",
    "areaServed": ["Wisconsin","California"],
    "address": { "@type": "PostalAddress", "addressCountry": "US" },
    "image": "https://resilientmindcounseling.info/icon-512.png"
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

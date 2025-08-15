You are a senior full stack dev. Do exactly these steps in order. Use mcp server when needed.

0) Safety backup

Create a folder __backup__/ and copy the entire project into __backup__/baseline-<timestamp>/.

1) If the repo uses Git, restore the last committed index and CSS

Detect Git with .git folder.

If present:

Create branch rescue.

Restore these files from HEAD if they exist: index.html, styles.css, style.css, assets/styles.css, any CSS referenced by <link rel="stylesheet"> in index.html.

Do not modify anything else.

Concrete commands if Git exists:

git checkout -b rescue
git restore index.html || true
git restore styles.css || true
git restore style.css || true

2) If there is no Git or HEAD has the broken files, pull the live site to restore

Fetch https://resilientmindcounseling.info/ HTML.

Save as index.html locally, overwriting only if current index.html does not contain the text Mental Health Therapy That Gets Results.

Parse the HTML, find all <link rel="stylesheet" href="..."> references.

Download each referenced CSS and save into the same relative paths locally. Create folders as needed.

Re-write CSS url(...) paths so images and fonts resolve locally. If needed, also download those assets.

3) Verify the homepage is visually identical to the live site

Open index.html locally, ensure the hero headline text and original styles render.

If the CSS still does not apply, check that the <link rel="stylesheet"> paths in index.html point to the restored files.

4) Non-destructive enhancements only

Do not replace or reformat existing markup or CSS tokens. Only append where specified.

4a) Add anchor scroll offset and smooth scroll

Append to the main stylesheet:

:root { --header-height: 88px; }
section[id] { scroll-margin-top: calc(var(--header-height) + 8px); }
@media (max-width: 768px) { :root { --header-height: 64px; } }


Create public/js/seo.js with:

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const onHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
  const headerH = () => header ? header.offsetHeight : 0;

  document.querySelectorAll('a[data-home-anchor]').forEach(a => {
    const id = a.dataset.homeAnchor;
    if (onHome && id) a.setAttribute('href', `#${id}`);
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerH() - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    });
  });

  if (onHome && location.hash) {
    setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1));
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerH() - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 60);
  }
});


In index.html <head>, append if missing:

<script src="/public/js/seo.js" defer></script>


Ensure the About item in the homepage nav has data-home-anchor="about" and there is <section id="about">.

4b) Append SEO head tags to the homepage only if not present
<link rel="canonical" href="https://resilientmindcounseling.info/">
<meta property="og:title" content="Online therapy in Wisconsin and California">
<meta property="og:description" content="Anxiety, trauma, depression, couples counseling. Private telehealth.">
<meta property="og:url" content="https://resilientmindcounseling.info/">
<meta property="og:type" content="website">
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"ProfessionalService",
  "@id":"https://resilientmindcounseling.info/#business",
  "name":"Resilient Mind Counseling",
  "url":"https://resilientmindcounseling.info/",
  "telephone":"414-348-0996",
  "email":"zach@resilientmindcounseling.info",
  "areaServed":[{"@type":"AdministrativeArea","name":"Wisconsin"},{"@type":"AdministrativeArea","name":"California"}],
  "availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://resilientmindcounseling.info/contact","name":"Telehealth"}
}
</script>

5) Generate real pages without touching the homepage styles

Read the exact <header>...</header> and <footer>...</footer> blocks from index.html. Reuse them as is.

Create these pages that inherit current CSS and look identical in chrome:

/about/index.html

/approach/index.html

/pricing/index.html

/contact/index.html

/specialties/index.html

/specialties/wisconsin/anxiety-therapy/index.html

/specialties/wisconsin/trauma-therapy/index.html

/specialties/wisconsin/couples-counseling/index.html

/specialties/california/anxiety-therapy/index.html

/specialties/california/trauma-therapy/index.html

/specialties/california/couples-counseling/index.html

Each page must:

Link the same stylesheet(s) as index.html using the same paths and classes.

Include a self pointing canonical and unique title and meta description.

Include JSON-LD on specialty pages.

Use these heads and H1s:

About

<title>About Zach Rehbein Jones, LCSW | Resilient Mind Counseling</title>
<meta name="description" content="Meet Zach Rehbein Jones, LCSW. Online therapy for adults in Wisconsin and California.">
<link rel="canonical" href="https://resilientmindcounseling.info/about/">
<h1>About Zach Rehbein Jones, LCSW</h1>


Approach

<title>Therapy approach | CBT, EMDR informed, mindfulness</title>
<meta name="description" content="How we work. Collaborative goals and evidence based methods by telehealth in Wisconsin and California.">
<link rel="canonical" href="https://resilientmindcounseling.info/approach/">
<h1>Therapy approach</h1>


Pricing

<title>Therapy pricing | Sliding scale and superbills</title>
<meta name="description" content="Session rates, sliding scale, and out of network superbills. Transparent pricing for online therapy in Wisconsin and California.">
<link rel="canonical" href="https://resilientmindcounseling.info/pricing/">
<h1>Pricing</h1>


Contact

<title>Contact a therapist | Book a free consultation</title>
<meta name="description" content="Call 414 348 0996 or email zach@resilientmindcounseling.info. Online therapy for adults in Wisconsin and California.">
<link rel="canonical" href="https://resilientmindcounseling.info/contact/">
<h1>Contact</h1>


Specialties index

<title>Therapy specialties in Wisconsin and California</title>
<meta name="description" content="Anxiety therapy, trauma therapy, and couples counseling by telehealth. Serving Wisconsin and California.">
<link rel="canonical" href="https://resilientmindcounseling.info/specialties/">
<h1>Therapy specialties</h1>


Specialty page example, copy and adjust for state and service:

<title>Anxiety therapy in Wisconsin | Resilient Mind Counseling</title>
<meta name="description" content="Online anxiety therapy for adults in Wisconsin. Practical tools and steady support. Book a free consultation at 414 348 0996.">
<link rel="canonical" href="https://resilientmindcounseling.info/specialties/wisconsin/anxiety-therapy/">
<h1>Anxiety therapy in Wisconsin</h1>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Service","name":"Anxiety therapy in Wisconsin","serviceType":"Psychotherapy","areaServed":"Wisconsin","provider":{"@id":"https://resilientmindcounseling.info/#business"}}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://resilientmindcounseling.info/"},
{"@type":"ListItem","position":2,"name":"Specialties","item":"https://resilientmindcounseling.info/specialties/"},
{"@type":"ListItem","position":3,"name":"Anxiety therapy in Wisconsin","item":"https://resilientmindcounseling.info/specialties/wisconsin/anxiety-therapy/"}]}
</script>


Content rule for these pages

Use simple semantic sections that inherit your current classes. Do not invent new CSS. Keep copy concise now. Include two links to /contact/.

6) Sitemap and robots

Create or update /sitemap.xml with all routes above. Include <lastmod> for today.

Create or update /robots.txt to point to the sitemap.

7) Final checks

Home renders exactly like the original design.

About on the home scrolls to the #about section. About elsewhere goes to /about/.

Specialty pages match site styles.

https://resilientmindcounseling.info/sitemap.xml and /robots.txt exist locally.

If any of the restore steps fail, stop and print a short summary of what could not be restored so I can decide the next move.
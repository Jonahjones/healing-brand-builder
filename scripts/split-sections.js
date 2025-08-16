// scripts/split-sections.js
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const idx = path.join(root, 'index.html');
if (!fs.existsSync(idx)) {
  console.error('index.html not found');
  process.exit(1);
}
const html = fs.readFileSync(idx, 'utf8');

// helpers
const rx = {
  head: /<head[^>]*>([\s\S]*?)<\/head>/i,
  header: /<header[\s\S]*?<\/header>/i,
  footer: /<footer[\s\S]*?<\/footer>/i,
  section: id => new RegExp(`<section[^>]*id=["']${id}["'][^>]*>([\\s\\S]*?)<\\/section>`, 'i'),
  title: /<title>[\s\S]*?<\/title>/i,
  canonical: /<link[^>]+rel=["']canonical["'][^>]*>/i
};

function grab(re, fallback = '') {
  const m = html.match(re);
  return m ? m[0] : fallback;
}
function grabInner(re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

const head = grab(rx.head);
const header = grab(rx.header);
const footer = grab(rx.footer) || '';
const headInner = head.replace(/^<head[^>]*>/i, '').replace(/<\/head>$/i, '');

function makeHead({ title, canonical }) {
  // start with the original head contents, then replace title and ensure canonical exists
  let h = headInner.replace(rx.title, `<title>${title}</title>`);
  if (rx.canonical.test(h)) {
    h = h.replace(rx.canonical, `<link rel="canonical" href="${canonical}">`);
  } else {
    h = h + `\n<link rel="canonical" href="${canonical}">`;
  }
  return `<head>\n${h}\n</head>`;
}

function writePage(outDir, { title, canonical, bodyInner }) {
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, 'index.html');
  const page = [
    '<!doctype html>',
    '<html lang="en">',
    makeHead({ title, canonical }),
    '<body>',
    header,
    '<main>',
    bodyInner,
    '</main>',
    footer,
    '</body>',
    '</html>'
  ].join('\n');
  fs.writeFileSync(out, page, 'utf8');
  console.log('Wrote', out);
}

const targets = [
  { id: 'about',       dir: 'about',       title: 'About Zach Rehbein-Jones, LCSW | Resilient Mind Counseling' },
  { id: 'specialties', dir: 'specialties', title: 'Therapy specialties in Wisconsin and California | Resilient Mind Counseling' },
  { id: 'approach',    dir: 'approach',    title: 'Therapy approach | Resilient Mind Counseling' },
  { id: 'pricing',     dir: 'pricing',     title: 'Therapy pricing | Resilient Mind Counseling' },
  { id: 'contact',     dir: 'contact',     title: 'Contact | Resilient Mind Counseling' }
];

const site = 'https://resilientmindcounseling.info';

let made = 0;
for (const t of targets) {
  const sectionHtml = grabInner(rx.section(t.id));
  if (!sectionHtml) {
    console.warn(`Skip ${t.dir}  section #${t.id} not found`);
    continue;
  }
  const body = `<section id="${t.id}">\n${sectionHtml}\n</section>`;
  writePage(path.join(root, t.dir), {
    title: t.title,
    canonical: `${site}/${t.dir}/`,
    bodyInner: body
  });
  made++;
}

// nav behavior: on homepage, About should be anchor; on inner pages, plain link to /about/
let newIndex = html.replace(/(<a[^>]+href=")[^"]*(">)(\s*About\s*)/i, (m, p1, p2, text) => {
  // ensure About on home has data-home-anchor
  return `${p1}/#about${p2}${text}`;
});
newIndex = newIndex.replace(/(<a[^>]+data-home-anchor=)["']?about["']?/i, '$1"about"'); // ensure attribute exists
if (newIndex !== html) {
  fs.writeFileSync(idx, newIndex, 'utf8');
  console.log('Updated home nav for About anchor behavior');
}

// sitemap
const sitemapPath = path.join(root, 'sitemap.xml');
const urls = ['','about/','specialties/','approach/','pricing/','contact/']
  .filter(Boolean)
  .map(p => `  <url><loc>${site}/${p}</loc></url>`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Wrote sitemap.xml');

console.log(`Done. Pages created: ${made}`);
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const idx = path.join(root, 'index.html');
if (!fs.existsSync(idx)) {
  console.error('index.html not found');
  process.exit(1);
}
const html = fs.readFileSync(idx, 'utf8');

// helpers
const rx = {
  head: /<head[^>]*>([\s\S]*?)<\/head>/i,
  header: /<header[\s\S]*?<\/header>/i,
  footer: /<footer[\s\S]*?<\/footer>/i,
  section: id => new RegExp(`<section[^>]*id=["']${id}["'][^>]*>([\\s\\S]*?)<\\/section>`, 'i'),
  title: /<title>[\s\S]*?<\/title>/i,
  canonical: /<link[^>]+rel=["']canonical["'][^>]*>/i
};

function grab(re, fallback = '') {
  const m = html.match(re);
  return m ? m[0] : fallback;
}
function grabInner(re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

const head = grab(rx.head);
const header = grab(rx.header);
const footer = grab(rx.footer) || '';
const headInner = head.replace(/^<head[^>]*>/i, '').replace(/<\/head>$/i, '');

function makeHead({ title, canonical }) {
  // start with the original head contents, then replace title and ensure canonical exists
  let h = headInner.replace(rx.title, `<title>${title}</title>`);
  if (rx.canonical.test(h)) {
    h = h.replace(rx.canonical, `<link rel="canonical" href="${canonical}">`);
  } else {
    h = h + `\n<link rel="canonical" href="${canonical}">`;
  }
  return `<head>\n${h}\n</head>`;
}

function writePage(outDir, { title, canonical, bodyInner }) {
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, 'index.html');
  const page = [
    '<!doctype html>',
    '<html lang="en">',
    makeHead({ title, canonical }),
    '<body>',
    header,
    '<main>',
    bodyInner,
    '</main>',
    footer,
    '</body>',
    '</html>'
  ].join('\n');
  fs.writeFileSync(out, page, 'utf8');
  console.log('Wrote', out);
}

const targets = [
  { id: 'about',       dir: 'about',       title: 'About Zach Rehbein-Jones, LCSW | Resilient Mind Counseling' },
  { id: 'specialties', dir: 'specialties', title: 'Therapy specialties in Wisconsin and California | Resilient Mind Counseling' },
  { id: 'approach',    dir: 'approach',    title: 'Therapy approach | Resilient Mind Counseling' },
  { id: 'pricing',     dir: 'pricing',     title: 'Therapy pricing | Resilient Mind Counseling' },
  { id: 'contact',     dir: 'contact',     title: 'Contact | Resilient Mind Counseling' }
];

const site = 'https://resilientmindcounseling.info';

let made = 0;
for (const t of targets) {
  const sectionHtml = grabInner(rx.section(t.id));
  if (!sectionHtml) {
    console.warn(`Skip ${t.dir}  section #${t.id} not found`);
    continue;
  }
  const body = `<section id="${t.id}">\n${sectionHtml}\n</section>`;
  writePage(path.join(root, t.dir), {
    title: t.title,
    canonical: `${site}/${t.dir}/`,
    bodyInner: body
  });
  made++;
}

// nav behavior: on homepage, About should be anchor; on inner pages, plain link to /about/
let newIndex = html.replace(/(<a[^>]+href=")[^"]*(">)(\s*About\s*)/i, (m, p1, p2, text) => {
  // ensure About on home has data-home-anchor
  return `${p1}/#about${p2}${text}`;
});
newIndex = newIndex.replace(/(<a[^>]+data-home-anchor=)["']?about["']?/i, '$1"about"'); // ensure attribute exists
if (newIndex !== html) {
  fs.writeFileSync(idx, newIndex, 'utf8');
  console.log('Updated home nav for About anchor behavior');
}

// sitemap
const sitemapPath = path.join(root, 'sitemap.xml');
const urls = ['','about/','specialties/','approach/','pricing/','contact/']
  .filter(Boolean)
  .map(p => `  <url><loc>${site}/${p}</loc></url>`)
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Wrote sitemap.xml');

console.log(`Done. Pages created: ${made}`);
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const onHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
  const headerH = () => header ? header.offsetHeight : 0;

  // Convert About to anchor only on the homepage
  document.querySelectorAll('a[data-home-anchor]').forEach(a => {
    const id = a.dataset.homeAnchor;
    if (onHome) a.setAttribute('href', `#${id}`);
  });

  // Smooth scroll with sticky offset
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

  // Handle direct hash on load
  if (onHome && location.hash) {
    setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1));
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerH() - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 60);
  }
});
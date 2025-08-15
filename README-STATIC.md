# Resilient Mind Counseling - Static Site

## Overview

This is a hybrid static site that maintains the smooth scrolling functionality of the original single-page application while adding dedicated SEO-optimized pages for therapy specialties in Wisconsin and California.

## Site Structure

### Core Pages
- `/` - Homepage with all original sections and smooth scrolling
- `/about` - About Zach Rehbein-Jones, LCSW
- `/approach` - Therapeutic approach and methods
- `/pricing` - Rates and payment information
- `/contact` - Contact information and forms
- `/specialties/` - Overview of all specialties

### State-Specific Specialty Pages

#### Wisconsin
- `/specialties/wisconsin/anxiety-therapy`
- `/specialties/wisconsin/trauma-therapy`
- `/specialties/wisconsin/couples-counseling`

#### California
- `/specialties/california/anxiety-therapy`
- `/specialties/california/trauma-therapy`
- `/specialties/california/couples-counseling`

## Navigation Behavior

### Dual Navigation System
The navigation adapts based on the current page:

- **Homepage (`/`)**: "About" links to `#about` anchor for smooth scrolling
- **All other pages**: "About" links to `/about` page

This is handled automatically by the JavaScript in `main.js`.

## Files Structure

```
├── static-index.html          # Main homepage (rename to index.html for deployment)
├── about.html                 # About page
├── approach.html              # Approach page
├── pricing.html               # Pricing page
├── contact.html               # Contact page
├── specialties/
│   ├── index.html            # Specialties overview
│   ├── wisconsin/
│   │   ├── anxiety-therapy.html
│   │   ├── trauma-therapy.html
│   │   └── couples-counseling.html
│   └── california/
│       ├── anxiety-therapy.html
│       ├── trauma-therapy.html
│       └── couples-counseling.html
├── styles.css                # Main stylesheet
├── main.js                   # JavaScript for navigation and interactions
├── sitemap.xml               # SEO sitemap
└── robots.txt                # Search engine directives
```

## SEO Features

### Meta Tags
- Proper title and description tags for each page
- Open Graph tags for social media sharing
- Canonical URLs to prevent duplicate content
- Author and robots meta tags

### Structured Data
- JSON-LD structured data on each page
- Professional service schema for the business
- Service-specific schema for specialty pages
- Person schema for the therapist

### Performance
- Preloaded critical fonts
- Optimized images with proper sizing
- CSS organized for fast loading
- Minimal JavaScript footprint

## Brand Information

- **Business**: Resilient Mind Counseling
- **Therapist**: Zach Rehbein-Jones, LCSW
- **Phone**: 414-348-0996
- **Email**: zach@resilientmindcounseling.info
- **Service Areas**: Wisconsin and California
- **Specialties**: Anxiety, Trauma, Couples Counseling

## Adding New Content

### Adding a New Specialty

1. Create the HTML file in the appropriate state directory
2. Follow the template structure from existing specialty pages
3. Update the sitemap.xml with the new URL
4. Add links to the specialty from the main specialties page

### Adding a New State

1. Create a new directory under `/specialties/`
2. Create specialty pages for that state
3. Update the main specialties page to include the new state
4. Update sitemap.xml with all new URLs
5. Ensure proper licensing information is displayed

### Template Structure for New Pages

Each page should include:
- Proper SEO meta tags
- Google Tag Manager code
- Consistent navigation
- H1 heading that matches the page title
- 500-900 words of content
- 3 FAQ items
- Clear CTAs
- JSON-LD structured data
- Contact information in footer

## Technical Features

### Accessibility
- Proper semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for mobile menu

### Mobile Optimization
- Responsive design with mobile-first approach
- Touch-friendly interface elements
- Optimized font sizes for mobile devices
- Collapsible mobile navigation

### Performance
- CSS variables for consistent theming
- Efficient animations and transitions
- Lazy loading for images below the fold
- Minimal JavaScript for fast loading

## Analytics & Tracking

- Google Tag Manager implemented on all pages
- Google site verification meta tag included
- Structured data for rich snippets in search results

## Deployment Notes

1. Rename `static-index.html` to `index.html`
2. Ensure all file paths are correct for your hosting environment
3. Upload all files maintaining the directory structure
4. Verify sitemap.xml is accessible at `/sitemap.xml`
5. Submit sitemap to Google Search Console

## Contact for Updates

For technical updates or new content needs, ensure all changes maintain:
- SEO best practices
- Consistent branding
- Mobile responsiveness
- Accessibility standards
- Performance optimization

---

**Last Updated**: August 2024  
**Version**: 1.0  
**Framework**: Static HTML/CSS/JS  
**Hosting**: Static-friendly (Netlify, Vercel, GitHub Pages, etc.)
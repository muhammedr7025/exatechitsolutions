import { seoFields, seoGroup, singletonPreview } from './fields';

const toggle = (name, title, group, description) => ({
  name,
  title,
  type: 'boolean',
  group,
  initialValue: true,
  description: description || 'Turn off to hide this whole section from the homepage.',
});

const sectionHeading = (prefix, group, labels = {}) => [
  { name: `${prefix}Eyebrow`, title: 'Small label above heading', type: 'string', group },
  { name: `${prefix}Title`, title: labels.title || 'Heading', type: 'string', group },
  {
    name: `${prefix}Highlight`,
    title: 'Heading — highlighted part',
    type: 'string',
    group,
    description: 'Shown in green right after the heading. Leave empty for a plain heading.',
  },
];

// Everything on the homepage. Sections appear in this order on the site:
// Hero → Stats → Clients → Why us → Services → Process → Portfolio →
// Testimonials → Certifications.
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'stats', title: 'Stats' },
    { name: 'clients', title: 'Client Logos' },
    { name: 'whyUs', title: 'Why Us' },
    { name: 'services', title: 'Services' },
    { name: 'process', title: 'Process' },
    { name: 'portfolio', title: 'Portfolio' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'certifications', title: 'Certifications' },
    seoGroup,
  ],
  fields: [
    // ── Hero ──
    { name: 'heroBadgeText', title: 'Badge Text', type: 'string', group: 'hero', description: 'The small pill above the headline.' },
    { name: 'heroHeadlinePrefix', title: 'Headline — first line', type: 'string', group: 'hero', validation: (r) => r.required() },
    { name: 'heroHeadlineHighlight', title: 'Headline — highlighted line', type: 'string', group: 'hero', description: 'Second line, shown in the green gradient.' },
    { name: 'heroSubtitle', title: 'Subtitle', type: 'text', rows: 3, group: 'hero' },
    { name: 'heroCtaText', title: 'Primary Button Text', type: 'string', group: 'hero', description: 'Opens WhatsApp.' },
    { name: 'heroSecondaryCtaText', title: 'Secondary Button Text', type: 'string', group: 'hero' },
    { name: 'heroSecondaryCtaLink', title: 'Secondary Button Link', type: 'string', group: 'hero', description: 'A page on this site like /services or /contact, or a full https:// link.' },
    { name: 'heroChipTop', title: 'Floating Badge — top', type: 'string', group: 'hero', description: 'Small badge floating over the hero image.' },
    { name: 'heroChipBottom', title: 'Floating Badge — bottom', type: 'string', group: 'hero' },

    // ── Stats ──
    toggle('showStats', 'Show stats strip', 'stats'),
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      group: 'stats',
      of: [{ type: 'statItem' }],
      description: 'Numbers that count up under the hero, e.g. "150+ — Projects Delivered".',
    },

    // ── Client logos ──
    toggle('showClients', 'Show client logos', 'clients', 'Turn off to hide client logos. The section also stays hidden until you add at least one logo under "Client Logos".'),
    ...sectionHeading('clients', 'clients'),

    // ── Why us ──
    toggle('showWhyUs', 'Show "Why us"', 'whyUs'),
    ...sectionHeading('whyUs', 'whyUs'),
    { name: 'whyUsItems', title: 'Cards', type: 'array', group: 'whyUs', of: [{ type: 'iconCard' }] },

    // ── Services ──
    toggle('showServices', 'Show services', 'services'),
    ...sectionHeading('services', 'services'),
    {
      name: 'servicesViewAllText',
      title: '"View all" Link Text',
      type: 'string',
      group: 'services',
      description: 'Type {count} to insert the number of services automatically, e.g. "View All {count} Services".',
    },
    {
      name: 'featuredServices',
      title: 'Featured Services',
      type: 'array',
      group: 'services',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Pick which services appear on the homepage. The first one is shown large. Leave empty to show the first five.',
      validation: (r) => r.max(6),
    },

    // ── Process ──
    toggle('showProcess', 'Show process', 'process'),
    ...sectionHeading('process', 'process'),
    { name: 'processSteps', title: 'Steps', type: 'array', group: 'process', of: [{ type: 'iconCard' }] },

    // ── Portfolio ──
    toggle('showPortfolio', 'Show portfolio', 'portfolio'),
    ...sectionHeading('portfolio', 'portfolio'),
    { name: 'portfolioViewAllText', title: '"View all" Link Text', type: 'string', group: 'portfolio' },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      group: 'portfolio',
      of: [{ type: 'reference', to: [{ type: 'portfolioItem' }] }],
      description: 'Pick the projects shown on the homepage (3 fit best). Leave empty to show the first three websites.',
      validation: (r) => r.max(6),
    },

    // ── Testimonials ──
    toggle('showTestimonials', 'Show testimonials', 'testimonials', 'Turn off to hide testimonials. The section also stays hidden until you add at least one under "Testimonials".'),
    ...sectionHeading('testimonials', 'testimonials'),

    // ── Certifications ──
    toggle('showCertifications', 'Show certifications', 'certifications', 'Turn off to hide certifications. The section also stays hidden until you add at least one under "Certifications".'),
    ...sectionHeading('certifications', 'certifications'),

    ...seoFields,
  ],
  preview: singletonPreview('Home Page'),
};

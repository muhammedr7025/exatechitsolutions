// Built-in copy for every page. Field names match the singleton page documents
// in Sanity (homePage, aboutPage, servicesPage, portfolioPage, blogPage, contactPage).

export const homePage = {
  heroBadgeText: 'EXATECH ENGINEERING',
  heroHeadlinePrefix: 'Architect Your',
  heroHeadlineHighlight: 'Digital Future',
  heroSubtitle:
    'We architect elite web platforms, intelligent mobile applications, and scalable business frameworks. Engineered for enterprises that demand absolute perfection.',
  heroCtaText: 'Start Innovating',
  heroSecondaryCtaText: 'Explore Engine',
  heroSecondaryCtaLink: '/services',
  heroChipTop: '150+ Projects Delivered',
  heroChipBottom: 'Enterprise-Grade Security',

  stats: [
    { value: '150+', label: 'Projects Delivered' },
    { value: '2M+', label: 'End Users Served' },
    { value: '500+', label: 'Campaigns Run' },
    { value: '24/7', label: 'Support Coverage' },
  ],

  whyUsEyebrow: 'Why Exatech',
  whyUsTitle: 'Engineering You Can',
  whyUsHighlight: 'Rely On.',
  whyUsItems: [
    { icon: 'Handshake', title: 'Dedicated Team', description: 'A named project manager and engineering team on every engagement — not a rotating queue of tickets.' },
    { icon: 'Layers', title: 'Full-Stack Depth', description: 'Web, mobile, AI, ERP, and automation under one roof — no handoffs between vendors.' },
    { icon: 'Shield', title: 'Security First', description: 'OWASP-aligned builds, encrypted data, and audit-ready infrastructure by default.' },
    { icon: 'Globe2', title: 'Built to Scale', description: 'Architecture and delivery models that hold up from first launch to enterprise scale.' },
  ],

  servicesEyebrow: 'Core Capabilities',
  servicesTitle: 'Built for',
  servicesHighlight: 'Every Layer.',
  servicesViewAllText: 'View All {count} Services',
  // Sanity stores these as references (featuredServices); the fallback uses slugs.
  featuredServiceSlugs: ['web-development', 'app-development', 'ai-tools', 'custom-erp', 'ecommerce'],

  processEyebrow: 'How We Work',
  processTitle: 'From Idea to',
  processHighlight: 'Deployment.',
  processSteps: [
    { icon: 'Search', title: 'Discover', description: 'We map your goals, constraints, and success metrics before a single line of code.' },
    { icon: 'PenTool', title: 'Design & Architect', description: 'Prototypes, system architecture, and a stack chosen for your scale — not ours.' },
    { icon: 'Rocket', title: 'Build & Ship', description: 'Agile sprints with weekly demos, a dedicated PM, and full visibility into progress.' },
    { icon: 'LifeBuoy', title: 'Support & Scale', description: 'Post-launch monitoring, maintenance, and roadmap support as you grow.' },
  ],

  portfolioEyebrow: 'Work Gallery',
  portfolioTitle: 'Live in the',
  portfolioHighlight: 'Wild.',
  portfolioViewAllText: 'View Full Portfolio',

  // The three social-proof sections start empty on purpose: they only appear on
  // the site once an editor adds clients / testimonials / certifications.
  clientsEyebrow: 'Our Clients',
  clientsTitle: 'Trusted By',
  clientsHighlight: 'Growing Brands.',
  testimonialsEyebrow: 'Testimonials',
  testimonialsTitle: 'What Our Clients',
  testimonialsHighlight: 'Say.',
  certificationsEyebrow: 'Certifications',
  certificationsTitle: 'Certified for',
  certificationsHighlight: 'Quality & Trust.',

  seoTitle: 'Premium Web, Mobile & ERP Engineering',
  seoDescription:
    'A premium technology collective pioneering web development, AI capabilities, intelligent scalable ERP, and custom business automation frameworks.',
};

// A "title + highlighted title" pair falls back together, so an editor who
// writes a plain heading with no highlight doesn't get the old highlight glued on.
export const homePageGroups = [
  ['heroHeadlinePrefix', 'heroHeadlineHighlight'],
  ['whyUsTitle', 'whyUsHighlight'],
  ['servicesTitle', 'servicesHighlight'],
  ['processTitle', 'processHighlight'],
  ['portfolioTitle', 'portfolioHighlight'],
  ['clientsTitle', 'clientsHighlight'],
  ['testimonialsTitle', 'testimonialsHighlight'],
  ['certificationsTitle', 'certificationsHighlight'],
];

export const aboutPage = {
  eyebrow: 'About Exatech',
  heading: 'We Engineer',
  headingHighlight: 'What’s Next.',
  lead:
    'Exatech IT Solutions is a technology collective based in Venjarammoodu, Kerala, building web platforms, mobile apps, AI tooling, ERP systems, and business automation for clients who expect precision, not excuses. We work as one embedded team across design, engineering, and delivery — so nothing falls through the gap between vendors.',
  stats: [
    { value: '150+', label: 'Projects Delivered' },
    { value: '12', label: 'Service Disciplines' },
    { value: '2M+', label: 'End Users Served' },
    { value: 'Kerala', label: 'Home Base' },
  ],
  missionCards: [
    {
      icon: 'Target',
      title: 'Our Mission',
      description: 'Give growing businesses access to the same caliber of engineering, design, and delivery discipline that large enterprises take for granted — without the enterprise overhead.',
    },
    {
      icon: 'Compass',
      title: 'How We Operate',
      description: 'Every engagement gets a dedicated project manager, weekly sprint demos, and a direct line to the people actually building your product — not a support queue.',
    },
  ],
  showWhyUs: true,
  seoTitle: 'About Us',
  seoDescription:
    'Exatech IT Solutions is a technology collective based in Venjarammoodu, Kerala, building web, mobile, AI, and ERP solutions.',
};
export const aboutPageGroups = [['heading', 'headingHighlight']];

export const servicesPage = {
  eyebrow: 'Core Capabilities',
  title: 'Everything We',
  highlight: 'Engineer.',
  subtitle:
    'Twelve disciplines, one engineering team. Pick a capability to see the full scope, stack, and delivery model.',
  cardLinkText: 'Explore',
  seoTitle: 'Services',
  seoDescription:
    "Explore all 12 of Exatech IT Solutions' service disciplines — web, mobile, AI, ERP, automation, and more.",

  // Labels used on the service and sub-service detail pages.
  backToServicesText: 'All Services',
  subServicesBadge: 'Specialized Areas',
  subServicesTitle: 'Explore Our',
  subServicesHighlight: 'Sub-Services',
  subServicesDescription: 'Dive deeper into each specialized area within {service}.',
  learnMoreText: 'Learn More',
  relatedTitle: 'Other Capabilities',
  deliverablesBadge: 'Key Deliverables',
  deliverablesTitle: 'What We',
  deliverablesHighlight: 'Deliver.',
  subServiceCtaText: 'Get Started with {title}',
  siblingsTitle: 'More in',
  backToServiceText: 'Back to {service}',
};
export const servicesPageGroups = [
  ['title', 'highlight'],
  ['subServicesTitle', 'subServicesHighlight'],
  ['deliverablesTitle', 'deliverablesHighlight'],
];

export const portfolioPage = {
  eyebrow: 'Work Gallery',
  title: 'Digital',
  highlight: 'Ecosystems.',
  subtitle:
    'A curated showroom of our high-performance deployments. Select a node to initiate a live interactive simulation.',
  tabWebLabel: 'Web Platforms',
  tabIosLabel: 'iOS Ecosystem',
  tabAndroidLabel: 'Android Apps',
  cardButtonText: 'Init Simulation',
  seoTitle: 'Portfolio',
  seoDescription: 'A showcase of web platforms and mobile apps delivered by Exatech IT Solutions.',
};
export const portfolioPageGroups = [['title', 'highlight']];

export const contactPage = {
  eyebrow: 'Get In Touch',
  heading: 'Let’s Engineer Your',
  headingHighlight: 'Next Move.',
  subtitle:
    'The fastest way to reach us is WhatsApp — most conversations start there. For anything else, use the details below.',
  whatsappCardTitle: 'Chat on WhatsApp',
  whatsappCardText: 'Usually replies within the hour, during business hours.',
  seoTitle: 'Contact',
  seoDescription: 'Get in touch with Exatech IT Solutions via WhatsApp, phone, or email.',
};
export const contactPageGroups = [['heading', 'headingHighlight']];

export const blogPage = {
  eyebrow: 'Blog',
  title: 'Ideas &',
  highlight: 'Insights.',
  subtitle: 'Engineering notes, product thinking, and lessons from the field.',
  allCategoriesLabel: 'All',
  readMoreText: 'Read article',
  emptyText: 'New articles are on the way. Check back soon.',
  backToBlogText: 'All articles',
  relatedTitle: 'Keep Reading',
  seoTitle: 'Blog',
  seoDescription: 'Articles on web development, mobile apps, AI, ERP, and automation from the Exatech team.',
};
export const blogPageGroups = [['title', 'highlight']];

// Built-in services content. Used two ways:
//  1. as the fallback the site renders until Sanity responds (or if it is unreachable);
//  2. as the source content for `npm run seed`, which copies it into Sanity.
// Rich text uses **bold** and ==highlight== markup (see src/cms/richText.js).

export const services = [
  {
    slug: 'data-transcription',
    title: 'Data Transcription & Data Processing',
    order: 1,
    teaser: 'Multilingual transcription and data processing at scale, with a 60-strong team ready on day one.',
    navIcon: 'FileText',
    bg: '/bg-ai.png',
    intro: [
      'We hereby submit the details of our team members who are ready and capable of contributing to the **French, English, Spanish, Philippines** transcription, handwritten data conversion, and data processing project.',
    ],
    stats: [
      { icon: 'Users', value: '60+', label: 'Team Members' },
      { icon: 'Globe', value: '4', label: 'Languages' },
      { icon: 'FileText', value: '18L+', label: 'Chars / Day' },
    ],
    sections: [
      {
        icon: 'CheckCircle',
        title: 'Team Overview',
        items: [
          '**Total Contributors:** 60 Members',
          '**Language Proficiency:** French, English, Spanish & Philippines — with the ability to understand, transcribe, and process textual data accurately',
          '**Experience Level:** Includes individuals with experience in transcription, data entry, and content formatting as per project standards',
        ],
      },
      {
        icon: 'CheckCircle',
        title: 'Transcription & Data Processing Capacity',
        items: [
          '**Minimum Contribution per Member:** 30,000 characters per Head/Day',
          '**Estimated Minimum Total Output:** 60 members × 30,000 characters = ==18,00,000+ characters / Day==',
          'Higher contributions are possible depending on project requirements and deadlines with quality',
        ],
      },
      {
        icon: 'ClipboardList',
        title: 'Scope of Work',
        items: [
          'Manual data cleaning and formatting',
          'Quality assurance as per predefined guidelines',
          'Submission in required formats (TXT, CSV, XLSX)',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Team Commitment',
        items: [
          'All 60 members have confirmed availability to begin work **immediately upon assignment**',
          'Ready to adhere to deadlines, quality standards, and confidentiality agreements',
          'A core coordination team is in place to ensure smooth task allocation, tracking, and delivery',
        ],
      },
    ],
    ctaText: 'Get Started',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Data Transcription and Processing.',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    order: 2,
    teaser: 'High-performance, SEO-optimized web platforms built with modern frameworks.',
    navIcon: 'Monitor',
    bg: '/bg-web.png',
    intro: [
      'We build **high-performance, scalable web platforms** that drive business growth. From corporate portals to complex SaaS platforms, our team delivers pixel-perfect, SEO-optimized solutions built with the latest technologies.',
    ],
    stats: [
      { icon: 'Monitor', value: '150+', label: 'Projects Delivered' },
      { icon: 'Code', value: '99.9%', label: 'Uptime SLA' },
      { icon: 'Rocket', value: '<2s', label: 'Load Time' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Technology Stack',
        items: [
          '**Frontend:** React, Next.js, Vue.js, Angular — responsive & modern UI/UX',
          '**Backend:** Node.js, Python, PHP, .NET — RESTful APIs & microservices',
          '**Database:** PostgreSQL, MongoDB, Firebase, MySQL — optimized data layer',
        ],
      },
      {
        icon: 'Palette',
        title: 'Design & UX',
        items: [
          'Custom UI/UX design with Figma prototypes and user flow mapping',
          'Fully responsive design — mobile-first approach across all breakpoints',
          'Dark mode, accessibility (WCAG 2.1), and internationalization support',
        ],
      },
      {
        icon: 'Shield',
        title: 'Quality & Security',
        items: [
          'SSL encryption, OWASP security best practices, and DDoS protection',
          'Automated CI/CD pipelines with comprehensive testing coverage',
          'Performance optimization — Core Web Vitals compliant',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Delivery Model',
        items: [
          'Agile development with **weekly sprint demos** and transparent project tracking',
          'Dedicated project manager for seamless communication and milestone delivery',
          'Post-launch support, maintenance, and scaling packages available',
        ],
      },
    ],
    ctaText: 'Start Your Project',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Web Development services.',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    order: 3,
    teaser: 'Native and cross-platform mobile apps engineered for seamless UX.',
    navIcon: 'Smartphone',
    bg: '/bg-web.png',
    intro: [
      'We craft **native and cross-platform mobile applications** for iOS and Android that deliver seamless user experiences. From concept to App Store launch, our team handles the complete lifecycle.',
    ],
    stats: [
      { icon: 'Smartphone', value: '80+', label: 'Apps Launched' },
      { icon: 'Users', value: '2M+', label: 'End Users' },
      { icon: 'Rocket', value: '4.7★', label: 'Avg Rating' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Platform Expertise',
        items: [
          '**Native:** Swift (iOS), Kotlin (Android) — maximum performance & native UX',
          '**Cross-Platform:** Flutter, React Native — single codebase, dual deployment',
          '**Backend:** Firebase, AWS Amplify, custom Node.js APIs — real-time & scalable',
        ],
      },
      {
        icon: 'Palette',
        title: 'Design & Interaction',
        items: [
          'Material Design 3 and Human Interface Guidelines compliant',
          'Custom animations, gesture handling, and micro-interactions',
          'Offline-first architecture with seamless sync capabilities',
        ],
      },
      {
        icon: 'Shield',
        title: 'Features & Integration',
        items: [
          'Push notifications, in-app messaging, and analytics integration',
          'Payment gateways (Stripe, Razorpay), social login, and maps',
          'Biometric auth, encrypted storage, and GDPR compliance',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Launch & Support',
        items: [
          'Complete **App Store & Play Store** submission and optimization (ASO)',
          'Beta testing, crash analytics, and staged rollout strategy',
          'Ongoing maintenance, version updates, and feature enhancements',
        ],
      },
    ],
    ctaText: 'Build Your App',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your App Development services.',
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools & Software',
    order: 4,
    teaser: 'Custom AI-powered software that automates workflows and unlocks new revenue.',
    navIcon: 'Cpu',
    bg: '/bg-ai.png',
    intro: [
      'We develop **cutting-edge AI-powered tools and software solutions** that automate complex workflows, enhance decision-making, and unlock new revenue streams through intelligent automation.',
    ],
    stats: [
      { icon: 'Cpu', value: '30+', label: 'AI Models Deployed' },
      { icon: 'Activity', value: '95%+', label: 'Accuracy Rate' },
      { icon: 'Rocket', value: '10x', label: 'Efficiency Gain' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'AI Capabilities',
        items: [
          '**NLP:** Chatbots, sentiment analysis, text classification, and summarization',
          '**Computer Vision:** Image recognition, OCR, object detection, and video analytics',
          '**Generative AI:** Custom GPT integrations, content generation, and AI assistants',
        ],
      },
      {
        icon: 'Settings',
        title: 'Custom Software',
        items: [
          'Tailored SaaS products built from scratch for your specific use case',
          'API development and third-party system integrations',
          'Real-time dashboards and predictive analytics engines',
        ],
      },
      {
        icon: 'Shield',
        title: 'Data & Security',
        items: [
          'End-to-end data pipeline management and model training',
          'On-premise or cloud deployment (AWS, GCP, Azure)',
          'Enterprise-grade security, data encryption, and compliance',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Engagement Model',
        items: [
          'POC development with **measurable KPIs** before full-scale implementation',
          'Dedicated AI/ML engineering team with domain expertise',
          'Continuous model monitoring, retraining, and optimization',
        ],
      },
    ],
    ctaText: 'Explore AI Solutions',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your AI Tools and Software services.',
  },
  {
    slug: 'custom-erp',
    title: 'Custom ERP',
    order: 5,
    teaser: 'Unified ERP systems tailored to your finance, HR, and supply chain workflows.',
    navIcon: 'Server',
    bg: '/bg-erp.png',
    intro: [
      'We design and build **custom Enterprise Resource Planning systems** that unify your operations — from inventory and HR to finance and supply chain — in one integrated platform tailored to your workflows.',
    ],
    stats: [
      { icon: 'Server', value: '40+', label: 'ERP Deployments' },
      { icon: 'Users', value: '5000+', label: 'Daily Users' },
      { icon: 'Activity', value: '60%', label: 'Cost Reduction' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Core Modules',
        items: [
          '**Finance & Accounting:** Invoicing, ledger, tax compliance, and reporting',
          '**HR & Payroll:** Employee management, attendance, leave, and payslip generation',
          '**Inventory & Supply Chain:** Stock tracking, PO management, and vendor portals',
        ],
      },
      {
        icon: 'Settings',
        title: 'Customization',
        items: [
          'Role-based access control with granular permission management',
          'Custom workflow automation and approval hierarchies',
          'Multi-branch, multi-currency, and multi-language support',
        ],
      },
      {
        icon: 'Shield',
        title: 'Integration & Security',
        items: [
          'Seamless integration with existing tools (Tally, SAP, QuickBooks)',
          'Cloud-hosted with 99.9% uptime and automated backups',
          'Audit trails, data encryption, and compliance (SOC 2, GDPR)',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Implementation',
        items: [
          'Phased rollout with **dedicated training** for your team',
          'Data migration from legacy systems with zero downtime',
          'Ongoing support, feature updates, and scaling as you grow',
        ],
      },
    ],
    ctaText: 'Plan Your ERP',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Custom ERP services.',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    order: 6,
    teaser: 'Turn raw data into dashboards, forecasts, and decisions you can act on.',
    navIcon: 'BarChart3',
    bg: '/bg-ai.png',
    intro: [
      'We transform raw data into **actionable business intelligence** through advanced analytics, dynamic dashboards, and predictive models that empower smarter, faster decisions.',
    ],
    stats: [
      { icon: 'BarChart3', value: '200+', label: 'Dashboards Built' },
      { icon: 'Activity', value: '85%', label: 'Forecast Accuracy' },
      { icon: 'Rocket', value: '40%', label: 'Decision Speed Up' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Analytics Services',
        items: [
          'Custom BI dashboards using Power BI, Tableau, and Metabase',
          'Predictive analytics and machine learning model development',
          'Real-time data streaming and monitoring systems',
        ],
      },
      {
        icon: 'Settings',
        title: 'Data Engineering',
        items: [
          'ETL pipeline design and data warehouse architecture',
          'Data cleaning, normalization, and quality assurance',
          'Cloud data platforms (BigQuery, Snowflake, Redshift)',
        ],
      },
      {
        icon: 'Shield',
        title: 'Governance & Compliance',
        items: [
          'Data governance frameworks and security protocols',
          'GDPR, HIPAA, and SOC 2 compliance implementation',
          'Automated alerting, anomaly detection, and audit logging',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Engagement',
        items: [
          'Discovery workshop to map **key metrics and KPIs**',
          'Iterative dashboard development with stakeholder feedback loops',
          'Training, documentation, and ongoing optimization support',
        ],
      },
    ],
    ctaText: 'Unlock Insights',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Data Analytics services.',
  },
  {
    slug: 'process-automation',
    title: 'Process Automation',
    order: 7,
    teaser: 'RPA and workflow automation that cuts manual work and errors.',
    navIcon: 'Activity',
    bg: '/bg-erp.png',
    intro: [
      'We engineer **intelligent automation solutions** that eliminate manual bottlenecks, reduce errors, and accelerate your business processes — from simple workflows to enterprise-scale RPA deployments.',
    ],
    stats: [
      { icon: 'Activity', value: '70%', label: 'Time Saved' },
      { icon: 'Shield', value: '99%', label: 'Error Reduction' },
      { icon: 'Rocket', value: '200+', label: 'Workflows Automated' },
    ],
    sections: [
      {
        icon: 'Settings',
        title: 'Automation Scope',
        items: [
          'Robotic Process Automation (RPA) for repetitive tasks',
          'Business process workflow design and orchestration',
          'Document processing, invoice extraction, and form automation',
        ],
      },
      {
        icon: 'Layers',
        title: 'Integration',
        items: [
          'API-based integrations across CRM, ERP, and SaaS tools',
          'Email, Slack, and notification-based trigger workflows',
          'Cloud-native automation with serverless functions',
        ],
      },
      {
        icon: 'Shield',
        title: 'Monitoring & Quality',
        items: [
          'Real-time execution monitoring and error handling',
          'Automated testing and validation at every stage',
          'Comprehensive audit trails and compliance reporting',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Delivery',
        items: [
          'Process audit and **automation readiness assessment**',
          'Phased rollout with training and knowledge transfer',
          'Continuous improvement and bot management post-launch',
        ],
      },
    ],
    ctaText: 'Automate Now',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Process Automation services.',
  },
  {
    slug: 'voice-agent',
    title: 'Voice Agent',
    order: 8,
    teaser: 'AI voice agents that handle customer calls 24/7 in 15+ languages.',
    navIcon: 'Mic',
    bg: '/bg-ai.png',
    intro: [
      'We deploy **AI-powered voice agents** that handle customer interactions 24/7 — answering queries, booking appointments, and resolving issues with natural, human-like conversations.',
    ],
    stats: [
      { icon: 'Mic', value: '24/7', label: 'Availability' },
      { icon: 'Users', value: '10K+', label: 'Calls / Day' },
      { icon: 'Globe', value: '15+', label: 'Languages' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Voice AI Capabilities',
        items: [
          'Natural language understanding with context-aware responses',
          'Multi-language support with accent and dialect recognition',
          'Seamless handoff to human agents for complex scenarios',
        ],
      },
      {
        icon: 'Settings',
        title: 'Use Cases',
        items: [
          'Customer support automation and FAQ resolution',
          'Appointment scheduling, reminders, and confirmations',
          'Lead qualification, surveys, and feedback collection',
        ],
      },
      {
        icon: 'Shield',
        title: 'Integration & Security',
        items: [
          'CRM integration (Salesforce, HubSpot, Zoho) for contextual conversations',
          'Telephony integration with SIP, Twilio, and call center platforms',
          'Call recording, transcript storage, and PCI-DSS compliance',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Deployment',
        items: [
          'Custom voice persona design matching your **brand identity**',
          'Pilot deployment with real-time analytics and improvement cycles',
          'Scalable infrastructure that grows with your call volume',
        ],
      },
    ],
    ctaText: 'Deploy Voice AI',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Voice Agent services.',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce',
    order: 9,
    teaser: 'High-converting storefronts and marketplaces built to scale revenue.',
    navIcon: 'ShoppingCart',
    bg: '/bg-web.png',
    intro: [
      'We build **high-converting e-commerce platforms** that scale with your business. From boutique stores to enterprise marketplaces, our solutions drive revenue with frictionless shopping experiences.',
    ],
    stats: [
      { icon: 'ShoppingCart', value: '100+', label: 'Stores Built' },
      { icon: 'TrendingUp', value: '3x', label: 'Avg Revenue Growth' },
      { icon: 'Users', value: '50K+', label: 'Daily Transactions' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Platform & Tech',
        items: [
          '**Custom Build:** React/Next.js storefronts with headless commerce architecture',
          '**Platforms:** Shopify, WooCommerce, Magento — expert customization & migration',
          '**Mobile Commerce:** PWA and native app integration for on-the-go shopping',
        ],
      },
      {
        icon: 'ShoppingCart',
        title: 'Commerce Features',
        items: [
          'Advanced product catalog with filters, variants, and dynamic pricing',
          'Multi-gateway payments (Stripe, Razorpay, PayPal, COD)',
          'Real-time inventory sync, order tracking, and automated invoicing',
        ],
      },
      {
        icon: 'Target',
        title: 'Growth & Conversion',
        items: [
          'SEO-optimized product pages with structured data markup',
          'AI-powered recommendations, upselling, and abandoned cart recovery',
          'Loyalty programs, coupons, referral systems, and wishlist features',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Operations & Support',
        items: [
          'Shipping integration with **real-time tracking** (Shiprocket, Delhivery, FedEx)',
          'Multi-vendor marketplace capability with seller dashboards',
          'Analytics dashboard with sales reports, customer insights, and forecasting',
        ],
      },
    ],
    ctaText: 'Launch Your Store',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your E-Commerce Development services.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    order: 10,
    teaser: 'Data-driven SEO, paid media, and content strategies that grow your brand.',
    navIcon: 'TrendingUp',
    bg: '/bg-web.png',
    intro: [
      'We deliver **data-driven digital marketing strategies** that amplify your brand presence, drive qualified traffic, and convert leads into loyal customers across all digital channels.',
    ],
    stats: [
      { icon: 'TrendingUp', value: '500+', label: 'Campaigns Run' },
      { icon: 'Users', value: '10M+', label: 'Audience Reached' },
      { icon: 'Target', value: '5x', label: 'Avg ROI' },
    ],
    sections: [
      {
        icon: 'Search',
        title: 'SEO & Content',
        items: [
          '**On-Page SEO:** Keyword research, meta optimization, schema markup, and site audits',
          '**Content Marketing:** Blog strategy, copywriting, infographics, and video content',
          '**Technical SEO:** Core Web Vitals, site speed, crawlability, and indexing fixes',
        ],
      },
      {
        icon: 'Target',
        title: 'Paid Advertising',
        items: [
          'Google Ads (Search, Display, Shopping) with advanced bidding strategies',
          'Meta Ads (Facebook & Instagram) with custom audience targeting',
          'LinkedIn, YouTube, and programmatic advertising campaigns',
        ],
      },
      {
        icon: 'PenTool',
        title: 'Social Media & Branding',
        items: [
          'Social media management across all major platforms',
          'Brand identity design, content calendars, and community engagement',
          'Influencer marketing and strategic partnership campaigns',
        ],
      },
      {
        icon: 'BarChart3',
        title: 'Analytics & Reporting',
        items: [
          'Monthly performance reports with **actionable insights** and KPI tracking',
          'Conversion rate optimization (CRO) and A/B testing',
          'Marketing automation, email campaigns, and lead nurturing workflows',
        ],
      },
    ],
    ctaText: 'Grow Your Brand',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Digital Marketing services.',
  },
  {
    slug: 'voice-process',
    title: 'Voice Process',
    order: 11,
    teaser: 'Trained voice agents for inbound, outbound, and blended support.',
    navIcon: 'Mic',
    bg: '/bg-ai.png',
    intro: [
      'We provide **professional human-driven voice process services** with skilled agents trained in customer engagement, sales support, and technical helpdesk operations across multiple industries.',
    ],
    stats: [
      { icon: 'Phone', value: '50+', label: 'Trained Agents' },
      { icon: 'Users', value: '98%', label: 'CSAT Score' },
      { icon: 'Globe', value: '3', label: 'Shifts / Day' },
    ],
    sections: [
      {
        icon: 'HeadphonesIcon',
        title: 'Service Categories',
        items: [
          '**Inbound:** Customer support, helpdesk, order management, and complaint resolution',
          '**Outbound:** Telemarketing, lead generation, surveys, and appointment setting',
          '**Blended:** Multi-channel support combining calls, chat, and email',
        ],
      },
      {
        icon: 'Users',
        title: 'Team Quality',
        items: [
          'Rigorous hiring process with communication and accent training',
          'Industry-specific domain training (healthcare, fintech, e-commerce)',
          'Quality monitoring with call audits and performance scorecards',
        ],
      },
      {
        icon: 'Settings',
        title: 'Infrastructure',
        items: [
          'Cloud-based call center with CRM and ticketing integration',
          'Predictive dialer, IVR, and call routing systems',
          'Real-time dashboard with live call monitoring and analytics',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Engagement',
        items: [
          'Flexible engagement — **dedicated, shared, or hybrid** team models',
          'SLA-driven delivery with guaranteed response and resolution times',
          'Detailed reporting with daily, weekly, and monthly performance reviews',
        ],
      },
    ],
    ctaText: 'Hire Our Team',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your Voice Process services.',
  },
  {
    slug: 'e-publishing',
    title: 'E-Publishing',
    order: 12,
    teaser: 'End-to-end digital publishing, from manuscript to global distribution.',
    navIcon: 'BookOpen',
    bg: '/bg-web.png',
    intro: [
      'We offer **end-to-end digital publishing solutions** — from manuscript formatting and conversion to global distribution across all major platforms, ensuring your content reaches readers worldwide.',
    ],
    stats: [
      { icon: 'BookOpen', value: '500+', label: 'Titles Published' },
      { icon: 'Globe', value: '50+', label: 'Platforms' },
      { icon: 'FileText', value: '20+', label: 'Formats Supported' },
    ],
    sections: [
      {
        icon: 'Layers',
        title: 'Publishing Services',
        items: [
          'eBook conversion (EPUB, MOBI, KF8, PDF) with responsive formatting',
          'Print-on-demand setup with cover design and interior layout',
          'Interactive digital content with multimedia and embedded media',
        ],
      },
      {
        icon: 'PenTool',
        title: 'Content & Design',
        items: [
          'Professional typesetting, proofreading, and copy-editing',
          'Custom cover design, illustrations, and brand-aligned layouts',
          'Accessibility compliance (EPUB 3, WCAG) for inclusive reading',
        ],
      },
      {
        icon: 'Globe',
        title: 'Distribution',
        items: [
          'Multi-platform distribution (Amazon KDP, Apple Books, Google Play, Kobo)',
          'ISBN management, metadata optimization, and catalog listing',
          'Royalty tracking and sales analytics across all channels',
        ],
      },
      {
        icon: 'Handshake',
        title: 'Support',
        items: [
          'Dedicated publishing coordinator for **end-to-end management**',
          'Bulk conversion packages for publishers and institutions',
          'Ongoing updates, re-releases, and new edition management',
        ],
      },
    ],
    ctaText: 'Publish Now',
    ctaWhatsappMessage: 'Hello Exatech IT Solutions, I am interested in your E-Publishing services.',
  },
];

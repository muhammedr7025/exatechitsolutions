import {
  Monitor, Smartphone, Mic, BookOpen, TrendingUp, Cpu, Server, Activity,
  ShoppingCart, BarChart3, FileText, CheckCircle, Users, Globe, ClipboardList,
  Handshake, Code, Palette, Rocket, Shield, Target, Search, PenTool, Layers,
  Settings, HeadphonesIcon, Phone,
} from 'lucide-react';

// ========== SUB-SERVICES DATA ==========
// Each sub-service has a slug, title, teaser, icon, features, and belongs to a parent service slug.
export const subServicesData = {
  // ── Data Transcription ──
  'data-transcription': [
    {
      slug: 'multilingual-transcription',
      title: 'Multilingual Transcription',
      icon: <Globe size={32} />,
      teaser: 'Accurate transcription services across French, English, Spanish & Filipino, powered by a trained 60-member team.',
      features: [
        'French, English, Spanish & Filipino language proficiency',
        '30,000+ characters per team member per day',
        'Audio, video, and handwritten content transcription',
        'Context-aware transcription with terminology glossaries',
        'Strict confidentiality and NDA compliance',
      ],
    },
    {
      slug: 'data-processing',
      title: 'Data Processing & Conversion',
      icon: <FileText size={32} />,
      teaser: 'Manual and automated data cleaning, formatting, and conversion in TXT, CSV, XLSX, and custom formats.',
      features: [
        'Manual data cleaning and formatting at scale',
        'Handwritten document digitization and conversion',
        'Submission in TXT, CSV, XLSX, or custom formats',
        'Quality assurance with multi-stage review',
        'OCR-assisted processing for scanned documents',
      ],
    },
    {
      slug: 'quality-assurance',
      title: 'Quality Assurance & Delivery',
      icon: <CheckCircle size={32} />,
      teaser: 'Multi-stage QA workflows, task tracking coordination, and guaranteed on-time delivery.',
      features: [
        'Multi-stage quality review pipelines',
        'Predefined guideline adherence and validation',
        'Core coordination team for task allocation and tracking',
        'Immediate availability — 60 members ready on assignment',
        'Daily, weekly, and milestone-based delivery reports',
      ],
    },
  ],

  // ── Web Development ──
  'web-development': [
    {
      slug: 'frontend-development',
      title: 'Frontend Development',
      icon: <Code size={32} />,
      teaser: 'Responsive, modern frontends built with React, Next.js, Vue.js, and Angular for pixel-perfect UIs.',
      features: [
        'React, Next.js, Vue.js, Angular — responsive & modern UI/UX',
        'Component-based architecture with design system integration',
        'Performance-optimized with code splitting and lazy loading',
        'Progressive Web App (PWA) capabilities',
        'Cross-browser compatibility and accessibility compliance',
      ],
    },
    {
      slug: 'backend-development',
      title: 'Backend & API Development',
      icon: <Server size={32} />,
      teaser: 'Scalable server-side solutions with Node.js, Python, PHP, and .NET, featuring RESTful APIs and microservices.',
      features: [
        'Node.js, Python, PHP, .NET backend development',
        'RESTful API and GraphQL design and implementation',
        'Microservices architecture for scalability',
        'PostgreSQL, MongoDB, Firebase, MySQL database layer',
        'Authentication, authorization, and rate limiting',
      ],
    },
    {
      slug: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <Palette size={32} />,
      teaser: 'Custom interface design with Figma prototypes, user flow mapping, and mobile-first responsive layouts.',
      features: [
        'Custom UI/UX design with Figma prototypes and user flow mapping',
        'Fully responsive design — mobile-first across all breakpoints',
        'Dark mode, accessibility (WCAG 2.1), and internationalization',
        'Design system creation and component libraries',
        'User research, personas, and journey mapping',
      ],
    },
    {
      slug: 'web-security-devops',
      title: 'Security & DevOps',
      icon: <Shield size={32} />,
      teaser: 'SSL encryption, OWASP best practices, CI/CD pipelines, and Core Web Vitals optimization.',
      features: [
        'SSL encryption and OWASP security best practices',
        'DDoS protection and vulnerability scanning',
        'Automated CI/CD pipelines with comprehensive testing',
        'Performance optimization — Core Web Vitals compliant',
        'Cloud deployment on AWS, GCP, or Vercel',
      ],
    },
  ],

  // ── App Development ──
  'app-development': [
    {
      slug: 'native-app-development',
      title: 'Native App Development',
      icon: <Smartphone size={32} />,
      teaser: 'High-performance native iOS (Swift) and Android (Kotlin) apps with maximum platform-specific UX.',
      features: [
        'Swift for iOS — maximum performance & native UX',
        'Kotlin for Android — modern, concise, and safe',
        'Platform-specific design patterns and guidelines',
        'Hardware integration (camera, sensors, NFC, Bluetooth)',
        'Optimized for App Store and Play Store requirements',
      ],
    },
    {
      slug: 'cross-platform-apps',
      title: 'Cross-Platform Development',
      icon: <Layers size={32} />,
      teaser: 'Flutter and React Native apps with a single codebase for iOS and Android, cutting development time in half.',
      features: [
        'Flutter & React Native — single codebase, dual deployment',
        'Native-like performance with hot reload development',
        'Shared business logic with platform-specific UI tweaks',
        'Offline-first architecture with seamless sync',
        'Custom animations, gestures, and micro-interactions',
      ],
    },
    {
      slug: 'app-design-ux',
      title: 'Mobile App Design',
      icon: <Palette size={32} />,
      teaser: 'Material Design 3 and Human Interface Guidelines-compliant mobile interfaces with custom animations.',
      features: [
        'Material Design 3 and HIG compliant interfaces',
        'Custom animations, gesture handling, and micro-interactions',
        'Wireframes and high-fidelity Figma/Sketch prototypes',
        'User testing and iterative design refinement',
        'Dark mode and dynamic theming support',
      ],
    },
    {
      slug: 'app-launch-support',
      title: 'Launch & Support',
      icon: <Rocket size={32} />,
      teaser: 'Complete App Store and Play Store submission, beta testing, crash analytics, and ongoing maintenance.',
      features: [
        'App Store & Play Store submission and ASO optimization',
        'Beta testing, crash analytics, and staged rollouts',
        'Push notifications, in-app messaging, and analytics',
        'Payment gateway integration (Stripe, Razorpay)',
        'Ongoing maintenance, version updates, and scaling',
      ],
    },
  ],

  // ── AI Tools & Software ──
  'ai-tools': [
    {
      slug: 'nlp-chatbots',
      title: 'NLP & Chatbots',
      icon: <Cpu size={32} />,
      teaser: 'Intelligent chatbots, sentiment analysis, text classification, and summarization powered by custom NLP models.',
      features: [
        'Custom chatbot development for customer support and sales',
        'Sentiment analysis and opinion mining',
        'Text classification and auto-categorization',
        'Document summarization and key-point extraction',
        'Custom GPT integrations and AI assistant development',
      ],
    },
    {
      slug: 'computer-vision',
      title: 'Computer Vision',
      icon: <Target size={32} />,
      teaser: 'Image recognition, OCR, object detection, and video analytics for industrial and commercial applications.',
      features: [
        'Image recognition and classification systems',
        'Optical Character Recognition (OCR) for document processing',
        'Object detection and real-time video analytics',
        'Quality inspection and anomaly detection for manufacturing',
        'Face recognition and biometric verification',
      ],
    },
    {
      slug: 'custom-ai-software',
      title: 'Custom AI Software',
      icon: <Settings size={32} />,
      teaser: 'Tailored SaaS products, predictive analytics engines, and real-time AI dashboards built from scratch.',
      features: [
        'Custom SaaS products built from scratch for your use case',
        'API development and third-party system integrations',
        'Real-time dashboards and predictive analytics engines',
        'Generative AI solutions — content generation and automation',
        'On-premise or cloud deployment (AWS, GCP, Azure)',
      ],
    },
    {
      slug: 'ai-consulting',
      title: 'AI Consulting & MLOps',
      icon: <Handshake size={32} />,
      teaser: 'POC development, model training, and continuous monitoring with a dedicated AI/ML engineering team.',
      features: [
        'POC development with measurable KPIs',
        'End-to-end data pipeline management and model training',
        'Continuous model monitoring, retraining, and optimization',
        'Enterprise-grade security, data encryption, and compliance',
        'Dedicated AI/ML engineering team with domain expertise',
      ],
    },
  ],

  // ── Custom ERP ──
  'custom-erp': [
    {
      slug: 'finance-accounting',
      title: 'Finance & Accounting',
      icon: <BarChart3 size={32} />,
      teaser: 'Automated invoicing, general ledger, tax compliance, and financial reporting modules.',
      features: [
        'Automated invoicing and billing management',
        'General ledger and chart of accounts',
        'Tax compliance and GST/VAT automation',
        'Financial reporting with custom dashboards',
        'Multi-currency and multi-branch support',
      ],
    },
    {
      slug: 'hr-payroll',
      title: 'HR & Payroll',
      icon: <Users size={32} />,
      teaser: 'Complete employee management, attendance tracking, leave management, and payslip generation.',
      features: [
        'Employee database and profile management',
        'Attendance tracking with biometric integration',
        'Leave management and approval workflows',
        'Automated payslip generation and salary processing',
        'Performance review and appraisal modules',
      ],
    },
    {
      slug: 'inventory-supply-chain',
      title: 'Inventory & Supply Chain',
      icon: <ClipboardList size={32} />,
      teaser: 'Real-time stock tracking, purchase order management, and vendor portal integration.',
      features: [
        'Real-time stock tracking across warehouses',
        'Purchase order management and procurement workflows',
        'Vendor portal for supplier collaboration',
        'Demand forecasting and reorder automation',
        'Barcode/QR code scanning integration',
      ],
    },
    {
      slug: 'erp-integration',
      title: 'Integration & Deployment',
      icon: <Settings size={32} />,
      teaser: 'Seamless integration with Tally, SAP, and QuickBooks, plus cloud hosting with 99.9% uptime.',
      features: [
        'Integration with Tally, SAP, and QuickBooks',
        'Cloud-hosted with 99.9% uptime and automated backups',
        'Role-based access control and audit trails',
        'Data migration from legacy systems with zero downtime',
        'Phased rollout with dedicated training',
      ],
    },
  ],

  // ── Data Analytics ──
  'data-analytics': [
    {
      slug: 'bi-dashboards',
      title: 'BI Dashboards',
      icon: <BarChart3 size={32} />,
      teaser: 'Custom business intelligence dashboards using Power BI, Tableau, and Metabase for real-time insights.',
      features: [
        'Custom dashboards with Power BI, Tableau, and Metabase',
        'Real-time data visualization and KPI tracking',
        'Interactive filters, drill-downs, and cross-reports',
        'Automated report scheduling and distribution',
        'Mobile-responsive dashboard access',
      ],
    },
    {
      slug: 'predictive-analytics',
      title: 'Predictive Analytics',
      icon: <TrendingUp size={32} />,
      teaser: 'Machine learning models for demand forecasting, churn prediction, and anomaly detection.',
      features: [
        'Predictive modeling for demand and revenue forecasting',
        'Customer churn prediction and retention strategies',
        'Anomaly detection and automated alerting',
        'Time-series analysis and trend identification',
        'A/B testing and experiment design',
      ],
    },
    {
      slug: 'data-engineering',
      title: 'Data Engineering',
      icon: <Settings size={32} />,
      teaser: 'ETL pipeline design, data warehouse architecture, and cloud data platforms for scalable analytics.',
      features: [
        'ETL pipeline design and orchestration',
        'Data warehouse architecture (Snowflake, BigQuery, Redshift)',
        'Data cleaning, normalization, and quality assurance',
        'Real-time data streaming and event processing',
        'Cloud-native data platforms and serverless functions',
      ],
    },
  ],

  // ── Process Automation ──
  'process-automation': [
    {
      slug: 'rpa-solutions',
      title: 'RPA Solutions',
      icon: <Activity size={32} />,
      teaser: 'Robotic Process Automation for repetitive tasks, document processing, and form automation.',
      features: [
        'UiPath, Automation Anywhere, and Power Automate bots',
        'Document processing and invoice extraction',
        'Form filling and data migration automation',
        'Scheduled and trigger-based task execution',
        'Exception handling and error recovery workflows',
      ],
    },
    {
      slug: 'workflow-automation',
      title: 'Workflow Automation',
      icon: <Layers size={32} />,
      teaser: 'Custom business process workflows with API integrations, triggers, and approval pipelines.',
      features: [
        'Business process workflow design and orchestration',
        'API-based integrations across CRM, ERP, and SaaS tools',
        'Email, Slack, and notification-based triggers',
        'Custom approval hierarchies and routing rules',
        'Cloud-native automation with serverless functions',
      ],
    },
    {
      slug: 'automation-monitoring',
      title: 'Monitoring & Quality',
      icon: <Shield size={32} />,
      teaser: 'Real-time execution monitoring, automated testing, and comprehensive audit trails.',
      features: [
        'Real-time bot execution monitoring and error handling',
        'Automated testing and validation at every stage',
        'Comprehensive audit trails and compliance reporting',
        'Performance metrics and optimization recommendations',
        'Continuous improvement and bot management post-launch',
      ],
    },
  ],

  // ── Voice Agent ──
  'voice-agent': [
    {
      slug: 'voice-ai-engine',
      title: 'Voice AI Engine',
      icon: <Mic size={32} />,
      teaser: 'Natural language understanding with context-aware responses, supporting 15+ languages with accent recognition.',
      features: [
        'Natural language understanding with context-aware responses',
        'Multi-language support (15+ languages)',
        'Accent and dialect recognition',
        'Sentiment detection during live conversations',
        'Seamless handoff to human agents for complex scenarios',
      ],
    },
    {
      slug: 'voice-use-cases',
      title: 'Use Cases & Solutions',
      icon: <Phone size={32} />,
      teaser: 'Customer support automation, appointment scheduling, lead qualification, and feedback collection.',
      features: [
        'Customer support automation and FAQ resolution',
        'Appointment scheduling, reminders, and confirmations',
        'Lead qualification and survey automation',
        'Outbound calling campaigns and follow-ups',
        'Custom voice persona matching your brand identity',
      ],
    },
    {
      slug: 'voice-integration',
      title: 'Telephony Integration',
      icon: <Settings size={32} />,
      teaser: 'CRM integration with Salesforce, HubSpot, and Zoho, plus Twilio and SIP telephony connectivity.',
      features: [
        'CRM integration (Salesforce, HubSpot, Zoho)',
        'Telephony integration with SIP and Twilio',
        'Call center platform connectivity',
        'Call recording, transcript storage, and PCI-DSS compliance',
        'Scalable infrastructure that grows with call volume',
      ],
    },
  ],

  // ── E-Commerce ──
  'ecommerce': [
    {
      slug: 'storefront-development',
      title: 'Storefront Development',
      icon: <ShoppingCart size={32} />,
      teaser: 'Custom React/Next.js storefronts and Shopify, WooCommerce, Magento expert customization.',
      features: [
        'Custom React/Next.js storefronts with headless commerce',
        'Shopify, WooCommerce, Magento customization & migration',
        'Mobile commerce — PWA and native app integration',
        'Multi-vendor marketplace with seller dashboards',
        'Advanced product catalog with filters and variants',
      ],
    },
    {
      slug: 'payments-logistics',
      title: 'Payments & Logistics',
      icon: <Globe size={32} />,
      teaser: 'Multi-gateway payments (Stripe, Razorpay, PayPal, COD) and real-time shipping with Shiprocket & FedEx.',
      features: [
        'Multi-gateway payments (Stripe, Razorpay, PayPal, COD)',
        'Real-time inventory sync and order tracking',
        'Automated invoicing and tax calculation',
        'Shipping integration (Shiprocket, Delhivery, FedEx)',
        'Returns management and refund automation',
      ],
    },
    {
      slug: 'ecommerce-growth',
      title: 'Growth & Conversion',
      icon: <TrendingUp size={32} />,
      teaser: 'AI-powered recommendations, SEO-optimized product pages, loyalty programs, and abandoned cart recovery.',
      features: [
        'SEO-optimized product pages with structured data',
        'AI-powered recommendations and upselling',
        'Abandoned cart recovery automation',
        'Loyalty programs, coupons, and referral systems',
        'Analytics dashboard with sales and customer insights',
      ],
    },
  ],

  // ── Digital Marketing ──
  'digital-marketing': [
    {
      slug: 'seo-content',
      title: 'SEO & Content Marketing',
      icon: <Search size={32} />,
      teaser: 'On-page, off-page, and technical SEO with blog strategy, copywriting, and content marketing.',
      features: [
        'Keyword research, meta optimization, and schema markup',
        'Technical SEO — Core Web Vitals, crawlability, indexing',
        'Blog strategy, copywriting, and content creation',
        'Link building and off-page authority development',
        'Monthly SEO audits and ranking reports',
      ],
    },
    {
      slug: 'paid-advertising',
      title: 'Paid Advertising',
      icon: <Target size={32} />,
      teaser: 'Google Ads, Meta Ads, LinkedIn, and YouTube campaigns with advanced bidding and audience targeting.',
      features: [
        'Google Ads (Search, Display, Shopping) with smart bidding',
        'Meta Ads (Facebook & Instagram) with custom audiences',
        'LinkedIn and YouTube advertising campaigns',
        'Remarketing and lookalike audience strategies',
        'Conversion tracking and ROAS optimization',
      ],
    },
    {
      slug: 'social-media-branding',
      title: 'Social Media & Branding',
      icon: <PenTool size={32} />,
      teaser: 'Social media management, brand identity design, influencer marketing, and community engagement.',
      features: [
        'Social media management across all major platforms',
        'Brand identity design and visual guidelines',
        'Content calendars and community engagement',
        'Influencer marketing and strategic partnerships',
        'Marketing automation, email campaigns, and lead nurturing',
      ],
    },
  ],

  // ── Voice Process ──
  'voice-process': [
    {
      slug: 'inbound-support',
      title: 'Inbound Support',
      icon: <HeadphonesIcon size={32} />,
      teaser: 'Customer support, helpdesk, order management, and complaint resolution with trained voice agents.',
      features: [
        'Customer support and helpdesk operations',
        'Order management and inquiry resolution',
        'Complaint handling and escalation workflows',
        'Industry-specific domain training (healthcare, fintech)',
        'Quality monitoring with call audits and scorecards',
      ],
    },
    {
      slug: 'outbound-services',
      title: 'Outbound Services',
      icon: <Phone size={32} />,
      teaser: 'Telemarketing, lead generation, surveys, appointment setting, and outbound campaign management.',
      features: [
        'Telemarketing and lead generation campaigns',
        'Survey administration and feedback collection',
        'Appointment setting and follow-up calls',
        'Predictive dialer and IVR integration',
        'Campaign analytics and conversion tracking',
      ],
    },
    {
      slug: 'voice-infrastructure',
      title: 'Infrastructure & Reporting',
      icon: <Server size={32} />,
      teaser: 'Cloud-based call center with CRM integration, live monitoring, and detailed SLA-driven reporting.',
      features: [
        'Cloud-based call center with CRM and ticketing integration',
        'Real-time dashboard with live call monitoring',
        'SLA-driven delivery with guaranteed response times',
        'Flexible engagement — dedicated, shared, or hybrid teams',
        'Daily, weekly, and monthly performance reviews',
      ],
    },
  ],

  // ── E-Publishing ──
  'e-publishing': [
    {
      slug: 'ebook-conversion',
      title: 'eBook Conversion',
      icon: <BookOpen size={32} />,
      teaser: 'EPUB, MOBI, KF8, and PDF conversion with responsive formatting and interactive multimedia support.',
      features: [
        'eBook conversion to EPUB, MOBI, KF8, PDF formats',
        'Responsive formatting for all reading devices',
        'Interactive digital content with embedded multimedia',
        'Print-on-demand setup with interior layout',
        'Accessibility compliance (EPUB 3, WCAG)',
      ],
    },
    {
      slug: 'content-design',
      title: 'Content & Design',
      icon: <PenTool size={32} />,
      teaser: 'Professional typesetting, proofreading, custom cover design, and brand-aligned layouts.',
      features: [
        'Professional typesetting, proofreading, and copy-editing',
        'Custom cover design and illustrations',
        'Brand-aligned interior layouts and templates',
        'Manuscript formatting and style guide adherence',
        'Bulk conversion packages for publishers',
      ],
    },
    {
      slug: 'distribution-analytics',
      title: 'Distribution & Analytics',
      icon: <Globe size={32} />,
      teaser: 'Multi-platform distribution on Amazon KDP, Apple Books, Google Play, Kobo with royalty tracking.',
      features: [
        'Distribution on Amazon KDP, Apple Books, Google Play, Kobo',
        'ISBN management and metadata optimization',
        'Catalog listing and SEO for discoverability',
        'Royalty tracking and sales analytics across channels',
        'Ongoing updates, re-releases, and new edition management',
      ],
    },
  ],
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Mic, BookOpen, TrendingUp, Cpu, Server, Activity, ShoppingCart, BarChart3, ArrowRight, Zap, FileText, CheckCircle, Users, Globe, ClipboardList, Handshake, Code, Palette, Rocket, Shield, Target, Search, PenTool, Layers, Settings, HeadphonesIcon, Phone } from 'lucide-react';
import styles from './Services.module.css';
import { whatsappLink } from '../whatsapp';

// ========== DETAILED CONTENT DATA ==========
const detailedContent = {
  // 1. Data Transcription & Data Processing
  'data-transcription': {
    intro: <>We hereby submit the details of our team members who are ready and capable of contributing to the <strong>French, English, Spanish, Philippines</strong> transcription, handwritten data conversion, and data processing project.</>,
    stats: [
      { icon: <Users size={22} />, value: '60+', label: 'Team Members' },
      { icon: <Globe size={22} />, value: '4', label: 'Languages' },
      { icon: <FileText size={22} />, value: '18L+', label: 'Chars / Day' },
    ],
    sections: [
      {
        icon: <CheckCircle size={18} />,
        title: 'Team Overview',
        items: [
          <><strong>Total Contributors:</strong> 60 Members</>,
          <><strong>Language Proficiency:</strong> French, English, Spanish & Philippines — with the ability to understand, transcribe, and process textual data accurately</>,
          <><strong>Experience Level:</strong> Includes individuals with experience in transcription, data entry, and content formatting as per project standards</>,
        ],
      },
      {
        icon: <CheckCircle size={18} />,
        title: 'Transcription & Data Processing Capacity',
        items: [
          <><strong>Minimum Contribution per Member:</strong> 30,000 characters per Head/Day</>,
          <><strong>Estimated Minimum Total Output:</strong> 60 members × 30,000 characters = <span className={styles.highlight}>18,00,000+ characters / Day</span></>,
          <>Higher contributions are possible depending on project requirements and deadlines with quality</>,
        ],
      },
      {
        icon: <ClipboardList size={18} />,
        title: 'Scope of Work',
        items: [
          'Manual data cleaning and formatting',
          'Quality assurance as per predefined guidelines',
          'Submission in required formats (TXT, CSV, XLSX)',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Team Commitment',
        items: [
          <>All 60 members have confirmed availability to begin work <strong>immediately upon assignment</strong></>,
          'Ready to adhere to deadlines, quality standards, and confidentiality agreements',
          'A core coordination team is in place to ensure smooth task allocation, tracking, and delivery',
        ],
      },
    ],
    cta: { text: 'Get Started', msg: 'Data Transcription and Processing' },
  },

  // 2. Web Development
  'web-development': {
    intro: <>We build <strong>high-performance, scalable web platforms</strong> that drive business growth. From corporate portals to complex SaaS platforms, our team delivers pixel-perfect, SEO-optimized solutions built with the latest technologies.</>,
    stats: [
      { icon: <Monitor size={22} />, value: '150+', label: 'Projects Delivered' },
      { icon: <Code size={22} />, value: '99.9%', label: 'Uptime SLA' },
      { icon: <Rocket size={22} />, value: '<2s', label: 'Load Time' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Technology Stack',
        items: [
          <><strong>Frontend:</strong> React, Next.js, Vue.js, Angular — responsive & modern UI/UX</>,
          <><strong>Backend:</strong> Node.js, Python, PHP, .NET — RESTful APIs & microservices</>,
          <><strong>Database:</strong> PostgreSQL, MongoDB, Firebase, MySQL — optimized data layer</>,
        ],
      },
      {
        icon: <Palette size={18} />,
        title: 'Design & UX',
        items: [
          'Custom UI/UX design with Figma prototypes and user flow mapping',
          'Fully responsive design — mobile-first approach across all breakpoints',
          'Dark mode, accessibility (WCAG 2.1), and internationalization support',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Quality & Security',
        items: [
          'SSL encryption, OWASP security best practices, and DDoS protection',
          'Automated CI/CD pipelines with comprehensive testing coverage',
          'Performance optimization — Core Web Vitals compliant',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Delivery Model',
        items: [
          <>Agile development with <strong>weekly sprint demos</strong> and transparent project tracking</>,
          'Dedicated project manager for seamless communication and milestone delivery',
          'Post-launch support, maintenance, and scaling packages available',
        ],
      },
    ],
    cta: { text: 'Start Your Project', msg: 'Web Development services' },
  },

  // 3. App Development
  'app-development': {
    intro: <>We craft <strong>native and cross-platform mobile applications</strong> for iOS and Android that deliver seamless user experiences. From concept to App Store launch, our team handles the complete lifecycle.</>,
    stats: [
      { icon: <Smartphone size={22} />, value: '80+', label: 'Apps Launched' },
      { icon: <Users size={22} />, value: '2M+', label: 'End Users' },
      { icon: <Rocket size={22} />, value: '4.7★', label: 'Avg Rating' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Platform Expertise',
        items: [
          <><strong>Native:</strong> Swift (iOS), Kotlin (Android) — maximum performance & native UX</>,
          <><strong>Cross-Platform:</strong> Flutter, React Native — single codebase, dual deployment</>,
          <><strong>Backend:</strong> Firebase, AWS Amplify, custom Node.js APIs — real-time & scalable</>,
        ],
      },
      {
        icon: <Palette size={18} />,
        title: 'Design & Interaction',
        items: [
          'Material Design 3 and Human Interface Guidelines compliant',
          'Custom animations, gesture handling, and micro-interactions',
          'Offline-first architecture with seamless sync capabilities',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Features & Integration',
        items: [
          'Push notifications, in-app messaging, and analytics integration',
          'Payment gateways (Stripe, Razorpay), social login, and maps',
          'Biometric auth, encrypted storage, and GDPR compliance',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Launch & Support',
        items: [
          <>Complete <strong>App Store & Play Store</strong> submission and optimization (ASO)</>,
          'Beta testing, crash analytics, and staged rollout strategy',
          'Ongoing maintenance, version updates, and feature enhancements',
        ],
      },
    ],
    cta: { text: 'Build Your App', msg: 'App Development services' },
  },

  // 4. AI Tools & Software
  'ai-tools': {
    intro: <>We develop <strong>cutting-edge AI-powered tools and software solutions</strong> that automate complex workflows, enhance decision-making, and unlock new revenue streams through intelligent automation.</>,
    stats: [
      { icon: <Cpu size={22} />, value: '30+', label: 'AI Models Deployed' },
      { icon: <Activity size={22} />, value: '95%+', label: 'Accuracy Rate' },
      { icon: <Rocket size={22} />, value: '10x', label: 'Efficiency Gain' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'AI Capabilities',
        items: [
          <><strong>NLP:</strong> Chatbots, sentiment analysis, text classification, and summarization</>,
          <><strong>Computer Vision:</strong> Image recognition, OCR, object detection, and video analytics</>,
          <><strong>Generative AI:</strong> Custom GPT integrations, content generation, and AI assistants</>,
        ],
      },
      {
        icon: <Settings size={18} />,
        title: 'Custom Software',
        items: [
          'Tailored SaaS products built from scratch for your specific use case',
          'API development and third-party system integrations',
          'Real-time dashboards and predictive analytics engines',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Data & Security',
        items: [
          'End-to-end data pipeline management and model training',
          'On-premise or cloud deployment (AWS, GCP, Azure)',
          'Enterprise-grade security, data encryption, and compliance',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Engagement Model',
        items: [
          <>POC development with <strong>measurable KPIs</strong> before full-scale implementation</>,
          'Dedicated AI/ML engineering team with domain expertise',
          'Continuous model monitoring, retraining, and optimization',
        ],
      },
    ],
    cta: { text: 'Explore AI Solutions', msg: 'AI Tools and Software services' },
  },

  // 5. Custom ERP
  'custom-erp': {
    intro: <>We design and build <strong>custom Enterprise Resource Planning systems</strong> that unify your operations — from inventory and HR to finance and supply chain — in one integrated platform tailored to your workflows.</>,
    stats: [
      { icon: <Server size={22} />, value: '40+', label: 'ERP Deployments' },
      { icon: <Users size={22} />, value: '5000+', label: 'Daily Users' },
      { icon: <Activity size={22} />, value: '60%', label: 'Cost Reduction' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Core Modules',
        items: [
          <><strong>Finance & Accounting:</strong> Invoicing, ledger, tax compliance, and reporting</>,
          <><strong>HR & Payroll:</strong> Employee management, attendance, leave, and payslip generation</>,
          <><strong>Inventory & Supply Chain:</strong> Stock tracking, PO management, and vendor portals</>,
        ],
      },
      {
        icon: <Settings size={18} />,
        title: 'Customization',
        items: [
          'Role-based access control with granular permission management',
          'Custom workflow automation and approval hierarchies',
          'Multi-branch, multi-currency, and multi-language support',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Integration & Security',
        items: [
          'Seamless integration with existing tools (Tally, SAP, QuickBooks)',
          'Cloud-hosted with 99.9% uptime and automated backups',
          'Audit trails, data encryption, and compliance (SOC 2, GDPR)',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Implementation',
        items: [
          <>Phased rollout with <strong>dedicated training</strong> for your team</>,
          'Data migration from legacy systems with zero downtime',
          'Ongoing support, feature updates, and scaling as you grow',
        ],
      },
    ],
    cta: { text: 'Plan Your ERP', msg: 'Custom ERP services' },
  },

  // 6. E-Commerce
  'ecommerce': {
    intro: <>We build <strong>high-converting e-commerce platforms</strong> that scale with your business. From boutique stores to enterprise marketplaces, our solutions drive revenue with frictionless shopping experiences.</>,
    stats: [
      { icon: <ShoppingCart size={22} />, value: '100+', label: 'Stores Built' },
      { icon: <TrendingUp size={22} />, value: '3x', label: 'Avg Revenue Growth' },
      { icon: <Users size={22} />, value: '50K+', label: 'Daily Transactions' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Platform & Tech',
        items: [
          <><strong>Custom Build:</strong> React/Next.js storefronts with headless commerce architecture</>,
          <><strong>Platforms:</strong> Shopify, WooCommerce, Magento — expert customization & migration</>,
          <><strong>Mobile Commerce:</strong> PWA and native app integration for on-the-go shopping</>,
        ],
      },
      {
        icon: <ShoppingCart size={18} />,
        title: 'Commerce Features',
        items: [
          'Advanced product catalog with filters, variants, and dynamic pricing',
          'Multi-gateway payments (Stripe, Razorpay, PayPal, COD)',
          'Real-time inventory sync, order tracking, and automated invoicing',
        ],
      },
      {
        icon: <Target size={18} />,
        title: 'Growth & Conversion',
        items: [
          'SEO-optimized product pages with structured data markup',
          'AI-powered recommendations, upselling, and abandoned cart recovery',
          'Loyalty programs, coupons, referral systems, and wishlist features',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Operations & Support',
        items: [
          <>Shipping integration with <strong>real-time tracking</strong> (Shiprocket, Delhivery, FedEx)</>,
          'Multi-vendor marketplace capability with seller dashboards',
          'Analytics dashboard with sales reports, customer insights, and forecasting',
        ],
      },
    ],
    cta: { text: 'Launch Your Store', msg: 'E-Commerce Development services' },
  },

  // 7. Digital Marketing
  'digital-marketing': {
    intro: <>We deliver <strong>data-driven digital marketing strategies</strong> that amplify your brand presence, drive qualified traffic, and convert leads into loyal customers across all digital channels.</>,
    stats: [
      { icon: <TrendingUp size={22} />, value: '500+', label: 'Campaigns Run' },
      { icon: <Users size={22} />, value: '10M+', label: 'Audience Reached' },
      { icon: <Target size={22} />, value: '5x', label: 'Avg ROI' },
    ],
    sections: [
      {
        icon: <Search size={18} />,
        title: 'SEO & Content',
        items: [
          <><strong>On-Page SEO:</strong> Keyword research, meta optimization, schema markup, and site audits</>,
          <><strong>Content Marketing:</strong> Blog strategy, copywriting, infographics, and video content</>,
          <><strong>Technical SEO:</strong> Core Web Vitals, site speed, crawlability, and indexing fixes</>,
        ],
      },
      {
        icon: <Target size={18} />,
        title: 'Paid Advertising',
        items: [
          'Google Ads (Search, Display, Shopping) with advanced bidding strategies',
          'Meta Ads (Facebook & Instagram) with custom audience targeting',
          'LinkedIn, YouTube, and programmatic advertising campaigns',
        ],
      },
      {
        icon: <PenTool size={18} />,
        title: 'Social Media & Branding',
        items: [
          'Social media management across all major platforms',
          'Brand identity design, content calendars, and community engagement',
          'Influencer marketing and strategic partnership campaigns',
        ],
      },
      {
        icon: <BarChart3 size={18} />,
        title: 'Analytics & Reporting',
        items: [
          <>Monthly performance reports with <strong>actionable insights</strong> and KPI tracking</>,
          'Conversion rate optimization (CRO) and A/B testing',
          'Marketing automation, email campaigns, and lead nurturing workflows',
        ],
      },
    ],
    cta: { text: 'Grow Your Brand', msg: 'Digital Marketing services' },
  },

  // 8. Data Analytics
  'data-analytics': {
    intro: <>We transform raw data into <strong>actionable business intelligence</strong> through advanced analytics, dynamic dashboards, and predictive models that empower smarter, faster decisions.</>,
    stats: [
      { icon: <BarChart3 size={22} />, value: '200+', label: 'Dashboards Built' },
      { icon: <Activity size={22} />, value: '85%', label: 'Forecast Accuracy' },
      { icon: <Rocket size={22} />, value: '40%', label: 'Decision Speed Up' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Analytics Services',
        items: [
          'Custom BI dashboards using Power BI, Tableau, and Metabase',
          'Predictive analytics and machine learning model development',
          'Real-time data streaming and monitoring systems',
        ],
      },
      {
        icon: <Settings size={18} />,
        title: 'Data Engineering',
        items: [
          'ETL pipeline design and data warehouse architecture',
          'Data cleaning, normalization, and quality assurance',
          'Cloud data platforms (BigQuery, Snowflake, Redshift)',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Governance & Compliance',
        items: [
          'Data governance frameworks and security protocols',
          'GDPR, HIPAA, and SOC 2 compliance implementation',
          'Automated alerting, anomaly detection, and audit logging',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Engagement',
        items: [
          <>Discovery workshop to map <strong>key metrics and KPIs</strong></>,
          'Iterative dashboard development with stakeholder feedback loops',
          'Training, documentation, and ongoing optimization support',
        ],
      },
    ],
    cta: { text: 'Unlock Insights', msg: 'Data Analytics services' },
  },

  // 9. Process Automation
  'process-automation': {
    intro: <>We engineer <strong>intelligent automation solutions</strong> that eliminate manual bottlenecks, reduce errors, and accelerate your business processes — from simple workflows to enterprise-scale RPA deployments.</>,
    stats: [
      { icon: <Activity size={22} />, value: '70%', label: 'Time Saved' },
      { icon: <Shield size={22} />, value: '99%', label: 'Error Reduction' },
      { icon: <Rocket size={22} />, value: '200+', label: 'Workflows Automated' },
    ],
    sections: [
      {
        icon: <Settings size={18} />,
        title: 'Automation Scope',
        items: [
          'Robotic Process Automation (RPA) for repetitive tasks',
          'Business process workflow design and orchestration',
          'Document processing, invoice extraction, and form automation',
        ],
      },
      {
        icon: <Layers size={18} />,
        title: 'Integration',
        items: [
          'API-based integrations across CRM, ERP, and SaaS tools',
          'Email, Slack, and notification-based trigger workflows',
          'Cloud-native automation with serverless functions',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Monitoring & Quality',
        items: [
          'Real-time execution monitoring and error handling',
          'Automated testing and validation at every stage',
          'Comprehensive audit trails and compliance reporting',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Delivery',
        items: [
          <>Process audit and <strong>automation readiness assessment</strong></>,
          'Phased rollout with training and knowledge transfer',
          'Continuous improvement and bot management post-launch',
        ],
      },
    ],
    cta: { text: 'Automate Now', msg: 'Process Automation services' },
  },

  // 10. Voice Agent
  'voice-agent': {
    intro: <>We deploy <strong>AI-powered voice agents</strong> that handle customer interactions 24/7 — answering queries, booking appointments, and resolving issues with natural, human-like conversations.</>,
    stats: [
      { icon: <Mic size={22} />, value: '24/7', label: 'Availability' },
      { icon: <Users size={22} />, value: '10K+', label: 'Calls / Day' },
      { icon: <Globe size={22} />, value: '15+', label: 'Languages' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Voice AI Capabilities',
        items: [
          'Natural language understanding with context-aware responses',
          'Multi-language support with accent and dialect recognition',
          'Seamless handoff to human agents for complex scenarios',
        ],
      },
      {
        icon: <Settings size={18} />,
        title: 'Use Cases',
        items: [
          'Customer support automation and FAQ resolution',
          'Appointment scheduling, reminders, and confirmations',
          'Lead qualification, surveys, and feedback collection',
        ],
      },
      {
        icon: <Shield size={18} />,
        title: 'Integration & Security',
        items: [
          'CRM integration (Salesforce, HubSpot, Zoho) for contextual conversations',
          'Telephony integration with SIP, Twilio, and call center platforms',
          'Call recording, transcript storage, and PCI-DSS compliance',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Deployment',
        items: [
          <>Custom voice persona design matching your <strong>brand identity</strong></>,
          'Pilot deployment with real-time analytics and improvement cycles',
          'Scalable infrastructure that grows with your call volume',
        ],
      },
    ],
    cta: { text: 'Deploy Voice AI', msg: 'Voice Agent services' },
  },

  // 11. Voice Process
  'voice-process': {
    intro: <>We provide <strong>professional human-driven voice process services</strong> with skilled agents trained in customer engagement, sales support, and technical helpdesk operations across multiple industries.</>,
    stats: [
      { icon: <Phone size={22} />, value: '50+', label: 'Trained Agents' },
      { icon: <Users size={22} />, value: '98%', label: 'CSAT Score' },
      { icon: <Globe size={22} />, value: '3', label: 'Shifts / Day' },
    ],
    sections: [
      {
        icon: <HeadphonesIcon size={18} />,
        title: 'Service Categories',
        items: [
          <><strong>Inbound:</strong> Customer support, helpdesk, order management, and complaint resolution</>,
          <><strong>Outbound:</strong> Telemarketing, lead generation, surveys, and appointment setting</>,
          <><strong>Blended:</strong> Multi-channel support combining calls, chat, and email</>,
        ],
      },
      {
        icon: <Users size={18} />,
        title: 'Team Quality',
        items: [
          'Rigorous hiring process with communication and accent training',
          'Industry-specific domain training (healthcare, fintech, e-commerce)',
          'Quality monitoring with call audits and performance scorecards',
        ],
      },
      {
        icon: <Settings size={18} />,
        title: 'Infrastructure',
        items: [
          'Cloud-based call center with CRM and ticketing integration',
          'Predictive dialer, IVR, and call routing systems',
          'Real-time dashboard with live call monitoring and analytics',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Engagement',
        items: [
          <>Flexible engagement — <strong>dedicated, shared, or hybrid</strong> team models</>,
          'SLA-driven delivery with guaranteed response and resolution times',
          'Detailed reporting with daily, weekly, and monthly performance reviews',
        ],
      },
    ],
    cta: { text: 'Hire Our Team', msg: 'Voice Process services' },
  },

  // 12. E-Publishing
  'e-publishing': {
    intro: <>We offer <strong>end-to-end digital publishing solutions</strong> — from manuscript formatting and conversion to global distribution across all major platforms, ensuring your content reaches readers worldwide.</>,
    stats: [
      { icon: <BookOpen size={22} />, value: '500+', label: 'Titles Published' },
      { icon: <Globe size={22} />, value: '50+', label: 'Platforms' },
      { icon: <FileText size={22} />, value: '20+', label: 'Formats Supported' },
    ],
    sections: [
      {
        icon: <Layers size={18} />,
        title: 'Publishing Services',
        items: [
          'eBook conversion (EPUB, MOBI, KF8, PDF) with responsive formatting',
          'Print-on-demand setup with cover design and interior layout',
          'Interactive digital content with multimedia and embedded media',
        ],
      },
      {
        icon: <PenTool size={18} />,
        title: 'Content & Design',
        items: [
          'Professional typesetting, proofreading, and copy-editing',
          'Custom cover design, illustrations, and brand-aligned layouts',
          'Accessibility compliance (EPUB 3, WCAG) for inclusive reading',
        ],
      },
      {
        icon: <Globe size={18} />,
        title: 'Distribution',
        items: [
          'Multi-platform distribution (Amazon KDP, Apple Books, Google Play, Kobo)',
          'ISBN management, metadata optimization, and catalog listing',
          'Royalty tracking and sales analytics across all channels',
        ],
      },
      {
        icon: <Handshake size={18} />,
        title: 'Support',
        items: [
          <>Dedicated publishing coordinator for <strong>end-to-end management</strong></>,
          'Bulk conversion packages for publishers and institutions',
          'Ongoing updates, re-releases, and new edition management',
        ],
      },
    ],
    cta: { text: 'Publish Now', msg: 'E-Publishing services' },
  },
};

// ========== SERVICES LIST ==========
const servicesList = [
  { id: '1', key: 'data-transcription', title: "Data Transcription & Data Processing", icon: <FileText size={42} />, bg: "/bg-ai.png" },
  { id: '2', key: 'web-development', title: "Web Development", icon: <Monitor size={42} />, bg: "/bg-web.png" },
  { id: '3', key: 'app-development', title: "App Development", icon: <Smartphone size={42} />, bg: "/bg-web.png" },
  { id: '4', key: 'ai-tools', title: "AI Tools & Software", icon: <Cpu size={42} />, bg: "/bg-ai.png" },
  { id: '5', key: 'custom-erp', title: "Custom ERP", icon: <Server size={42} />, bg: "/bg-erp.png" },
  { id: '6', key: 'data-analytics', title: "Data Analytics", icon: <BarChart3 size={42} />, bg: "/bg-ai.png" },
  { id: '7', key: 'process-automation', title: "Process Automation", icon: <Activity size={42} />, bg: "/bg-erp.png" },
  { id: '8', key: 'voice-agent', title: "Voice Agent", icon: <Mic size={42} />, bg: "/bg-ai.png" },
  { id: '9', key: 'ecommerce', title: "E-Commerce", icon: <ShoppingCart size={42} />, bg: "/bg-web.png" },
  { id: '10', key: 'digital-marketing', title: "Digital Marketing", icon: <TrendingUp size={42} />, bg: "/bg-web.png" },
  { id: '11', key: 'voice-process', title: "Voice Process", icon: <Mic size={42} />, bg: "/bg-ai.png" },
  { id: '12', key: 'e-publishing', title: "E-Publishing", icon: <BookOpen size={42} />, bg: "/bg-web.png" },
];

// ========== DETAILED SECTION RENDERER ==========
function DetailedSection({ content }) {
  return (
    <div className={styles.detailedBody}>
      <p className={styles.detailedIntro}>{content.intro}</p>

      <div className={styles.statsRow}>
        {content.stats.map((stat, i) => (
          <div className={styles.statCard} key={i}>
            <span className={styles.statIcon}>{stat.icon}</span>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.detailedGrid}>
        {content.sections.map((section, i) => (
          <div className={styles.detailCard} key={i}>
            <div className={styles.detailCardHeader}>
              <span className={styles.detailIcon}>{section.icon}</span>
              <h4>{section.title}</h4>
            </div>
            <ul className={styles.detailList}>
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href={whatsappLink(`Hello Exatech IT Solutions, I am interested in your ${content.cta.msg}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.exploreBtn}
      >
        {content.cta.text} <ArrowRight size={18} />
      </a>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      
      {/* CINEMATIC FULL-SCREEN BACKGROUND */}
      <div className={styles.bgViewport}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            className={styles.bgImage}
            style={{ backgroundImage: `url(${servicesList[activeIdx].bg})` }}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 0.8, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={`container ${styles.contentWrapper}`}>
        
        {/* Title Header */}
        <div className={styles.headerBlock}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionBadge}
          >
             <Zap size={14} /> Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Digital <span className="text-gradient">Evolution.</span>
          </motion.h2>
        </div>

        {/* Cinematic Accordion List */}
        <div className={styles.accList}>
          {servicesList.map((service, idx) => {
            const isActive = activeIdx === idx;
            const content = detailedContent[service.key];
            
            return (
              <motion.div 
                key={service.id}
                className={`${styles.accItem} ${isActive ? styles.accItemActive : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitleGroup}>
                    <span className={styles.itemNum}>
                      {service.id.padStart(2, '0')}
                    </span>
                    <h3 className={styles.itemTitle}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className={styles.toggleIcon}>
                    <motion.div 
                      animate={{ rotate: isActive ? 45 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className={styles.cross}
                    >
                      +
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      className={styles.itemBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      {content ? (
                        <DetailedSection content={content} />
                      ) : (
                        <div className={styles.bodyContent}>
                          <div className={styles.bodyText}>
                            <p className={styles.desc}>{service.desc}</p>
                            <a
                              href={whatsappLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.exploreBtn}
                            >
                              Deploy Initiative <ArrowRight size={18} />
                            </a>
                          </div>
                          <div className={styles.bodyVisual}>
                            <div className={styles.iconWrapper}>
                              {service.icon}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

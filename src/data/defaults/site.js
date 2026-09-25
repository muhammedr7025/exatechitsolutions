// Built-in site-wide settings (logo, contact details, footer copy).
// Field names match the `siteSettings` document in Sanity. The four
// footerAddress*/footerPhone*/footerEmail fields keep their original names so
// values already typed into Studio keep working. There is deliberately no
// default whatsappNumber or mapsUrl: both are derived from the phone/address
// unless an editor overrides them, so they can never go stale.
export const siteSettings = {
  siteName: 'Exatech IT Solutions',
  logoAlt: 'Exatech Logo',
  navCtaText: "Let's Talk",

  footerAddressLine1: 'EXATECH 3rd Floor, above Thalam Jewellers, opp. KSRTC Bus Stand',
  footerAddressLine2: 'Venjarammoodu, Nellanad, Kerala, India',
  footerPhoneDisplay: '+91 99950 66663',
  footerEmail: 'mail@exatech.co.in',
  whatsappDefaultMessage: 'Hello Exatech IT Solutions, I am ready to engineer my business to the next level.',
  addressLabel: 'Headquarters',
  phoneLabel: 'Direct Line',
  emailLabel: 'Digital Mail',

  footerCtaTitle: 'Ready to',
  footerCtaHighlight: 'Innovate?',
  footerCtaDescription:
    "Deploy elite IT solutions, scalable software, and intelligent automation built precisely for your enterprise. Let's engineer your digital future.",
  footerCtaButtonText: 'Initiate Project',
  footerBrandDescription:
    'A premium technology collective pioneering web development, AI capabilities, and scalable business automation frameworks.',
  footerContactHeading: 'Command Center',
  footerConnectHeading: 'Communications',
  footerBigText: 'EXATECH',
  footerCopyrightLine2: 'Engineered to Perfection in Kerala, India.',
};

// Fields that fall back together: if an editor has filled in ANY of them, the
// whole set comes from Sanity as-is (so clearing "Address line 2" really
// clears it instead of resurrecting the old default).
export const siteSettingsGroups = [
  ['footerAddressLine1', 'footerAddressLine2', 'footerPhoneDisplay', 'footerEmail'],
  ['footerCtaTitle', 'footerCtaHighlight'],
];

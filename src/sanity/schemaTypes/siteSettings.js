// Site-wide settings. The four footerAddress*/footerPhoneDisplay/footerEmail
// field names are the original ones — kept so values already entered in
// Studio keep working. They now drive the header, footer AND Contact page.
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'Logo & General', default: true },
    { name: 'contact', title: 'Contact Details' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    // ── Logo & general ──
    { name: 'siteName', title: 'Site Name', type: 'string', group: 'general', description: 'Added to every page title, e.g. "About Us | Exatech IT Solutions".' },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
      description:
        'Shown in the header and footer. The site background is dark, so use a PNG/SVG with a transparent background and light lettering. Leave empty to keep the built-in logo.',
    },
    { name: 'logoAlt', title: 'Logo Alt Text', type: 'string', group: 'general', description: 'Read by screen readers. Usually the company name.' },
    {
      name: 'favicon',
      title: 'Browser Tab Icon (favicon)',
      type: 'image',
      group: 'general',
      description: 'Small square image shown in the browser tab. Leave empty to use the logo.',
    },
    { name: 'navCtaText', title: 'Header Button Text', type: 'string', group: 'general', description: 'The button at the right of the header, e.g. "Let\'s Talk".' },

    // ── Contact ──
    { name: 'footerAddressLine1', title: 'Address — line 1', type: 'string', group: 'contact', description: 'Shown in the footer and on the Contact page.' },
    { name: 'footerAddressLine2', title: 'Address — line 2', type: 'string', group: 'contact', description: 'Optional. Town, state, country, PIN…' },
    {
      name: 'footerPhoneDisplay',
      title: 'Phone / Mobile',
      type: 'string',
      group: 'contact',
      description:
        'Shown as typed, e.g. "+91 99950 66663". The call link and the WhatsApp button are built from this number automatically (a 10-digit number is treated as Indian, +91).',
    },
    {
      name: 'footerEmail',
      title: 'Email',
      type: 'string',
      group: 'contact',
      validation: (r) => r.email().warning('This does not look like an email address.'),
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number (optional)',
      type: 'string',
      group: 'contact',
      description:
        'Only fill this in if WhatsApp uses a different number from the phone above. Digits with country code, e.g. 919995066663.',
      validation: (r) =>
        r.custom((v) => !v || /^\+?[\d\s-]{8,16}$/.test(v) || 'Use digits with country code, e.g. 919995066663'),
    },
    { name: 'whatsappDefaultMessage', title: 'WhatsApp Pre-filled Message', type: 'text', rows: 2, group: 'contact', description: 'The message visitors start with when they tap a WhatsApp button.' },
    {
      name: 'mapsUrl',
      title: 'Map Link (optional)',
      type: 'url',
      group: 'contact',
      description: 'Where the address on the Contact page links to. Leave empty to search Google Maps for the address above.',
    },
    { name: 'addressLabel', title: 'Address Label', type: 'string', group: 'contact', description: 'e.g. "Headquarters"' },
    { name: 'phoneLabel', title: 'Phone Label', type: 'string', group: 'contact', description: 'e.g. "Direct Line"' },
    { name: 'emailLabel', title: 'Email Label', type: 'string', group: 'contact', description: 'e.g. "Digital Mail"' },

    // ── Footer ──
    { name: 'footerCtaTitle', title: 'Call-to-action Heading', type: 'string', group: 'footer', description: 'e.g. "Ready to"' },
    { name: 'footerCtaHighlight', title: 'Call-to-action Heading — highlighted part', type: 'string', group: 'footer', description: 'Shown in green after the heading, e.g. "Innovate?"' },
    { name: 'footerCtaDescription', title: 'Call-to-action Text', type: 'text', rows: 3, group: 'footer' },
    { name: 'footerCtaButtonText', title: 'Call-to-action Button Text', type: 'string', group: 'footer' },
    { name: 'footerBrandDescription', title: 'Company Blurb', type: 'text', rows: 3, group: 'footer', description: 'Short description under the logo in the footer.' },
    { name: 'footerContactHeading', title: 'Address Column Heading', type: 'string', group: 'footer' },
    { name: 'footerConnectHeading', title: 'Phone & Email Column Heading', type: 'string', group: 'footer' },
    { name: 'footerBigText', title: 'Large Footer Word', type: 'string', group: 'footer', description: 'The oversized text across the bottom of the footer.' },
    { name: 'footerCopyrightLine2', title: 'Copyright — second line', type: 'string', group: 'footer', description: 'Shown under "© {year} {site name}."' },

    // ── Legacy ──
    // The hero fields moved to the Home Page document. They stay defined (but
    // hidden) so the seed script can carry any value already entered here over.
    { name: 'heroBadgeText', type: 'string', hidden: true },
    { name: 'heroHeadlinePrefix', type: 'string', hidden: true },
    { name: 'heroHeadlineHighlight', type: 'string', hidden: true },
    { name: 'heroSubtitle', type: 'text', hidden: true },
    { name: 'heroCtaText', type: 'string', hidden: true },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
};


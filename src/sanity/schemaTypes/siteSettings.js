export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string' },
    { name: 'heroHeadlinePrefix', title: 'Hero Headline (line 1)', type: 'string' },
    { name: 'heroHeadlineHighlight', title: 'Hero Headline (highlighted line)', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3 },
    { name: 'heroCtaText', title: 'Hero Primary CTA Text', type: 'string' },
    { name: 'footerAddressLine1', title: 'Address Line 1', type: 'string' },
    { name: 'footerAddressLine2', title: 'Address Line 2', type: 'string' },
    { name: 'footerPhoneDisplay', title: 'Phone (display)', type: 'string' },
    { name: 'footerEmail', title: 'Email', type: 'string' },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
};

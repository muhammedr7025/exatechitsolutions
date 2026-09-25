import { ICON_NAMES } from '../../lib/iconMap';
import { restrictedBlock } from './blocks';
import { orderAscOrdering } from './fields';

export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    },
    { name: 'order', title: 'Order', type: 'number', description: 'Controls position in nav and index grid.' },
    { name: 'teaser', title: 'Teaser', type: 'text', rows: 2, description: 'One-line summary shown on cards.' },
    { name: 'navIcon', title: 'Icon', type: 'string', options: { list: ICON_NAMES } },
    { name: 'bgImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
    {
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [restrictedBlock],
      validation: (r) => r.required().min(1),
    },
    { name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'statItem' }] },
    { name: 'sections', title: 'Sections', type: 'array', of: [{ type: 'serviceSection' }] },
    { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
    {
      name: 'ctaWhatsappMessage',
      title: 'CTA WhatsApp Message',
      type: 'text',
      rows: 2,
      description: 'The full message visitors start with when they tap the button.',
    },
    { name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 },
  ],
  orderings: orderAscOrdering,
  preview: {
    select: { title: 'title', subtitle: 'teaser' },
  },
};

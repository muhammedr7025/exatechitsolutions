import { ICON_NAMES } from '../../lib/iconMap';
import { restrictedBlock } from './blocks';

export default {
  name: 'subService',
  title: 'Sub-Service',
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
    {
      name: 'parentService',
      title: 'Parent Service',
      type: 'reference',
      to: [{ type: 'service' }],
      validation: (r) => r.required(),
      description: 'The parent service this sub-service belongs to.',
    },
    { name: 'order', title: 'Order', type: 'number', description: 'Controls position within the parent service.' },
    { name: 'teaser', title: 'Teaser', type: 'text', rows: 2, description: 'One-line summary shown on cards.' },
    { name: 'navIcon', title: 'Icon', type: 'string', options: { list: ICON_NAMES } },
    {
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [restrictedBlock],
      description: 'Introductory paragraph shown at the top of the sub-service page.',
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet-point features or deliverables.',
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      description: 'Rich body content with full formatting.',
    },
    { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
    { name: 'ctaWhatsappMessage', title: 'CTA WhatsApp Message', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 },
  ],
  preview: {
    select: { title: 'title', parentTitle: 'parentService.title' },
    prepare({ title, parentTitle }) {
      return {
        title,
        subtitle: parentTitle ? `↳ ${parentTitle}` : 'No parent',
      };
    },
  },
};

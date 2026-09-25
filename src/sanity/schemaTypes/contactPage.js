import { seoFields, seoGroup, singletonPreview } from './fields';

// Address, phone and email on this page come from Site Settings → Contact Details,
// so they are the same everywhere.
export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [{ name: 'content', title: 'Content', default: true }, seoGroup],
  fields: [
    { name: 'eyebrow', title: 'Small label above heading', type: 'string', group: 'content' },
    { name: 'heading', title: 'Heading', type: 'string', group: 'content', validation: (r) => r.required() },
    {
      name: 'headingHighlight',
      title: 'Heading — highlighted part',
      type: 'string',
      group: 'content',
      description: 'Shown in green right after the heading. Leave empty for a plain heading.',
    },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3, group: 'content' },
    { name: 'whatsappCardTitle', title: 'WhatsApp Card — title', type: 'string', group: 'content' },
    { name: 'whatsappCardText', title: 'WhatsApp Card — text', type: 'string', group: 'content' },
    ...seoFields,
  ],
  preview: singletonPreview('Contact Page'),
};

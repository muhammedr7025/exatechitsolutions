import { orderAscOrdering, orderField } from './fields';

export default {
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    { name: 'name', title: 'Client Name', type: 'string', validation: (r) => r.required() },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Shown on a light tile, so any logo works. A PNG or SVG with a transparent background looks best.',
      validation: (r) => r.required(),
    },
    {
      name: 'url',
      title: 'Website (optional)',
      type: 'url',
      description: 'If set, the logo links to this address.',
      validation: (r) => r.uri({ scheme: ['http', 'https'] }),
    },
    orderField('Lower numbers appear first.'),
  ],
  orderings: orderAscOrdering,
  preview: { select: { title: 'name', media: 'logo' } },
};

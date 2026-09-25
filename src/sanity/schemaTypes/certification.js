import { orderAscOrdering, orderField } from './fields';

export default {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    { name: 'name', title: 'Certification Name', type: 'string', description: 'e.g. "ISO 9001:2015"', validation: (r) => r.required() },
    { name: 'issuer', title: 'Issued By', type: 'string', description: 'e.g. "Bureau Veritas"' },
    {
      name: 'badge',
      title: 'Badge / Logo',
      type: 'image',
      description: 'The certificate badge or logo.',
      validation: (r) => r.required(),
    },
    { name: 'year', title: 'Year (optional)', type: 'string' },
    {
      name: 'credentialUrl',
      title: 'Verification Link (optional)',
      type: 'url',
      description: 'If set, the badge links to this address.',
      validation: (r) => r.uri({ scheme: ['http', 'https'] }),
    },
    orderField('Lower numbers appear first.'),
  ],
  orderings: orderAscOrdering,
  preview: {
    select: { title: 'name', subtitle: 'issuer', media: 'badge' },
  },
};

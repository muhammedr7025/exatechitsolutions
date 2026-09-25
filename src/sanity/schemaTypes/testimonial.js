import { orderAscOrdering, orderField } from './fields';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required().max(500) },
    { name: 'authorName', title: 'Person\'s Name', type: 'string', validation: (r) => r.required() },
    { name: 'authorRole', title: 'Role / Job Title', type: 'string' },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'photo', title: 'Photo (optional)', type: 'image', options: { hotspot: true } },
    {
      name: 'rating',
      title: 'Star Rating (optional)',
      type: 'number',
      description: '1 to 5. Leave empty to show no stars.',
      validation: (r) => r.min(1).max(5).integer(),
    },
    orderField('Lower numbers appear first on the homepage.'),
  ],
  orderings: orderAscOrdering,
  preview: {
    select: { title: 'authorName', subtitle: 'company', media: 'photo' },
  },
};

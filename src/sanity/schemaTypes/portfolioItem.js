export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (r) => r.required().uri({ scheme: ['http', 'https'] }),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'web' },
          { title: 'iOS App', value: 'ios' },
          { title: 'Android App', value: 'android' },
        ],
      },
      validation: (r) => r.required(),
    },
    {
      name: 'screenshot',
      title: 'Screenshot Override',
      type: 'image',
      description: 'Optional. If set, used instead of the live screenshot API.',
    },
    { name: 'order', title: 'Order', type: 'number' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'url' },
  },
};

export default {
  name: 'category',
  title: 'Blog Category',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 60 },
      validation: (r) => r.required(),
    },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
};

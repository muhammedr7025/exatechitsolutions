export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'lead', title: 'Lead Paragraph', type: 'text', rows: 4 },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: {
    prepare() {
      return { title: 'About Page' };
    },
  },
};

import { articleBody } from './blocks';
import { seoFields, seoGroup } from './fields';

export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'details', title: 'Details' },
    seoGroup,
  ],
  fields: [
    { name: 'title', title: 'Title', type: 'string', group: 'content', validation: (r) => r.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      description: 'The last part of the web address. Click "Generate". Changing it later breaks existing links.',
      validation: (r) => r.required(),
    },
    {
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'One or two sentences shown on the blog list and used by search engines.',
      validation: (r) => r.required().max(300),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative text', description: 'Describe the image for screen readers and SEO.' }],
    },
    { name: 'body', title: 'Article', type: 'array', group: 'content', of: articleBody },

    { name: 'publishedAt', title: 'Published Date', type: 'datetime', group: 'details', initialValue: () => new Date().toISOString(), validation: (r) => r.required() },
    { name: 'category', title: 'Category', type: 'reference', group: 'details', to: [{ type: 'category' }] },
    { name: 'author', title: 'Author', type: 'string', group: 'details', initialValue: 'Exatech Team' },

    ...seoFields,
  ],
  orderings: [
    { name: 'publishedDesc', title: 'Newest first', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', date: 'publishedAt', category: 'category.title', media: 'coverImage' },
    prepare({ title, date, category, media }) {
      const when = date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'No date';
      return { title, subtitle: [when, category].filter(Boolean).join(' · '), media };
    },
  },
};

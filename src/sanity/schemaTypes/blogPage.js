import { headerFields, seoFields, seoGroup, singletonPreview } from './fields';

// The /blog listing page heading and labels. Articles are "Blog Post" documents.
export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  groups: [{ name: 'header', title: 'Content', default: true }, seoGroup],
  fields: [
    ...headerFields({ group: 'header' }),
    { name: 'allCategoriesLabel', title: '"All" Filter Label', type: 'string', group: 'header' },
    { name: 'readMoreText', title: 'Card Link Text', type: 'string', group: 'header', description: 'e.g. "Read article"' },
    { name: 'emptyText', title: 'Message When There Are No Posts', type: 'string', group: 'header' },
    { name: 'backToBlogText', title: '"Back to blog" Link', type: 'string', group: 'header' },
    { name: 'relatedTitle', title: '"More articles" Heading', type: 'string', group: 'header' },
    ...seoFields,
  ],
  preview: singletonPreview('Blog Page'),
};

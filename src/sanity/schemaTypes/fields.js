// Small builders shared by the page/document schemas so every page gets the
// same SEO fields and the same "eyebrow / title / highlighted title / subtitle"
// header block.

export const seoGroup = { name: 'seo', title: 'SEO' };

export const seoFields = [
  {
    name: 'seoTitle',
    title: 'SEO Title',
    type: 'string',
    group: 'seo',
    description: 'Browser-tab and search-result title. The site name is added automatically.',
    validation: (r) => r.max(70).warning('Titles over ~60 characters get cut off in search results.'),
  },
  {
    name: 'seoDescription',
    title: 'SEO Description',
    type: 'text',
    rows: 3,
    group: 'seo',
    description: 'Search-result summary. Aim for 120–160 characters.',
    validation: (r) => r.max(200).warning('Descriptions over ~160 characters get cut off in search results.'),
  },
];

// Heading shown as: <eyebrow> / <title> <highlight> / <subtitle>.
// `highlight` renders in the green gradient after the title.
export const headerFields = ({ group = 'header', keys = {} } = {}) => {
  const k = { eyebrow: 'eyebrow', title: 'title', highlight: 'highlight', subtitle: 'subtitle', ...keys };
  return [
    { name: k.eyebrow, title: 'Small label above heading', type: 'string', group },
    { name: k.title, title: 'Heading', type: 'string', group, validation: (r) => r.required() },
    {
      name: k.highlight,
      title: 'Heading — highlighted part',
      type: 'string',
      group,
      description: 'Shown in green right after the heading. Leave empty for a plain heading.',
    },
    { name: k.subtitle, title: 'Subtitle', type: 'text', rows: 3, group },
  ];
};

export const singletonPreview = (title) => ({
  prepare() {
    return { title };
  },
});

export const orderField = (description = 'Lower numbers appear first.') => ({
  name: 'order',
  title: 'Order',
  type: 'number',
  description,
});

export const orderAscOrdering = [
  { name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] },
];

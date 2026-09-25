// Restricted Portable Text config shared by service intro/section copy.
// Plain paragraphs with optional bold and a green "highlight" — matches the
// current site's copy style without giving editors headers/lists/links they
// don't need here.
export const restrictedBlock = {
  type: 'block',
  styles: [{ title: 'Normal', value: 'normal' }],
  marks: {
    decorators: [
      { title: 'Bold', value: 'strong' },
      { title: 'Highlight (green)', value: 'highlight' },
    ],
    annotations: [],
  },
  lists: [],
};

// Full article body for blog posts: headings, quotes, lists, links, images.
export const articleBody = [
  {
    type: 'block',
    styles: [
      { title: 'Paragraph', value: 'normal' },
      { title: 'Heading 2', value: 'h2' },
      { title: 'Heading 3', value: 'h3' },
      { title: 'Heading 4', value: 'h4' },
      { title: 'Quote', value: 'blockquote' },
    ],
    lists: [
      { title: 'Bullet list', value: 'bullet' },
      { title: 'Numbered list', value: 'number' },
    ],
    marks: {
      decorators: [
        { title: 'Bold', value: 'strong' },
        { title: 'Italic', value: 'em' },
        { title: 'Code', value: 'code' },
      ],
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'href',
              type: 'url',
              title: 'URL',
              validation: (r) => r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
            },
          ],
        },
      ],
    },
  },
  {
    type: 'image',
    options: { hotspot: true },
    fields: [
      { name: 'alt', type: 'string', title: 'Alternative text', description: 'Describe the image for screen readers and SEO.' },
      { name: 'caption', type: 'string', title: 'Caption' },
    ],
  },
];

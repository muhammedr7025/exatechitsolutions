import { seoFields, seoGroup, singletonPreview } from './fields';

// `heading`, `lead` and `body` are the original field names and are kept.
export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [{ name: 'content', title: 'Content', default: true }, seoGroup],
  fields: [
    { name: 'eyebrow', title: 'Small label above heading', type: 'string', group: 'content' },
    { name: 'heading', title: 'Heading', type: 'string', group: 'content', validation: (r) => r.required() },
    {
      name: 'headingHighlight',
      title: 'Heading — highlighted part',
      type: 'string',
      group: 'content',
      description: 'Shown in green right after the heading. Leave empty for a plain heading.',
    },
    { name: 'lead', title: 'Lead Paragraph', type: 'text', rows: 5, group: 'content' },
    { name: 'stats', title: 'Stats', type: 'array', group: 'content', of: [{ type: 'statItem' }] },
    { name: 'missionCards', title: 'Mission Cards', type: 'array', group: 'content', of: [{ type: 'iconCard' }], validation: (r) => r.max(4) },
    {
      name: 'body',
      title: 'Extra Content (optional)',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
      description: 'Free-form text shown below the mission cards — your story, team, history…',
    },
    {
      name: 'showWhyUs',
      title: 'Show "Why us" section',
      type: 'boolean',
      group: 'content',
      initialValue: true,
      description: 'The cards come from the Home Page → "Why Us" tab.',
    },
    ...seoFields,
  ],
  preview: singletonPreview('About Page'),
};

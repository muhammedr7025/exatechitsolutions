import { ICON_NAMES } from '../../../lib/iconMap';

// Icon + title + short description. Used for "Why us" items, process steps
// and the About page mission cards.
export default {
  name: 'iconCard',
  title: 'Card',
  type: 'object',
  fields: [
    { name: 'icon', title: 'Icon', type: 'string', options: { list: ICON_NAMES } },
    { name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
};

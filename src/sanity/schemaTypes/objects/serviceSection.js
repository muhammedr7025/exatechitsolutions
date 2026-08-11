import { ICON_NAMES } from '../../../lib/iconMap';
import { restrictedBlock } from '../blocks';

export default {
  name: 'serviceSection',
  title: 'Section',
  type: 'object',
  fields: [
    { name: 'icon', title: 'Icon', type: 'string', options: { list: ICON_NAMES } },
    { name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [restrictedBlock],
      validation: (r) => r.required().min(1),
    },
  ],
  preview: {
    select: { title: 'title' },
  },
};

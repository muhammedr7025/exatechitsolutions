import { ICON_NAMES } from '../../../lib/iconMap';

export default {
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  fields: [
    { name: 'icon', title: 'Icon', type: 'string', options: { list: ICON_NAMES } },
    { name: 'value', title: 'Value', type: 'string', validation: (r) => r.required() },
    { name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() },
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
};

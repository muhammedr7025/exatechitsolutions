// Restricted Portable Text config shared by service intro/section copy.
// Plain paragraphs with optional bold — matches the current site's copy style
// without giving editors headers/lists/links they don't need here.
export const restrictedBlock = {
  type: 'block',
  styles: [{ title: 'Normal', value: 'normal' }],
  marks: {
    decorators: [{ title: 'Bold', value: 'strong' }],
  },
  lists: [],
};

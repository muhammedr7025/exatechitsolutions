import { headerFields, seoFields, seoGroup, singletonPreview } from './fields';

// The /portfolio page heading. The projects themselves are Portfolio Items.
export default {
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  groups: [{ name: 'header', title: 'Content', default: true }, seoGroup],
  fields: [
    ...headerFields({ group: 'header' }),
    { name: 'tabWebLabel', title: 'Websites Tab Label', type: 'string', group: 'header' },
    { name: 'tabIosLabel', title: 'iOS Apps Tab Label', type: 'string', group: 'header' },
    { name: 'tabAndroidLabel', title: 'Android Apps Tab Label', type: 'string', group: 'header' },
    { name: 'cardButtonText', title: 'Card Button Text', type: 'string', group: 'header' },
    ...seoFields,
  ],
  preview: singletonPreview('Portfolio Page'),
};

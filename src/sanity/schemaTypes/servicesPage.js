import { headerFields, seoFields, seoGroup, singletonPreview } from './fields';

// The /services page heading plus the labels used on every service and
// sub-service detail page. The services themselves are separate documents.
export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'header', title: 'Services Page', default: true },
    { name: 'detail', title: 'Detail-page Labels' },
    seoGroup,
  ],
  fields: [
    ...headerFields({ group: 'header' }),
    { name: 'cardLinkText', title: 'Card Link Text', type: 'string', group: 'header', description: 'e.g. "Explore"' },
    ...seoFields,

    { name: 'backToServicesText', title: '"Back to all services" Link', type: 'string', group: 'detail' },
    { name: 'subServicesBadge', title: 'Sub-services — small label', type: 'string', group: 'detail' },
    { name: 'subServicesTitle', title: 'Sub-services — heading', type: 'string', group: 'detail' },
    { name: 'subServicesHighlight', title: 'Sub-services — highlighted part', type: 'string', group: 'detail' },
    { name: 'subServicesDescription', title: 'Sub-services — description', type: 'string', group: 'detail', description: 'Type {service} to insert the service name.' },
    { name: 'learnMoreText', title: 'Sub-service Card Link', type: 'string', group: 'detail' },
    { name: 'relatedTitle', title: '"Other services" Heading', type: 'string', group: 'detail' },
    { name: 'deliverablesBadge', title: 'Deliverables — small label', type: 'string', group: 'detail' },
    { name: 'deliverablesTitle', title: 'Deliverables — heading', type: 'string', group: 'detail' },
    { name: 'deliverablesHighlight', title: 'Deliverables — highlighted part', type: 'string', group: 'detail' },
    { name: 'subServiceCtaText', title: 'Sub-service Button Text', type: 'string', group: 'detail', description: 'Type {title} to insert the sub-service name.' },
    { name: 'siblingsTitle', title: '"More in …" Heading', type: 'string', group: 'detail', description: 'The service name is added after this text, e.g. "More in".' },
    { name: 'backToServiceText', title: '"Back to service" Link', type: 'string', group: 'detail', description: 'Type {service} to insert the service name.' },
  ],
  preview: singletonPreview('Services Page'),
};

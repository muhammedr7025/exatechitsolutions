import { singletonTypes } from './schemaTypes';

// Custom Studio nav. Pages and site settings are pinned single documents (no
// list, no "create new") so editors can't end up with duplicates; collections
// are grouped by what they power on the site.
const singleton = (S, type, title) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type).title(title));

const ordered = (S, type, title) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.documentTypeList(type).title(title).defaultOrdering([{ field: 'order', direction: 'asc' }]));

const newestFirst = (S, type, title) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.documentTypeList(type).title(title).defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]));

const listed = [
  ...singletonTypes,
  'service',
  'subService',
  'portfolioItem',
  'post',
  'category',
  'testimonial',
  'clientLogo',
  'certification',
];

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      singleton(S, 'siteSettings', 'Site Settings — logo, address, phone'),
      S.divider(),
      S.listItem()
        .title('Pages')
        .id('pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              singleton(S, 'homePage', 'Home'),
              singleton(S, 'aboutPage', 'About'),
              singleton(S, 'servicesPage', 'Services (page heading & labels)'),
              singleton(S, 'portfolioPage', 'Portfolio (page heading & labels)'),
              singleton(S, 'blogPage', 'Blog (page heading & labels)'),
              singleton(S, 'contactPage', 'Contact'),
            ])
        ),
      S.divider(),
      ordered(S, 'service', 'Services'),
      ordered(S, 'subService', 'Sub-Services'),
      ordered(S, 'portfolioItem', 'Portfolio Projects'),
      S.divider(),
      newestFirst(S, 'post', 'Blog Posts'),
      S.documentTypeListItem('category').title('Blog Categories'),
      S.divider(),
      ordered(S, 'testimonial', 'Testimonials'),
      ordered(S, 'clientLogo', 'Client Logos'),
      ordered(S, 'certification', 'Certifications'),
      ...S.documentTypeListItems().filter((item) => !listed.includes(item.getId())),
    ]);

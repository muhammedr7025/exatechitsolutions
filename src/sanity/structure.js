// Custom Studio nav: singletons (siteSettings, aboutPage) get a single pinned
// entry instead of a list, so editors can't accidentally create duplicates.
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings', 'aboutPage'].includes(item.getId())
      ),
    ]);

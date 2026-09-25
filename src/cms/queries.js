// All GROQ queries the site runs. Singleton pages are read by their fixed _id
// (which equals their type name, see src/sanity/schemaTypes/index.js), so a
// stray duplicate can never be picked up by accident.

const SORT = 'order(coalesce(order, 9999) asc, _createdAt asc)';

const SERVICE_CARD = `{ title, "slug": slug.current, order, teaser, navIcon, bgImage }`;
const SUB_SERVICE_CARD = `{ title, "slug": slug.current, teaser, navIcon }`;
const PROJECT = `{ name, url, category, screenshot }`;
const POST_CARD = `{
  title, "slug": slug.current, excerpt, coverImage, publishedAt, author,
  "category": category->{ title, "slug": slug.current },
  "chars": length(pt::text(body))
}`;

// Site-wide: header/footer/contact settings + the service list (nav, index, homepage).
export const SITE_QUERY = `{
  "settings": *[_id == "siteSettings"][0],
  "services": *[_type == "service" && defined(slug.current)] | ${SORT} ${SERVICE_CARD}
}`;

// Any singleton page: *[_id == $id][0]
export const PAGE_QUERY = `*[_id == $id][0]`;

export const HOME_QUERY = `{
  "page": *[_id == "homePage"][0]{
    ...,
    "featuredServices": featuredServices[]->${SERVICE_CARD},
    "featuredProjects": featuredProjects[]->${PROJECT}
  },
  "projects": *[_type == "portfolioItem" && category == "web"] | ${SORT} [0...6] ${PROJECT},
  "clients": *[_type == "clientLogo" && defined(logo.asset)] | ${SORT} { name, logo, url },
  "testimonials": *[_type == "testimonial"] | ${SORT} { quote, authorName, authorRole, company, photo, rating },
  "certifications": *[_type == "certification" && defined(badge.asset)] | ${SORT} { name, issuer, badge, year, credentialUrl }
}`;

export const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  title, "slug": slug.current, teaser, navIcon, bgImage, intro, stats, sections,
  ctaText, ctaWhatsappMessage, seoDescription,
  "subServices": *[_type == "subService" && parentService._ref == ^._id] | ${SORT} ${SUB_SERVICE_CARD}
}`;

export const SUB_SERVICE_QUERY = `*[_type == "subService" && slug.current == $subSlug && parentService->slug.current == $slug][0]{
  title, "slug": slug.current, teaser, navIcon, intro, features, body,
  ctaText, ctaWhatsappMessage, seoDescription,
  "parent": parentService->{ title, "slug": slug.current, bgImage },
  "siblings": *[_type == "subService" && parentService._ref == ^.parentService._ref && slug.current != $subSlug] | ${SORT} ${SUB_SERVICE_CARD}
}`;

export const PORTFOLIO_QUERY = `*[_type == "portfolioItem"] | ${SORT} ${PROJECT}`;

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) [0...100] ${POST_CARD}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title, "slug": slug.current, excerpt, coverImage, publishedAt, author, body,
  seoTitle, seoDescription,
  "category": category->{ title, "slug": slug.current },
  "related": *[_type == "post" && defined(slug.current) && slug.current != $slug]
    | order(publishedAt desc, _createdAt desc) [0...3] ${POST_CARD}
}`;

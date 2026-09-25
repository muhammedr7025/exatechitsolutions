// Normalizers: turn a Sanity document OR the built-in default (same shape,
// with `bg` instead of `bgImage` and markup strings instead of blocks) into the
// view model the components render.
import { imageUrl } from './image';
import { toBlocks } from './richText';
import { services as defaultServices } from '../data/defaults/services';
import { subServices as defaultSubServices } from '../data/defaults/subServices';

export const DEFAULT_LOGO = '/logo.png';
const DEFAULT_SERVICE_BG = '/bg-web.png';

export const defaultServiceBySlug = Object.fromEntries(defaultServices.map((s) => [s.slug, s]));

export function serviceCard(raw) {
  return {
    slug: raw.slug,
    title: raw.title,
    order: raw.order,
    teaser: raw.teaser ?? '',
    icon: raw.navIcon || 'Sparkles',
    bgUrl: imageUrl(raw.bgImage, 1600) || raw.bg || defaultServiceBySlug[raw.slug]?.bg || DEFAULT_SERVICE_BG,
  };
}

export const defaultServiceCards = defaultServices.map(serviceCard);

export function subServiceCard(raw) {
  return {
    slug: raw.slug,
    title: raw.title,
    teaser: raw.teaser ?? '',
    icon: raw.navIcon || 'Sparkles',
  };
}

export const defaultSubServiceCards = (parentSlug) =>
  defaultSubServices.filter((s) => s.parentSlug === parentSlug).map(subServiceCard);

export function serviceDetail(raw, subServices) {
  return {
    ...serviceCard(raw),
    intro: toBlocks(raw.intro, 'intro'),
    stats: (raw.stats ?? []).map((s) => ({ icon: s.icon, value: s.value, label: s.label })),
    sections: (raw.sections ?? []).map((sec) => ({
      icon: sec.icon,
      title: sec.title,
      items: toBlocks(sec.items, 'item'),
    })),
    ctaText: raw.ctaText,
    ctaMessage: raw.ctaWhatsappMessage,
    seoDescription: raw.seoDescription,
    subServices,
  };
}

export function subServiceDetail(raw, parent, siblings) {
  return {
    ...subServiceCard(raw),
    intro: toBlocks(raw.intro, 'intro'),
    features: (raw.features ?? []).filter(Boolean),
    body: raw.body ?? [],
    ctaText: raw.ctaText,
    ctaMessage: raw.ctaWhatsappMessage,
    seoDescription: raw.seoDescription,
    parent: serviceCard(parent),
    siblings,
  };
}

export const project = (raw) => ({
  name: raw.name,
  url: raw.url,
  category: raw.category,
  screenshotUrl: imageUrl(raw.screenshot, 1200),
});

export const client = (raw) => ({ name: raw.name, logoUrl: imageUrl(raw.logo, 400), url: raw.url });

export const testimonial = (raw) => ({
  quote: raw.quote,
  authorName: raw.authorName,
  authorRole: raw.authorRole,
  company: raw.company,
  photoUrl: imageUrl(raw.photo, 160),
  rating: raw.rating,
});

export const certification = (raw) => ({
  name: raw.name,
  issuer: raw.issuer,
  badgeUrl: imageUrl(raw.badge, 400),
  year: raw.year,
  credentialUrl: raw.credentialUrl,
});

export const postCard = (raw) => ({
  slug: raw.slug,
  title: raw.title,
  excerpt: raw.excerpt,
  author: raw.author,
  publishedAt: raw.publishedAt,
  category: raw.category,
  coverUrl: imageUrl(raw.coverImage, 1200),
  coverAlt: raw.coverImage?.alt || raw.title,
  readingMinutes: readingMinutes(raw.chars),
});

// ~5 characters per word, ~200 words per minute
export function readingMinutes(chars) {
  return chars ? Math.max(1, Math.round(chars / 1000)) : undefined;
}

export const portableTextChars = (blocks) =>
  (blocks ?? []).reduce(
    (total, b) => total + (b._type === 'block' ? (b.children ?? []).reduce((n, c) => n + (c.text?.length ?? 0), 0) : 0),
    0
  );

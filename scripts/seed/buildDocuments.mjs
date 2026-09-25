// Turns the built-in content (src/data/defaults) into Sanity documents.
// Pure: no network, no filesystem writes — scripts/seed-sanity.mjs does the I/O.
//
// Rule: seeding must never change what the site shows or overwrite an editor's
// work. It only creates what is missing, and fills fields that are blank using
// the same fallback rules the site uses (src/cms/resolve.js).
import { services } from '../../src/data/defaults/services.js';
import { subServices } from '../../src/data/defaults/subServices.js';
import { portfolioItems, FEATURED_PROJECT_COUNT } from '../../src/data/defaults/portfolio.js';
import { siteSettings, siteSettingsGroups } from '../../src/data/defaults/site.js';
import * as pages from '../../src/data/defaults/pages.js';
import { toBlocks } from '../../src/cms/richText.js';
import { resolve, isBlank } from '../../src/cms/resolve.js';

export const SINGLETON_IDS = ['siteSettings', 'homePage', 'aboutPage', 'servicesPage', 'portfolioPage', 'blogPage', 'contactPage'];
export const LOGO_FILE = 'public/logo.png';
const LEGACY_HERO_FIELDS = ['heroBadgeText', 'heroHeadlinePrefix', 'heroHeadlineHighlight', 'heroSubtitle', 'heroCtaText'];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const keyed = (items, type, prefix) => items.map((item, i) => ({ _key: `${prefix}${i}`, _type: type, ...item }));
const ref = (id, key) => ({ _type: 'reference', _ref: id, ...(key ? { _key: key } : {}) });
const image = (assetId) => ({ _type: 'image', asset: { _type: 'reference', _ref: assetId } });

export const ids = {
  service: (slug) => `service-${slug}`,
  subService: (parentSlug, slug) => `subService-${parentSlug}-${slug}`,
  portfolio: (item) => `portfolioItem-${item.category}-${slugify(item.name)}`,
};

/** Which image files would need uploading, given what already exists. */
export function assetsNeeded(existing) {
  const have = new Set(existing.services.map((s) => s.slug));
  const bg = [...new Set(services.filter((s) => !have.has(s.slug)).map((s) => s.bg))];
  const logo = isBlank(existing.singletons.siteSettings?.logo);
  return { logo, bg };
}

/**
 * @param existing  { singletons: {id: doc}, services: [{_id, slug}], subServices: [{_id, slug, parentSlug}], portfolio: [{_id, url}] }
 * @param assets    { logo?: assetId, bg: { '/bg-ai.png': assetId } }
 * @returns { create: doc[], patch: {id, set}[], skipped: string[] }  (create is ordered so references resolve)
 */
export function buildDocuments(existing, assets = { bg: {} }) {
  const create = { services: [], portfolio: [], subServices: [], singletons: [] };
  const patch = [];
  const skipped = [];

  // ── Services ──
  const serviceId = {};
  existing.services.forEach((s) => (serviceId[s.slug] = s._id));
  for (const s of services) {
    if (serviceId[s.slug]) {
      skipped.push(`service "${s.slug}" (already in Sanity)`);
      continue;
    }
    const _id = ids.service(s.slug);
    serviceId[s.slug] = _id;
    create.services.push({
      _id,
      _type: 'service',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      order: s.order,
      teaser: s.teaser,
      navIcon: s.navIcon,
      ...(assets.bg[s.bg] ? { bgImage: image(assets.bg[s.bg]) } : {}),
      intro: toBlocks(s.intro, 'intro'),
      stats: keyed(s.stats, 'statItem', 'stat'),
      sections: s.sections.map((sec, i) => ({
        _key: `sec${i}`,
        _type: 'serviceSection',
        icon: sec.icon,
        title: sec.title,
        items: toBlocks(sec.items, 'it'),
      })),
      ctaText: s.ctaText,
      ctaWhatsappMessage: s.ctaWhatsappMessage,
      seoDescription: `${s.title} services by Exatech IT Solutions. ${s.teaser}`,
    });
  }

  // ── Sub-services ──
  const haveSub = new Set(existing.subServices.map((s) => `${s.parentSlug}/${s.slug}`));
  for (const s of subServices) {
    if (haveSub.has(`${s.parentSlug}/${s.slug}`)) {
      skipped.push(`sub-service "${s.parentSlug}/${s.slug}" (already in Sanity)`);
      continue;
    }
    create.subServices.push({
      _id: ids.subService(s.parentSlug, s.slug),
      _type: 'subService',
      title: s.title,
      slug: { _type: 'slug', current: s.slug },
      parentService: ref(serviceId[s.parentSlug]),
      order: s.order,
      teaser: s.teaser,
      navIcon: s.navIcon,
      features: s.features,
      seoDescription: `${s.title}: ${s.teaser}`,
    });
  }

  // ── Portfolio ──
  const portfolioId = {};
  existing.portfolio.forEach((p) => (portfolioId[p.url] = p._id));
  for (const item of portfolioItems) {
    if (portfolioId[item.url]) {
      skipped.push(`project "${item.name}" (already in Sanity)`);
      continue;
    }
    const _id = ids.portfolio(item);
    portfolioId[item.url] = _id;
    create.portfolio.push({ _id, _type: 'portfolioItem', name: item.name, url: item.url, category: item.category, order: item.order });
  }

  // ── Singleton pages ──
  const sing = existing.singletons;

  // Values typed into the old Site Settings hero fields carry over to the Home Page.
  const legacyHero = Object.fromEntries(
    LEGACY_HERO_FIELDS.map((k) => [k, sing.siteSettings?.[k]]).filter(([, v]) => !isBlank(v))
  );

  const { featuredServiceSlugs, ...homeRest } = pages.homePage;
  const featuredProjects = portfolioItems.filter((p) => p.category === 'web').slice(0, FEATURED_PROJECT_COUNT);
  const homeContent = {
    ...homeRest,
    ...legacyHero,
    stats: keyed(pages.homePage.stats, 'statItem', 'stat'),
    whyUsItems: keyed(pages.homePage.whyUsItems, 'iconCard', 'why'),
    processSteps: keyed(pages.homePage.processSteps, 'iconCard', 'step'),
    featuredServices: featuredServiceSlugs.filter((s) => serviceId[s]).map((s, i) => ref(serviceId[s], `fs${i}`)),
    featuredProjects: featuredProjects.map((p, i) => ref(portfolioId[p.url], `fp${i}`)),
  };

  const aboutContent = {
    ...pages.aboutPage,
    stats: keyed(pages.aboutPage.stats, 'statItem', 'stat'),
    missionCards: keyed(pages.aboutPage.missionCards, 'iconCard', 'mc'),
  };

  const singletonSpecs = [
    ['siteSettings', siteSettings, siteSettingsGroups, assets.logo && !isBlank(assets.logo) ? { logo: image(assets.logo) } : {}],
    ['homePage', homeContent, pages.homePageGroups, {}],
    ['aboutPage', aboutContent, pages.aboutPageGroups, {}],
    ['servicesPage', pages.servicesPage, pages.servicesPageGroups, {}],
    ['portfolioPage', pages.portfolioPage, pages.portfolioPageGroups, {}],
    ['blogPage', pages.blogPage, pages.blogPageGroups, {}],
    ['contactPage', pages.contactPage, pages.contactPageGroups, {}],
  ];

  for (const [id, content, groups, extras] of singletonSpecs) {
    const current = sing[id];
    if (!current) {
      create.singletons.push({ _id: id, _type: id, ...content, ...extras });
      continue;
    }
    // Existing document: add only what is blank, using the site's own fallback
    // rules — so an intentionally empty field (e.g. address line 2) stays empty.
    const resolved = { ...resolve(current, content, groups), ...extras };
    const set = Object.fromEntries(
      Object.entries(resolved).filter(([k, v]) => isBlank(current[k]) && !isBlank(v))
    );
    if (Object.keys(set).length) patch.push({ id, set });
    else skipped.push(`${id} (nothing missing)`);
  }

  return {
    create: [...create.services, ...create.portfolio, ...create.subServices, ...create.singletons],
    patch,
    skipped,
  };
}

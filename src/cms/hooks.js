import { useMemo } from 'react';
import { useCms, pickSource } from './store';
import { useSite } from './SiteContext';
import { resolve } from './resolve';
import {
  PAGE_QUERY, HOME_QUERY, SERVICE_QUERY, SUB_SERVICE_QUERY, PORTFOLIO_QUERY, POSTS_QUERY, POST_QUERY,
} from './queries';
import * as view from './view';
import {
  homePage as homeDefaults, homePageGroups,
  aboutPage as aboutDefaults, aboutPageGroups,
  servicesPage as servicesPageDefaults, servicesPageGroups,
  portfolioPage as portfolioPageDefaults, portfolioPageGroups,
  contactPage as contactDefaults, contactPageGroups,
  blogPage as blogPageDefaults, blogPageGroups,
} from '../data/defaults/pages';
import { services as defaultServices } from '../data/defaults/services';
import { subServices as defaultSubServices } from '../data/defaults/subServices';
import { portfolioItems as defaultProjects, FEATURED_PROJECT_COUNT } from '../data/defaults/portfolio';

const isPending = (status) => status === 'idle' || status === 'loading';

// ── Singleton pages ────────────────────────────────────────────────────────
function usePageDoc(id, defaults, groups) {
  const { data } = useCms(PAGE_QUERY, { id });
  return useMemo(() => resolve(data, defaults, groups), [data, defaults, groups]);
}

export const useAboutPage = () => usePageDoc('aboutPage', aboutDefaults, aboutPageGroups);
export const useServicesPage = () => usePageDoc('servicesPage', servicesPageDefaults, servicesPageGroups);
export const usePortfolioPage = () => usePageDoc('portfolioPage', portfolioPageDefaults, portfolioPageGroups);
export const useContactPage = () => usePageDoc('contactPage', contactDefaults, contactPageGroups);
export const useBlogPage = () => usePageDoc('blogPage', blogPageDefaults, blogPageGroups);
// The About page reuses the homepage "Why us" cards.
export const useHomeDoc = () => usePageDoc('homePage', homeDefaults, homePageGroups);

// ── Homepage ───────────────────────────────────────────────────────────────
export function useHomePage() {
  const { data } = useCms(HOME_QUERY);
  const { services: allServices } = useSite();

  return useMemo(() => {
    const page = resolve(data?.page, homeDefaults, homePageGroups);

    const picked = (data?.page?.featuredServices ?? []).filter(Boolean).map(view.serviceCard);
    const bySlug = page.featuredServiceSlugs
      .map((slug) => allServices.find((s) => s.slug === slug))
      .filter(Boolean);
    const services = picked.length ? picked : bySlug.length ? bySlug : allServices.slice(0, 5);

    const pickedProjects = (data?.page?.featuredProjects ?? []).filter(Boolean);
    const cmsProjects = data?.projects ?? [];
    const projects = (
      pickedProjects.length
        ? pickedProjects
        : cmsProjects.length
          ? cmsProjects
          : defaultProjects.filter((p) => p.category === 'web')
    )
      .slice(0, pickedProjects.length ? undefined : FEATURED_PROJECT_COUNT)
      .map(view.project);

    return {
      page,
      services,
      projects,
      clients: (data?.clients ?? []).map(view.client).filter((c) => c.logoUrl),
      testimonials: (data?.testimonials ?? []).map(view.testimonial),
      certifications: (data?.certifications ?? []).map(view.certification).filter((c) => c.badgeUrl),
    };
  }, [data, allServices]);
}

// ── Services ───────────────────────────────────────────────────────────────
export function useServiceDetail(slug) {
  const { servicesFromCms } = useSite();
  const { data, status } = useCms(SERVICE_QUERY, { slug });

  return useMemo(() => {
    const fallback = defaultServices.find((s) => s.slug === slug);
    const raw = pickSource({ cms: data, status, fallback, authoritative: servicesFromCms });
    if (!raw) return { service: null, loading: isPending(status), notFound: !isPending(status) };

    const subs = raw === data
      ? (data.subServices ?? []).map(view.subServiceCard)
      : view.defaultSubServiceCards(slug);
    return { service: view.serviceDetail(raw, subs), loading: false, notFound: false };
  }, [data, status, slug, servicesFromCms]);
}

export function useSubServiceDetail(slug, subSlug) {
  const { servicesFromCms } = useSite();
  const { data, status } = useCms(SUB_SERVICE_QUERY, { slug, subSlug });

  return useMemo(() => {
    const fallbackSub = defaultSubServices.find((s) => s.parentSlug === slug && s.slug === subSlug);
    const fallbackParent = defaultServices.find((s) => s.slug === slug);
    const fallback = fallbackSub && fallbackParent ? { sub: fallbackSub, parent: fallbackParent } : null;
    const cms = data ? { sub: data, parent: data.parent } : null;

    const raw = pickSource({ cms, status, fallback, authoritative: servicesFromCms });
    if (!raw?.parent) return { subService: null, loading: isPending(status), notFound: !isPending(status) };

    const siblings = raw === cms
      ? (data.siblings ?? []).map(view.subServiceCard)
      : view.defaultSubServiceCards(slug).filter((s) => s.slug !== subSlug);
    return { subService: view.subServiceDetail(raw.sub, raw.parent, siblings), loading: false, notFound: false };
  }, [data, status, slug, subSlug, servicesFromCms]);
}

// ── Portfolio ──────────────────────────────────────────────────────────────
export function usePortfolio() {
  const { data } = useCms(PORTFOLIO_QUERY);
  return useMemo(() => {
    const items = (data?.length ? data : defaultProjects).map(view.project);
    return {
      web: items.filter((p) => p.category === 'web'),
      ios: items.filter((p) => p.category === 'ios'),
      android: items.filter((p) => p.category === 'android'),
    };
  }, [data]);
}

// ── Blog ───────────────────────────────────────────────────────────────────
export function usePosts() {
  const { data, status } = useCms(POSTS_QUERY);
  const posts = useMemo(() => (data ?? []).map(view.postCard), [data]);
  return { posts, loading: data === undefined && isPending(status) };
}

export function usePost(slug) {
  const { data, status } = useCms(POST_QUERY, { slug });
  return useMemo(() => {
    if (!data) return { post: null, loading: isPending(status), notFound: !isPending(status) };
    return {
      post: {
        ...view.postCard({ ...data, chars: view.portableTextChars(data.body) }),
        body: data.body ?? [],
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        related: (data.related ?? []).map(view.postCard),
      },
      loading: false,
      notFound: false,
    };
  }, [data, status]);
}

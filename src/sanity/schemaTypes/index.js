import statItem from './objects/statItem';
import serviceSection from './objects/serviceSection';
import iconCard from './objects/iconCard';
import service from './service';
import subService from './subService';
import portfolioItem from './portfolioItem';
import post from './post';
import category from './category';
import testimonial from './testimonial';
import clientLogo from './clientLogo';
import certification from './certification';
import siteSettings from './siteSettings';
import homePage from './homePage';
import aboutPage from './aboutPage';
import servicesPage from './servicesPage';
import portfolioPage from './portfolioPage';
import blogPage from './blogPage';
import contactPage from './contactPage';

export const schemaTypes = [
  // objects
  statItem,
  serviceSection,
  iconCard,
  // one-off pages
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  portfolioPage,
  blogPage,
  contactPage,
  // collections
  service,
  subService,
  portfolioItem,
  post,
  category,
  testimonial,
  clientLogo,
  certification,
];

// Documents that exist exactly once. Their _id equals their type name, and the
// site reads them by that id. Used by structure.js and sanity.config.js.
export const singletonTypes = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'servicesPage',
  'portfolioPage',
  'blogPage',
  'contactPage',
];

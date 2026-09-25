import { resolve, isBlank } from './resolve';
import { imageUrl } from './image';
import { normalizePhone, telHref, whatsappHref, mapsHref } from './contact';
import { serviceCard, defaultServiceCards, DEFAULT_LOGO } from './view';
import { siteSettings as siteDefaults, siteSettingsGroups } from '../data/defaults/site';

// Everything shared across pages, built from the site-wide Sanity query.
// Called with no data it returns the built-in defaults (first paint / offline).
export function buildSite({ settings, services } = {}) {
  const s = resolve(settings, siteDefaults, siteSettingsGroups);

  const addressLines = [s.footerAddressLine1, s.footerAddressLine2].filter((l) => !isBlank(l)).map((l) => l.trim());
  const addressText = addressLines.join(', ');

  const phoneDigits = normalizePhone(s.footerPhoneDisplay);
  // WhatsApp: explicit override, else the phone above, else the built-in number.
  const whatsappDigits = normalizePhone(s.whatsappNumber) || phoneDigits || normalizePhone(siteDefaults.footerPhoneDisplay);

  const cmsServices = (services ?? []).filter(Boolean).map(serviceCard);
  const servicesFromCms = cmsServices.length > 0;

  const logoUrl = imageUrl(s.logo, 600) || DEFAULT_LOGO;

  return {
    settings: s,
    siteName: s.siteName,
    logoUrl,
    logoAlt: s.logoAlt,
    faviconUrl: imageUrl(s.favicon, 128) || (s.logo ? imageUrl(s.logo, 128) : undefined),
    contact: {
      addressLines,
      addressText,
      phoneDisplay: s.footerPhoneDisplay,
      phoneHref: telHref(phoneDigits),
      email: s.footerEmail,
      mapsHref: mapsHref(s.mapsUrl, addressText),
    },
    whatsapp: (message) => whatsappHref(whatsappDigits, message ?? s.whatsappDefaultMessage),
    services: servicesFromCms ? cmsServices : defaultServiceCards,
    servicesFromCms,
  };
}

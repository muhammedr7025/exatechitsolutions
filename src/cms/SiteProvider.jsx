import { useEffect, useMemo } from 'react';
import { useCms } from './store';
import { SITE_QUERY } from './queries';
import { buildSite } from './site';
import { SiteContext } from './SiteContext';

function setFavicon(href) {
  let link = document.querySelector('link[rel~="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.removeAttribute('type'); // the editor's file may not be a PNG
  link.href = href;
}

export default function SiteProvider({ children }) {
  const { data } = useCms(SITE_QUERY);
  const site = useMemo(() => buildSite(data), [data]);

  useEffect(() => {
    if (site.faviconUrl) setFavicon(site.faviconUrl);
  }, [site.faviconUrl]);

  return <SiteContext value={site}>{children}</SiteContext>;
}

import { useEffect } from 'react';
import { useSite } from '../cms/SiteContext';

export function usePageMeta(title, description) {
  const { siteName } = useSite();

  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description, siteName]);
}

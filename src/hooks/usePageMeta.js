import { useEffect } from 'react';

export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Exatech IT Solutions` : 'Exatech IT Solutions';
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump (not glide) to the top when the page changes. `html` has
// scroll-behavior: smooth for in-page anchors, so a plain scrollTo(0, 0) would
// visibly scroll the *new* page up from wherever the old one was.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

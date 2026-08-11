import { lazy, Suspense } from 'react';

// Lazy-loaded so the Sanity Studio's dependency tree never ships to
// marketing-page visitors — only fetched when someone actually visits /studio.
const Studio = lazy(() => import('./Studio'));

export default function StudioLazy() {
  return (
    <Suspense fallback={null}>
      <Studio />
    </Suspense>
  );
}

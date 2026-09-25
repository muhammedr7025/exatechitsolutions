import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from '../sanity/env';

const builder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

// Sanity image field -> CDN url (resized, auto WebP/AVIF). Returns undefined for
// an empty field so callers can `||` a fallback.
export function imageUrl(source, width) {
  if (!source?.asset || !builder) return undefined;
  let img = builder.image(source).auto('format');
  if (width) img = img.width(width);
  return img.url();
}

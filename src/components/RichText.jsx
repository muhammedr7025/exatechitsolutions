import { PortableText } from '@portabletext/react';
import { toBlocks } from '../cms/richText';
import { imageUrl } from '../cms/image';
import styles from './RichText.module.css';

// ── Inline copy ─────────────────────────────────────────────────────────────
// One line/paragraph of short copy (bold + green highlight). Accepts Sanity
// blocks or the built-in **bold** / ==highlight== strings; renders no wrapper
// element, so the caller decides whether it sits in a <p>, <li>, …
const inlineComponents = {
  block: { normal: ({ children }) => <>{children}</> },
  marks: { highlight: ({ children }) => <span className="highlight">{children}</span> },
};

export function RichInline({ value }) {
  return <PortableText value={toBlocks(value)} components={inlineComponents} />;
}

// ── Long-form article body ──────────────────────────────────────────────────
const SAFE_HREF = /^(https?:|mailto:|tel:|\/|#)/i;

const articleComponents = {
  types: {
    image: ({ value }) => {
      const src = imageUrl(value, 1400);
      if (!src) return null;
      return (
        <figure className={styles.figure}>
          <img src={src} alt={value.alt || ''} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      if (!href || !SAFE_HREF.test(href)) return <>{children}</>;
      const external = /^https?:/i.test(href);
      return (
        <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </a>
      );
    },
  },
};

export function RichArticle({ value }) {
  return (
    <div className={styles.article}>
      <PortableText value={value} components={articleComponents} />
    </div>
  );
}

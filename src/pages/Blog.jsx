import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import PostCard from '../components/blog/PostCard';
import { useBlogPage, usePosts } from '../cms/hooks';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './Blog.module.css';

const PAGE_SIZE = 9;

export default function Blog() {
  const page = useBlogPage();
  const { posts, loading } = usePosts();
  const [category, setCategory] = useState('all');
  const [visible, setVisible] = useState(PAGE_SIZE);

  usePageMeta(page.seoTitle, page.seoDescription);

  // Only categories that have at least one post.
  const categories = useMemo(() => {
    const seen = new Map();
    posts.forEach((p) => p.category && seen.set(p.category.slug, p.category.title));
    return [...seen].map(([slug, title]) => ({ slug, title }));
  }, [posts]);

  const filtered = category === 'all' ? posts : posts.filter((p) => p.category?.slug === category);
  const shown = filtered.slice(0, visible);

  const pick = (slug) => {
    setCategory(slug);
    setVisible(PAGE_SIZE);
  };

  return (
    <section className={`section ${styles.blogSection}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.sectionBadge}
          >
            <BookOpen size={14} /> {page.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.sectionTitle}
          >
            {page.title}{' '}
            {page.highlight && <span className="text-gradient">{page.highlight}</span>}
          </motion.h1>
          {page.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={styles.sectionSubtitle}
            >
              {page.subtitle}
            </motion.p>
          )}
        </div>

        {categories.length > 0 && (
          <div className={styles.filters} role="tablist" aria-label="Filter by category">
            <button
              role="tab"
              aria-selected={category === 'all'}
              className={`${styles.chip} ${category === 'all' ? styles.chipActive : ''}`}
              onClick={() => pick('all')}
            >
              {page.allCategoriesLabel}
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                role="tab"
                aria-selected={category === c.slug}
                className={`${styles.chip} ${category === c.slug ? styles.chipActive : ''}`}
                onClick={() => pick(c.slug)}
              >
                {c.title}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className={styles.grid} aria-busy="true">
            {[0, 1, 2].map((n) => <div key={n} className={styles.skeleton} />)}
          </div>
        ) : shown.length === 0 ? (
          <p className={styles.empty}>{page.emptyText}</p>
        ) : (
          <div className={styles.grid}>
            {shown.map((post, i) => (
              <PostCard
                key={post.slug}
                post={post}
                index={i}
                featured={i === 0 && filtered.length > 1}
                readMoreText={page.readMoreText}
              />
            ))}
          </div>
        )}

        {filtered.length > visible && (
          <div className={styles.moreRow}>
            <button className={styles.moreBtn} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { formatDate } from '../../lib/format';
import styles from './PostCard.module.css';

export default function PostCard({ post, readMoreText, featured = false, index = 0 }) {
  const meta = [formatDate(post.publishedAt), post.readingMinutes && `${post.readingMinutes} min read`].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.06 }}
      className={featured ? styles.featuredWrap : undefined}
    >
      <Link to={`/blog/${post.slug}`} className={`${styles.card} ${featured ? styles.featured : ''}`}>
        <div className={styles.media}>
          {post.coverUrl ? (
            <img src={post.coverUrl} alt={post.coverAlt} loading="lazy" />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">{post.title.charAt(0)}</div>
          )}
        </div>
        <div className={styles.body}>
          {post.category && <span className={styles.category}>{post.category.title}</span>}
          <h3 className={styles.title}>{post.title}</h3>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          <div className={styles.footer}>
            {meta.length > 0 && (
              <span className={styles.meta}>
                <Clock size={13} /> {meta.join(' · ')}
              </span>
            )}
            <span className={styles.readMore}>
              {readMoreText} <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import PostCard from '../components/blog/PostCard';
import { RichArticle } from '../components/RichText';
import { useBlogPage, usePost } from '../cms/hooks';
import { formatDate } from '../lib/format';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { slug } = useParams();
  const labels = useBlogPage();
  const { post, loading, notFound } = usePost(slug);

  usePageMeta(post ? post.seoTitle || post.title : undefined, post ? post.seoDescription || post.excerpt : undefined);

  if (notFound) return <Navigate to="/blog" replace />;
  if (loading || !post) return <div style={{ minHeight: '70vh' }} aria-busy="true" />;

  return (
    <>
      <article className={`section ${styles.article}`}>
        <div className={`container ${styles.narrow}`}>
          <Link to="/blog" className={styles.back}>
            <ArrowLeft size={16} /> {labels.backToBlogText}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {post.category && <span className={styles.category}>{post.category.title}</span>}
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            <div className={styles.meta}>
              {post.author && <span><User size={14} /> {post.author}</span>}
              {post.publishedAt && <span><Calendar size={14} /> {formatDate(post.publishedAt)}</span>}
              {post.readingMinutes && <span><Clock size={14} /> {post.readingMinutes} min read</span>}
            </div>
          </motion.header>

          {post.coverUrl && (
            <motion.img
              src={post.coverUrl}
              alt={post.coverAlt}
              className={styles.cover}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          )}

          <RichArticle value={post.body} />
        </div>
      </article>

      {post.related.length > 0 && (
        <section className={`section ${styles.related}`}>
          <div className="container">
            <h2 className={styles.relatedTitle}>{labels.relatedTitle}</h2>
            <div className={styles.relatedGrid}>
              {post.related.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} readMoreText={labels.readMoreText} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

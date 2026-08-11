import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './NotFound.module.css';

export default function NotFound() {
  usePageMeta('Page Not Found');

  return (
    <section className={styles.notFound}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.desc}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link to="/" className={styles.link}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </section>
  );
}

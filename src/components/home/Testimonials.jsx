import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import styles from './SocialProof.module.css';

const initials = (name = '') =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');

export default function Testimonials({ content, testimonials }) {
  return (
    <section className={`section ${styles.section} ${styles.alt}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{content.testimonialsEyebrow}</span>
          <h2 className={styles.title}>
            {content.testimonialsTitle}{' '}
            {content.testimonialsHighlight && <span className="text-gradient">{content.testimonialsHighlight}</span>}
          </h2>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((t, i) => (
            <motion.figure
              key={`${t.authorName}-${i}`}
              className={styles.quoteCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.08 }}
            >
              <Quote size={28} className={styles.quoteMark} aria-hidden="true" />
              {t.rating > 0 && (
                <div className={styles.stars} role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: Math.min(5, Math.round(t.rating)) }, (_, n) => (
                    <Star key={n} size={16} fill="currentColor" />
                  ))}
                </div>
              )}
              <blockquote className={styles.quoteText}>{t.quote}</blockquote>
              <figcaption className={styles.person}>
                {t.photoUrl ? (
                  <img src={t.photoUrl} alt="" className={styles.avatar} loading="lazy" />
                ) : (
                  <span className={styles.avatar} aria-hidden="true">{initials(t.authorName)}</span>
                )}
                <span>
                  <span className={styles.personName}>{t.authorName}</span>
                  {(t.authorRole || t.company) && (
                    <span className={styles.personMeta}>{[t.authorRole, t.company].filter(Boolean).join(' · ')}</span>
                  )}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

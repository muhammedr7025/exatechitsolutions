import { motion } from 'framer-motion';
import styles from './SocialProof.module.css';

export default function Certifications({ content, certifications }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{content.certificationsEyebrow}</span>
          <h2 className={styles.title}>
            {content.certificationsTitle}{' '}
            {content.certificationsHighlight && <span className="text-gradient">{content.certificationsHighlight}</span>}
          </h2>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((cert, i) => {
            const Tag = cert.credentialUrl ? motion.a : motion.div;
            const link = cert.credentialUrl
              ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <Tag
                key={`${cert.name}-${i}`}
                className={styles.certCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.08 }}
                {...link}
              >
                <div className={styles.badgeTile}>
                  <img src={cert.badgeUrl} alt={cert.name} loading="lazy" />
                </div>
                <h3 className={styles.certName}>{cert.name}</h3>
                {(cert.issuer || cert.year) && (
                  <span className={styles.certMeta}>{[cert.issuer, cert.year].filter(Boolean).join(' · ')}</span>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

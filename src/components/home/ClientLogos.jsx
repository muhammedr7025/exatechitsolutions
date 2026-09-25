import { motion } from 'framer-motion';
import styles from './SocialProof.module.css';

export default function ClientLogos({ content, clients }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{content.clientsEyebrow}</span>
          <h2 className={styles.title}>
            {content.clientsTitle}{' '}
            {content.clientsHighlight && <span className="text-gradient">{content.clientsHighlight}</span>}
          </h2>
        </div>

        <div className={styles.logoGrid}>
          {clients.map((client, i) => {
            const Tag = client.url ? 'a' : 'div';
            const link = client.url ? { href: client.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <motion.div
                key={`${client.name}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
              >
                <Tag className={styles.logoTile} title={client.name} {...link}>
                  <img src={client.logoUrl} alt={client.name} loading="lazy" />
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

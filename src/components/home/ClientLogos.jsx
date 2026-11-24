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
            // The tile itself is the animated grid item — wrapping it in an extra
            // element made its % width resolve against a shrink-to-fit box.
            const Tile = client.url ? motion.a : motion.div;
            const link = client.url ? { href: client.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Tile
                key={`${client.name}-${i}`}
                className={styles.logoTile}
                title={client.name}
                {...link}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
              >
                <img src={client.logoUrl} alt={client.name} loading="lazy" decoding="async" />
              </Tile>
            );
          })}
        </div>
      </div>
    </section>
  );
}

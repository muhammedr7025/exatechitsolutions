import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { servicesList } from '../../data/servicesContent';
import styles from './ServicesTeaser.module.css';

const FEATURED_SLUGS = ['web-development', 'app-development', 'ai-tools', 'custom-erp', 'ecommerce'];

export default function ServicesTeaser() {
  const featured = FEATURED_SLUGS.map((slug) => servicesList.find((s) => s.slug === slug)).filter(Boolean);

  return (
    <section className={`section ${styles.teaser}`}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}><Zap size={14} /> Core Capabilities</span>
            <h2 className={styles.title}>Built for <span className="text-gradient">Every Layer.</span></h2>
          </div>
          <Link to="/services" className={styles.viewAll}>
            View All 12 Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              className={i === 0 ? styles.featuredCell : styles.cell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
                style={{ backgroundImage: `url(${service.bg})` }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                {i === 0 && <p className={styles.cardTeaser}>{service.teaser}</p>}
                <span className={styles.cardLink}>
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

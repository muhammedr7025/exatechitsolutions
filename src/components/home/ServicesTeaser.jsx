import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Icon from '../../lib/Icon';
import { useSite } from '../../cms/SiteContext';
import { fill } from '../../cms/resolve';
import styles from './ServicesTeaser.module.css';

export default function ServicesTeaser({ content, services: featured }) {
  const { services: allServices } = useSite();

  return (
    <section className={`section ${styles.teaser}`}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}><Zap size={14} /> {content.servicesEyebrow}</span>
            <h2 className={styles.title}>
              {content.servicesTitle}{' '}
              {content.servicesHighlight && <span className="text-gradient">{content.servicesHighlight}</span>}
            </h2>
          </div>
          <Link to="/services" className={styles.viewAll}>
            {fill(content.servicesViewAllText, { count: allServices.length })} <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((service, i) => (
            <motion.div
              key={service.slug}
              className={i === 0 ? styles.featuredCell : styles.cell}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
                style={{ backgroundImage: `url(${service.bgUrl})` }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardIcon}><Icon name={service.icon} size={42} /></div>
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

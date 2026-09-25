import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Icon from '../lib/Icon';
import { useSite } from '../cms/SiteContext';
import { useServicesPage } from '../cms/hooks';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './ServicesIndex.module.css';

export default function ServicesIndex() {
  const { services } = useSite();
  const page = useServicesPage();

  usePageMeta(page.seoTitle, page.seoDescription);

  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionBadge}
          >
            <Zap size={14} /> {page.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            {page.title}{' '}
            {page.highlight && <span className="text-gradient">{page.highlight}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionSubtitle}
          >
            {page.subtitle}
          </motion.p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={styles.card}
                style={{ backgroundImage: `url(${service.bgUrl})` }}
              >
                <div className={styles.cardOverlay} />
                <span className={styles.cardNum}>{String(idx + 1).padStart(2, '0')}</span>
                <div className={styles.cardIcon}><Icon name={service.icon} size={42} /></div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardTeaser}>{service.teaser}</p>
                <span className={styles.cardLink}>
                  {page.cardLinkText} <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

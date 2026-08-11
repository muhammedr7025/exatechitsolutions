import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { servicesList } from '../data/servicesContent';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './ServicesIndex.module.css';

export default function ServicesIndex() {
  usePageMeta(
    'Services',
    'Explore all 12 of Exatech IT Solutions\' service disciplines — web, mobile, AI, ERP, automation, and more.'
  );

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
            <Zap size={14} /> Core Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Everything We <span className="text-gradient">Engineer.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionSubtitle}
          >
            Twelve disciplines, one engineering team. Pick a capability to see the full scope, stack, and delivery model.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className={styles.card}
                style={{ backgroundImage: `url(${service.bg})` }}
              >
                <div className={styles.cardOverlay} />
                <span className={styles.cardNum}>{service.id.padStart(2, '0')}</span>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardTeaser}>{service.teaser}</p>
                <span className={styles.cardLink}>
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

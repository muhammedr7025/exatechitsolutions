import { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { servicesList, detailedContent } from '../data/servicesContent';
import { subServicesData } from '../data/subServicesData';
import { whatsappLink } from '../whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesList.find((s) => s.slug === slug);
  const content = detailedContent[slug];
  const subServices = subServicesData[slug] || [];
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  usePageMeta(
    service?.title,
    service ? `${service.title} services by Exatech IT Solutions. ${service.teaser}` : undefined
  );

  if (!service || !content) {
    return <Navigate to="/services" replace />;
  }

  const idx = servicesList.findIndex((s) => s.slug === slug);
  const related = [
    servicesList[(idx + 1) % servicesList.length],
    servicesList[(idx + 2) % servicesList.length],
    servicesList[(idx + 3) % servicesList.length],
  ];

  return (
    <>
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${service.bg})`, y: bgY }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        />
        <div className={styles.bgOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link to="/services" className={styles.backLink}>
            <ArrowLeft size={16} /> All Services
          </Link>
          <motion.div
            className={styles.heroIcon}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          >
            {service.icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.heroTitle}
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      <section className={`section ${styles.bodySection}`}>
        <div className="container">
          <p className={styles.intro}>{content.intro}</p>

          <div className={styles.statsRow}>
            {content.stats.map((stat, i) => (
              <motion.div
                className={styles.statCard}
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Sub-Services Section */}
          {subServices.length > 0 && (
            <div className={styles.subServicesBlock}>
              <motion.div
                className={styles.subServicesHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className={styles.subServicesBadge}>
                  <Zap size={14} /> Specialized Areas
                </span>
                <h2 className={styles.subServicesTitle}>
                  Explore Our <span className="text-gradient">Sub-Services</span>
                </h2>
                <p className={styles.subServicesDesc}>
                  Dive deeper into each specialized area within {service.title}.
                </p>
              </motion.div>

              <div className={styles.subServicesGrid}>
                {subServices.map((sub, i) => (
                  <motion.div
                    key={sub.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link
                      to={`/services/${slug}/${sub.slug}`}
                      className={styles.subServiceCard}
                    >
                      <div className={styles.subServiceIconBox}>
                        {sub.icon}
                      </div>
                      <div className={styles.subServiceContent}>
                        <h3 className={styles.subServiceCardTitle}>{sub.title}</h3>
                        <p className={styles.subServiceTeaser}>{sub.teaser}</p>
                        <span className={styles.subServiceLink}>
                          Learn More <ArrowRight size={14} />
                        </span>
                      </div>
                      <div className={styles.subServiceGlow}></div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.detailGrid}>
            {content.sections.map((sec, i) => (
              <motion.div
                className={styles.detailCard}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className={styles.detailCardHeader}>
                  <span className={styles.detailIcon}>{sec.icon}</span>
                  <h4>{sec.title}</h4>
                </div>
                <ul className={styles.detailList}>
                  {sec.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <a
            href={whatsappLink(`Hello Exatech IT Solutions, I am interested in your ${content.cta.msg}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            {content.cta.text} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className={`section ${styles.relatedSection}`}>
        <div className="container">
          <h3 className={styles.relatedTitle}>Other Capabilities</h3>
          <div className={styles.relatedGrid}>
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className={styles.relatedCard}
                  style={{ backgroundImage: `url(${s.bg})` }}
                >
                  <div className={styles.relatedOverlay} />
                  <div className={styles.relatedIcon}>{s.icon}</div>
                  <span className={styles.relatedCardTitle}>{s.title}</span>
                  <span className={styles.relatedArrow}><ArrowRight size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

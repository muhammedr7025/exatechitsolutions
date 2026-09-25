import { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import Icon from '../lib/Icon';
import { RichInline } from '../components/RichText';
import { useSite } from '../cms/SiteContext';
import { useServiceDetail, useServicesPage } from '../cms/hooks';
import { fill } from '../cms/resolve';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './ServiceDetail.module.css';

// Fetches the service and handles loading / unknown slugs. The view itself is a
// separate component so its scroll hooks only run once the hero is on screen.
export default function ServiceDetail() {
  const { slug } = useParams();
  const { service, loading, notFound } = useServiceDetail(slug);

  usePageMeta(
    service?.title,
    service ? service.seoDescription || `${service.title} services by Exatech IT Solutions. ${service.teaser}` : undefined
  );

  if (notFound) return <Navigate to="/services" replace />;
  if (loading || !service) return <div style={{ minHeight: '70vh' }} aria-busy="true" />;
  return <ServiceView key={slug} service={service} slug={slug} />;
}

function ServiceView({ service, slug }) {
  const { services: servicesList, whatsapp } = useSite();
  const labels = useServicesPage();
  const subServices = service.subServices;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const idx = Math.max(0, servicesList.findIndex((s) => s.slug === slug));
  const related = [1, 2, 3]
    .map((n) => servicesList[(idx + n) % servicesList.length])
    .filter((s, i, all) => s && s.slug !== slug && all.findIndex((x) => x.slug === s.slug) === i);

  return (
    <>
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${service.bgUrl})`, y: bgY }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        />
        <div className={styles.bgOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link to="/services" className={styles.backLink}>
            <ArrowLeft size={16} /> {labels.backToServicesText}
          </Link>
          <motion.div
            className={styles.heroIcon}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          >
            <Icon name={service.icon} size={42} />
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
          {service.intro.map((block, i) => (
            <p className={styles.intro} key={i}><RichInline value={block} /></p>
          ))}

          <div className={styles.statsRow}>
            {service.stats.map((stat, i) => (
              <motion.div
                className={styles.statCard}
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {stat.icon && <span className={styles.statIcon}><Icon name={stat.icon} size={22} /></span>}
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
                  <Zap size={14} /> {labels.subServicesBadge}
                </span>
                <h2 className={styles.subServicesTitle}>
                  {labels.subServicesTitle}{' '}
                  {labels.subServicesHighlight && <span className="text-gradient">{labels.subServicesHighlight}</span>}
                </h2>
                <p className={styles.subServicesDesc}>
                  {fill(labels.subServicesDescription, { service: service.title })}
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
                        <Icon name={sub.icon} size={32} />
                      </div>
                      <div className={styles.subServiceContent}>
                        <h3 className={styles.subServiceCardTitle}>{sub.title}</h3>
                        <p className={styles.subServiceTeaser}>{sub.teaser}</p>
                        <span className={styles.subServiceLink}>
                          {labels.learnMoreText} <ArrowRight size={14} />
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
            {service.sections.map((sec, i) => (
              <motion.div
                className={styles.detailCard}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className={styles.detailCardHeader}>
                  <span className={styles.detailIcon}><Icon name={sec.icon} size={18} /></span>
                  <h4>{sec.title}</h4>
                </div>
                <ul className={styles.detailList}>
                  {sec.items.map((item, j) => (
                    <li key={j}><RichInline value={item} /></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <a
            href={whatsapp(service.ctaMessage || `Hello Exatech IT Solutions, I am interested in your ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            {service.ctaText || 'Get Started'} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className={`section ${styles.relatedSection}`}>
        <div className="container">
          <h3 className={styles.relatedTitle}>{labels.relatedTitle}</h3>
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
                  style={{ backgroundImage: `url(${s.bgUrl})` }}
                >
                  <div className={styles.relatedOverlay} />
                  <div className={styles.relatedIcon}><Icon name={s.icon} size={42} /></div>
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

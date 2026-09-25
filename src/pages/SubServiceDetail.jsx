import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import Icon from '../lib/Icon';
import { RichInline, RichArticle } from '../components/RichText';
import { useSite } from '../cms/SiteContext';
import { useSubServiceDetail, useServicesPage } from '../cms/hooks';
import { fill } from '../cms/resolve';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './SubServiceDetail.module.css';

export default function SubServiceDetail() {
  const { slug, subSlug } = useParams();
  const { whatsapp } = useSite();
  const labels = useServicesPage();
  const { subService, loading, notFound } = useSubServiceDetail(slug, subSlug);
  const parentService = subService?.parent;

  usePageMeta(
    subService ? `${subService.title} — ${parentService.title}` : 'Sub-Service',
    subService ? subService.seoDescription || `${subService.title}: ${subService.teaser}` : undefined
  );

  if (notFound) return <Navigate to={`/services/${slug}`} replace />;
  if (loading || !subService) return <div style={{ minHeight: '70vh' }} aria-busy="true" />;

  const siblings = subService.siblings;

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroBgImage} style={{ backgroundImage: `url(${parentService.bgUrl})` }}></div>
        <div className={styles.heroBgOverlay}></div>

        <div className={`container ${styles.heroContent}`}>
          {/* Breadcrumb */}
          <motion.nav
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
            <ChevronRight size={14} className={styles.breadcrumbSep} />
            <Link to={`/services/${slug}`} className={styles.breadcrumbLink}>{parentService.title}</Link>
            <ChevronRight size={14} className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>{subService.title}</span>
          </motion.nav>

          <motion.div
            className={styles.heroIconWrapper}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          >
            <Icon name={subService.icon} size={32} />
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subService.title}
          </motion.h1>

          <motion.p
            className={styles.heroTeaser}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subService.teaser}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          {(subService.intro.length > 0 || subService.body.length > 0) && (
            <div className={styles.contentBlock}>
              {subService.intro.map((block, i) => (
                <p className={styles.introText} key={i}><RichInline value={block} /></p>
              ))}
              {subService.body.length > 0 && <RichArticle value={subService.body} />}
            </div>
          )}

          <motion.div
            className={styles.featuresHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>
              <CheckCircle size={14} /> {labels.deliverablesBadge}
            </span>
            <h2 className={styles.featuresTitle}>
              {labels.deliverablesTitle}{' '}
              {labels.deliverablesHighlight && <span className="text-gradient">{labels.deliverablesHighlight}</span>}
            </h2>
          </motion.div>

          <div className={styles.featuresGrid}>
            {subService.features.map((feature, idx) => (
              <motion.div
                className={styles.featureCard}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <div className={styles.featureNumber}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <p className={styles.featureText}>{feature}</p>
                <div className={styles.featureGlow}></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className={styles.ctaWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={whatsapp(subService.ctaMessage || `Hello Exatech IT Solutions, I am interested in your ${subService.title} services under ${parentService.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {subService.ctaText || fill(labels.subServiceCtaText, { title: subService.title })} <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sibling Sub-Services */}
      {siblings.length > 0 && (
        <section className={`section ${styles.siblingsSection}`}>
          <div className="container">
            <h3 className={styles.siblingsTitle}>
              {labels.siblingsTitle} <span className="text-gradient">{parentService.title}</span>
            </h3>
            <div className={styles.siblingsGrid}>
              {siblings.map((sib, idx) => (
                <motion.div
                  key={sib.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link
                    to={`/services/${slug}/${sib.slug}`}
                    className={styles.siblingCard}
                  >
                    <div className={styles.siblingIcon}><Icon name={sib.icon} size={32} /></div>
                    <div className={styles.siblingInfo}>
                      <h4>{sib.title}</h4>
                      <p>{sib.teaser}</p>
                    </div>
                    <ArrowRight size={16} className={styles.siblingArrow} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className={styles.backRow}>
              <Link to={`/services/${slug}`} className={styles.backLink}>
                <ArrowLeft size={16} /> {fill(labels.backToServiceText, { service: parentService.title })}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

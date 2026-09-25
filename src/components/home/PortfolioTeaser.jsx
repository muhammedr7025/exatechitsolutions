import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { screenshotSrc, hostnameOf } from '../../lib/screenshot';
import styles from './PortfolioTeaser.module.css';

export default function PortfolioTeaser({ content, projects }) {
  return (
    <section className={`section ${styles.teaser}`}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>{content.portfolioEyebrow}</span>
            <h2 className={styles.title}>
              {content.portfolioTitle}{' '}
              {content.portfolioHighlight && <span className="text-gradient">{content.portfolioHighlight}</span>}
            </h2>
          </div>
          <Link to="/portfolio" className={styles.viewAll}>
            {content.portfolioViewAllText} <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.macControls}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.fakeUrl}>
                  <Globe size={11} /> {hostnameOf(project.url)}
                </div>
              </div>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={screenshotSrc(project)}
                  alt={`${project.name} preview`}
                  className={styles.thumbnailImg}
                  loading="lazy"
                />
                <div className={styles.thumbnailOverlay} />
                <span className={styles.viewLive}>
                  Visit Site <ArrowRight size={14} />
                </span>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardName}>{project.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

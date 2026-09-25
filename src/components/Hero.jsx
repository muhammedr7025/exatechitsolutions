import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HeroVisual from './home/HeroVisual';
import styles from './Hero.module.css';
import { useSite } from '../cms/SiteContext';

// Site-internal links (/services) use the router; anything else is a normal link.
const isInternal = (href) => href?.startsWith('/') && !href.startsWith('//');

export default function Hero({ content }) {
  const { whatsapp } = useSite();
  const secondaryLink = content.heroSecondaryCtaLink || '/services';

  return (
    <section className={styles.heroSection}>
      {/* Immersive Cinematic Background */}
      <div className={styles.ambientGlowPrimary}></div>
      <div className={styles.textureOverlay}></div>

      <div className={`container ${styles.containerView}`}>
        <motion.div
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.statusDot}></span>
            <span className={styles.statusText}>{content.heroBadgeText}</span>
          </motion.div>

          <motion.h1
             className={styles.title}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {content.heroHeadlinePrefix}
            {content.heroHeadlineHighlight && (
              <>
                {' '}<br className={styles.desktopBreak} />
                <span className={styles.textHighlight}>{content.heroHeadlineHighlight}</span>
              </>
            )}
          </motion.h1>

          <motion.p
             className={styles.subtitle}
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
             {content.heroSubtitle}
          </motion.p>

          <motion.div
             className={styles.ctaGroup}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
          >
             <a
               href={whatsapp()}
               target="_blank"
               rel="noopener noreferrer"
               className={styles.primaryBtn}
             >
               {content.heroCtaText} <ChevronRight size={18} className={styles.btnIcon} />
               <div className={styles.btnGlow}></div>
             </a>
             {isInternal(secondaryLink) ? (
               <Link to={secondaryLink} className={styles.secondaryBtn}>
                 {content.heroSecondaryCtaText}
               </Link>
             ) : (
               <a href={secondaryLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                 {content.heroSecondaryCtaText}
               </a>
             )}
          </motion.div>
        </motion.div>

        <div className={styles.visualCol}>
          <HeroVisual chipTop={content.heroChipTop} chipBottom={content.heroChipBottom} />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className={styles.mouse}>
             <motion.div
                className={styles.wheel}
                animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
             />
          </div>
          <span className={styles.scrollText}>Discover</span>
        </motion.div>
      </div>
    </section>
  );
}

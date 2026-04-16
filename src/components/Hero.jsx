import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
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
            <span className={styles.statusText}>EXATECH ENGINEERING</span>
          </motion.div>

          <motion.h1 
             className={styles.title}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Architect Your <br className={styles.desktopBreak} />
            <span className={styles.textHighlight}>Digital Future</span>
          </motion.h1>

          <motion.p 
             className={styles.subtitle}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.5 }}
          >
             We develop elite web platforms, intelligent mobile applications, and scalable business automation frameworks for enterprises that demand absolute perfection.
          </motion.p>
          
          <motion.div 
             className={styles.ctaGroup}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
          >
             <a 
               href="https://wa.me/919995066663?text=Hello%20Exatech%20IT%20Solutions,%20I%20am%20ready%20to%20engineer%20my%20business%20to%20the%20next%20level." 
               target="_blank" 
               rel="noopener noreferrer" 
               className={styles.primaryBtn}
             >
               Start Innovating <ChevronRight size={18} className={styles.btnIcon} />
               <div className={styles.btnGlow}></div>
             </a>
             <a href="#services" className={styles.secondaryBtn}>
               Explore Engine
             </a>
          </motion.div>
        </motion.div>

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

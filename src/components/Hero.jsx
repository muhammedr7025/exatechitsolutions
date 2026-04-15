import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, BrainCircuit, Activity, ChevronRight, Code, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Background VFX */}
      <div className={styles.ambientGlow1}></div>
      <div className={styles.ambientGlow2}></div>
      <div className={styles.gridPlane}></div>
      <div className={styles.scanline}></div>

      <div className={`container ${styles.containerView}`}>
        <div className={styles.textContent}>
          <motion.div 
            className={styles.statusBadge}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={styles.statusDot}></span> 
            <span className={styles.statusText}>SYSTEM ONLINE &middot; EXATECH CORE</span>
          </motion.div>

          <motion.h1 
             className={styles.title}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineer The <br />
            <span className={styles.glitchText} data-text="Digital Frontier">
              <span className="text-gradient">Digital Frontier</span>
            </span>
          </motion.h1>

          <motion.p 
             className={styles.subtitle}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
             We architect premium, enterprise-grade digital experiences. From elite web & mobile app development to cutting-edge AI integrations and custom ERPs, we future-proof your business.
          </motion.p>
          
          <motion.div 
             className={styles.ctaGroup}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
          >
             <button className={styles.primaryBtn}>
               Start Innovating <ChevronRight size={18} className={styles.btnIcon} />
               <div className={styles.btnGlow}></div>
             </button>
             <button className={styles.secondaryBtn}>
               <Sparkles size={16} /> Explore Engine
             </button>
          </motion.div>
        </div>

        <div className={styles.visualContent}>
          {/* Central Reactor Core */}
          <div className={styles.reactor}>
             <div className={styles.core}></div>
             <div className={styles.ring1}></div>
             <div className={styles.ring2}></div>
             <div className={styles.ring3}></div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
             className={`${styles.floatingWidget} ${styles.widgetAi}`}
             initial={{ opacity: 0, x: 50, y: 50 }}
             animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
             transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
             <div className={styles.widgetHeader}>
                <BrainCircuit size={16} className={styles.widgetIconMain} /> 
                <span>AI Neural Engine</span>
             </div>
             <div className={styles.widgetBody}>
                <div className={styles.dataLine}></div>
                <div className={`${styles.dataLine} ${styles.w75}`}></div>
                <div className={`${styles.dataLine} ${styles.w50}`}></div>
             </div>
          </motion.div>

          <motion.div 
             className={`${styles.floatingWidget} ${styles.widgetMetrics}`}
             initial={{ opacity: 0, x: -50, y: 30 }}
             animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
             transition={{ opacity: { duration: 1, delay: 0.8 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
          >
             <div className={styles.widgetHeader}>
                <Activity size={16} className={styles.widgetIconSec} /> 
                <span>Server Telemetry</span>
             </div>
             <div className={styles.chartContainer}>
                {[...Array(6)].map((_, i) => (
                   <motion.div 
                      key={i} 
                      className={styles.chartBar}
                      animate={{ height: ['30%', '90%', '40%', '100%', '50%'] }}
                      transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, ease: 'linear' }}
                   />
                ))}
             </div>
          </motion.div>

          <motion.div 
             className={`${styles.floatingWidget} ${styles.widgetSecurity}`}
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: [0, -10, 0] }}
             transition={{ opacity: { duration: 1, delay: 1 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 } }}
          >
             <div className={styles.widgetHeader}>
                <Shield size={16} className={styles.widgetIconMain} /> 
                <span>Zero-Trust Protocol</span>
             </div>
             <div className={styles.shieldPulse}>
                <div className={styles.pulseRing}></div>
                <div className={styles.pulseRingDelayed}></div>
                <Shield size={24} color="var(--primary)" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

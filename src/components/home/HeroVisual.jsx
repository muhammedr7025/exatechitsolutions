import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import styles from './HeroVisual.module.css';

const SLIDES = portfolioData.websites.slice(0, 5);

export default function HeroVisual() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3200);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const slide = SLIDES[index];

  return (
    <div className={styles.wrapper}>
      <motion.div
        ref={ref}
        className={styles.deviceFrame}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.deviceGlow} />
        <div className={styles.deviceHeader}>
          <div className={styles.macControls}>
            <span></span><span></span><span></span>
          </div>
          <div className={styles.fakeUrl}>
            <Globe size={11} />
            {new URL(slide.url).hostname}
          </div>
        </div>
        <div className={styles.deviceScreen}>
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.url}
              src={`https://api.microlink.io/?url=${encodeURIComponent(slide.url)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={slide.name}
              className={styles.screenshotImg}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              loading="eager"
            />
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className={styles.floatChipTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
      >
        <Zap size={16} /> <span>150+ Projects Delivered</span>
      </motion.div>

      <motion.div
        className={styles.floatChipBottom}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1.2 }, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
      >
        <ShieldCheck size={16} /> <span>Enterprise-Grade Security</span>
      </motion.div>

      <div className={styles.dots}>
        {SLIDES.map((s, i) => (
          <button
            key={s.url}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.name}`}
          />
        ))}
      </div>
    </div>
  );
}

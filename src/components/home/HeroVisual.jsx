import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Globe, Zap, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../../cms/hooks';
import { screenshotSrc, hostnameOf } from '../../lib/screenshot';
import styles from './HeroVisual.module.css';

const SLIDE_COUNT = 5;

export default function HeroVisual({ chipTop, chipBottom }) {
  const slides = usePortfolio().web.slice(0, SLIDE_COUNT);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const wrapperRef = useRef(null);
  // Only rotate slides while the showcase is on screen (no work while reading further down).
  const inView = useInView(wrapperRef, { margin: '100px' });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (slides.length < 2 || !inView) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 3200);
    return () => clearInterval(id);
  }, [slides.length, inView]);

  // Warm the cache with the next screenshot so each slide change is instant.
  const nextSrc = slides.length > 1 ? screenshotSrc(slides[(index + 1) % slides.length]) : null;
  useEffect(() => {
    if (!nextSrc) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = nextSrc;
  }, [nextSrc]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const slide = slides[index % Math.max(slides.length, 1)];

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
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
        <div className={styles.deviceGlow} aria-hidden="true" />
        <div className={styles.deviceHeader}>
          <div className={styles.macControls}>
            <span></span><span></span><span></span>
          </div>
          <div className={styles.fakeUrl}>
            <Globe size={11} />
            {slide && hostnameOf(slide.url)}
          </div>
        </div>
        <div className={styles.deviceScreen}>
          {/* both screenshots are absolutely positioned, so slides crossfade
              (no fade-to-black gap between them) */}
          <AnimatePresence initial={false}>
            {slide && (
              <motion.img
                key={slide.url}
                src={screenshotSrc(slide)}
                alt={slide.name}
                className={styles.screenshotImg}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                width="960"
                height="600"
                loading="eager"
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className={styles.floatChipTop}
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
      >
        <Zap size={16} /> <span>{chipTop}</span>
      </motion.div>

      <motion.div
        className={styles.floatChipBottom}
        aria-hidden="true"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1.2 }, y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
      >
        <ShieldCheck size={16} /> <span>{chipBottom}</span>
      </motion.div>

      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.url}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.name}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}

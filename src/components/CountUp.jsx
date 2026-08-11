import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const NUMERIC_PREFIX = /^(\d+)(.*)$/;

export default function CountUp({ value, duration = 1.4 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(() => {
    const m = NUMERIC_PREFIX.exec(value);
    return m ? '0' + m[2] : value;
  });

  useEffect(() => {
    const m = NUMERIC_PREFIX.exec(value);
    if (!m || !isInView) return;
    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

import { motion } from 'framer-motion';
import CountUp from './CountUp';
import styles from './StatsStrip.module.css';

export default function StatsStrip({ stats }) {
  return (
    <div className={styles.strip}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={styles.item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <span className={styles.value}><CountUp value={stat.value} /></span>
          <span className={styles.label}>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from 'framer-motion';
import Icon from '../../lib/Icon';
import styles from './ProcessSection.module.css';

export default function ProcessSection({ content }) {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{content.processEyebrow}</span>
          <h2 className={styles.title}>
            {content.processTitle}{' '}
            {content.processHighlight && <span className="text-gradient">{content.processHighlight}</span>}
          </h2>
        </div>

        <div className={styles.steps}>
          <svg className={styles.connector} viewBox="0 0 100 4" preserveAspectRatio="none">
            <motion.line
              x1="12.5" y1="2" x2="87.5" y2="2"
              stroke="var(--primary)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>

          {content.processSteps.map((step, i) => (
            <motion.div
              key={`${i}-${step.title}`}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <motion.div
                className={styles.stepIcon}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: 'spring', bounce: 0.5 }}
              >
                <Icon name={step.icon} size={26} />
              </motion.div>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

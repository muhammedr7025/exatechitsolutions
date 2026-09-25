import { motion } from 'framer-motion';
import Icon from '../../lib/Icon';
import styles from './WhyUs.module.css';

export default function WhyUs({ content }) {
  return (
    <section className={`section ${styles.whyUs}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>{content.whyUsEyebrow}</span>
          <h2 className={styles.title}>
            {content.whyUsTitle}{' '}
            {content.whyUsHighlight && <span className="text-gradient">{content.whyUsHighlight}</span>}
          </h2>
        </div>

        <div className={styles.grid}>
          {content.whyUsItems.map((v, i) => (
            <motion.div
              key={v.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.icon}><Icon name={v.icon} size={26} /></div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, LifeBuoy } from 'lucide-react';
import styles from './ProcessSection.module.css';

const STEPS = [
  { icon: <Search size={26} />, num: '01', title: 'Discover', desc: 'We map your goals, constraints, and success metrics before a single line of code.' },
  { icon: <PenTool size={26} />, num: '02', title: 'Design & Architect', desc: 'Prototypes, system architecture, and a stack chosen for your scale — not ours.' },
  { icon: <Rocket size={26} />, num: '03', title: 'Build & Ship', desc: 'Agile sprints with weekly demos, a dedicated PM, and full visibility into progress.' },
  { icon: <LifeBuoy size={26} />, num: '04', title: 'Support & Scale', desc: 'Post-launch monitoring, maintenance, and roadmap support as you grow.' },
];

export default function ProcessSection() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.title}>From Idea to <span className="text-gradient">Deployment.</span></h2>
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

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
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
                {step.icon}
              </motion.div>
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Target, Compass, Sparkles } from 'lucide-react';
import StatsStrip from '../components/StatsStrip';
import WhyUs from '../components/home/WhyUs';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './About.module.css';

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12', label: 'Service Disciplines' },
  { value: '2M+', label: 'End Users Served' },
  { value: 'Kerala', label: 'Home Base' },
];

export default function About() {
  usePageMeta(
    'About Us',
    'Exatech IT Solutions is a technology collective based in Venjarammoodu, Kerala, building web, mobile, AI, and ERP solutions.'
  );

  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} /> About Exatech
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Engineer <span className="text-gradient">What&rsquo;s Next.</span>
          </motion.h1>
          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exatech IT Solutions is a technology collective based in Venjarammoodu, Kerala,
            building web platforms, mobile apps, AI tooling, ERP systems, and business
            automation for clients who expect precision, not excuses. We work as one
            embedded team across design, engineering, and delivery — so nothing falls
            through the gap between vendors.
          </motion.p>
        </div>
      </section>

      <StatsStrip stats={STATS} />

      <section className={`section ${styles.missionSection}`}>
        <div className={`container ${styles.missionGrid}`}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}><Target size={26} /></div>
            <h2>Our Mission</h2>
            <p>
              Give growing businesses access to the same caliber of engineering, design,
              and delivery discipline that large enterprises take for granted — without
              the enterprise overhead.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}><Compass size={26} /></div>
            <h2>How We Operate</h2>
            <p>
              Every engagement gets a dedicated project manager, weekly sprint demos, and
              a direct line to the people actually building your product — not a support
              queue.
            </p>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}

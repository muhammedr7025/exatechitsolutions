import { motion } from 'framer-motion';
import { Shield, Handshake, Layers, Globe2 } from 'lucide-react';
import styles from './WhyUs.module.css';

const VALUES = [
  { icon: <Handshake size={26} />, title: 'Dedicated Team', desc: 'A named project manager and engineering team on every engagement — not a rotating queue of tickets.' },
  { icon: <Layers size={26} />, title: 'Full-Stack Depth', desc: 'Web, mobile, AI, ERP, and automation under one roof — no handoffs between vendors.' },
  { icon: <Shield size={26} />, title: 'Security First', desc: 'OWASP-aligned builds, encrypted data, and audit-ready infrastructure by default.' },
  { icon: <Globe2 size={26} />, title: 'Built to Scale', desc: 'Architecture and delivery models that hold up from first launch to enterprise scale.' },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.whyUs}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className={styles.eyebrow}>Why Exatech</span>
          <h2 className={styles.title}>Engineering You Can <span className="text-gradient">Rely On.</span></h2>
        </div>

        <div className={styles.grid}>
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.icon}>{v.icon}</div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

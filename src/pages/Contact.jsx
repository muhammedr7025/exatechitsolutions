import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './Contact.module.css';

export default function Contact() {
  usePageMeta(
    'Contact',
    'Get in touch with Exatech IT Solutions via WhatsApp, phone, or email.'
  );

  return (
    <section className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&rsquo;s Engineer Your <span className="text-gradient">Next Move.</span>
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The fastest way to reach us is WhatsApp — most conversations start there.
            For anything else, use the details below.
          </motion.p>
        </div>

        <div className={styles.grid}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCard}
          >
            <div className={styles.whatsappIcon}><MessageCircle size={28} /></div>
            <div>
              <h3>Chat on WhatsApp</h3>
              <p>Usually replies within the hour, during business hours.</p>
            </div>
            <ArrowRight size={20} className={styles.whatsappArrow} />
          </a>

          <div className={styles.detailsGrid}>
            <a href="tel:+919995066663" className={styles.detailCard}>
              <div className={styles.detailIcon}><Phone size={20} /></div>
              <strong>Direct Line</strong>
              <span>+91 99950 66663</span>
            </a>
            <a href="mailto:mail@exatech.co.in" className={styles.detailCard}>
              <div className={styles.detailIcon}><Mail size={20} /></div>
              <strong>Digital Mail</strong>
              <span>mail@exatech.co.in</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Thalam+Jewellers+Venjarammoodu+Nellanad+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailCard}
            >
              <div className={styles.detailIcon}><MapPin size={20} /></div>
              <strong>Headquarters</strong>
              <span>EXATECH, 3rd Floor, above Thalam Jewellers, opp. KSRTC Bus Stand, Venjarammoodu, Nellanad, Kerala, India</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { useSite } from '../cms/SiteContext';
import { useContactPage } from '../cms/hooks';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './Contact.module.css';

export default function Contact() {
  const page = useContactPage();
  const { settings, contact, whatsapp } = useSite();

  usePageMeta(page.seoTitle, page.seoDescription);

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
            {page.eyebrow}
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {page.heading}{' '}
            {page.headingHighlight && <span className="text-gradient">{page.headingHighlight}</span>}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {page.subtitle}
          </motion.p>
        </div>

        <div className={styles.grid}>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappCard}
          >
            <div className={styles.whatsappIcon}><MessageCircle size={28} /></div>
            <div>
              <h3>{page.whatsappCardTitle}</h3>
              <p>{page.whatsappCardText}</p>
            </div>
            <ArrowRight size={20} className={styles.whatsappArrow} />
          </a>

          <div className={styles.detailsGrid}>
            {contact.phoneDisplay && (
              <a href={contact.phoneHref} className={styles.detailCard}>
                <div className={styles.detailIcon}><Phone size={20} /></div>
                <strong>{settings.phoneLabel}</strong>
                <span>{contact.phoneDisplay}</span>
              </a>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className={styles.detailCard}>
                <div className={styles.detailIcon}><Mail size={20} /></div>
                <strong>{settings.emailLabel}</strong>
                <span>{contact.email}</span>
              </a>
            )}
            {contact.addressText && (
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailCard}
              >
                <div className={styles.detailIcon}><MapPin size={20} /></div>
                <strong>{settings.addressLabel}</strong>
                <span>{contact.addressText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

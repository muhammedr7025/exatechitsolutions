import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';
import { useSite } from '../cms/SiteContext';

export default function Footer() {
  const { settings, contact, logoUrl, logoAlt, siteName, whatsapp } = useSite();

  return (
    <footer id="footer" className={styles.footerSection}>
      {/* Background Visuals */}
      <div className={styles.bgGlow}></div>

      <div className={`container ${styles.footerContainer}`}>

        {/* Call to Action Block */}
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>
            {settings.footerCtaTitle}{' '}
            {settings.footerCtaHighlight && <span className="text-gradient">{settings.footerCtaHighlight}</span>}
          </h2>
          <p className={styles.ctaDesc}>{settings.footerCtaDescription}</p>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {settings.footerCtaButtonText} <ArrowRight size={20} className={styles.btnArrow} />
          </a>
        </div>

        {/* Footer Grid */}
        <div className={styles.footerGrid}>

          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoGroup}>
              <img src={logoUrl} alt={logoAlt} className={styles.footerLogoImg} />
            </div>
            <p className={styles.brandDesc}>{settings.footerBrandDescription}</p>
          </div>

          {/* Contact Column */}
          {contact.addressLines.length > 0 && (
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>{settings.footerContactHeading}</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}><MapPin size={18} /></div>
                  <div className={styles.contactText}>
                    <strong>{settings.addressLabel}</strong>
                    {contact.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Connect Column */}
          {(contact.phoneDisplay || contact.email) && (
            <div className={styles.connectCol}>
              <h4 className={styles.colTitle}>{settings.footerConnectHeading}</h4>
              <div className={styles.contactList}>
                {contact.phoneDisplay && (
                  <a href={contact.phoneHref} className={styles.contactItemLink}>
                    <div className={styles.iconBox}><Phone size={18} /></div>
                    <div className={styles.contactText}>
                      <strong>{settings.phoneLabel}</strong>
                      <span>{contact.phoneDisplay}</span>
                    </div>
                  </a>
                )}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className={styles.contactItemLink}>
                    <div className={styles.iconBox}><Mail size={18} /></div>
                    <div className={styles.contactText}>
                      <strong>{settings.emailLabel}</strong>
                      <span>{contact.email}</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Edge to Edge Massive Typography */}
        {settings.footerBigText && (
          <div className={styles.massiveTextWrapper}>
            <h1 className={styles.massiveText}>{settings.footerBigText}</h1>
          </div>
        )}

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteName}.
            {settings.footerCopyrightLine2 && (
              <>
                <br />
                {settings.footerCopyrightLine2}
              </>
            )}
          </p>
        </div>

      </div>
    </footer>
  );
}

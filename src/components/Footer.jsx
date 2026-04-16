import { Mail, MapPin, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footerSection}>
      {/* Background Visuals */}
      <div className={styles.bgGlow}></div>

      <div className={`container ${styles.footerContainer}`}>
        
        {/* Call to Action Block */}
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>
            Ready to <span className="text-gradient">Innovate?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Deploy elite IT solutions, scalable software, and intelligent automation built precisely for your enterprise. Let's engineer your digital future.
          </p>
          <a 
            href="https://wa.me/919995066663?text=Hello%20Exatech%20IT%20Solutions,%20I%20am%20ready%20to%20engineer%20my%20business%20to%20the%20next%20level."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Initiate Project <ArrowRight size={20} className={styles.btnArrow} />
          </a>
        </div>

        {/* Footer Grid */}
        <div className={styles.footerGrid}>
          
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoGroup}>
              <img src="/logo.png" alt="Exatech Logo" className={styles.footerLogoImg} />
            </div>
            <p className={styles.brandDesc}>
              A premium technology collective pioneering web development, AI capabilities, and scalable business automation frameworks.
            </p>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Command Center</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Headquarters</strong>
                  <span>EXATECH 3rd Floor, above Thalam Jewellers, opp. KSRTC Bus Stand</span>
                  <span>Venjarammoodu, Nellanad, Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Connect Column */}
          <div className={styles.connectCol}>
            <h4 className={styles.colTitle}>Communications</h4>
            <div className={styles.contactList}>
              <a href="tel:+919995066663" className={styles.contactItemLink}>
                <div className={styles.iconBox}><Phone size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Direct Line</strong>
                  <span>+91 99950 66663</span>
                </div>
              </a>
              <a href="mailto:mail@exatech.co.in" className={styles.contactItemLink}>
                <div className={styles.iconBox}><Mail size={18} /></div>
                <div className={styles.contactText}>
                  <strong>Digital Mail</strong>
                  <span>mail@exatech.co.in</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Edge to Edge Massive Typography */}
        <div className={styles.massiveTextWrapper}>
          <h1 className={styles.massiveText}>EXATECH</h1>
        </div>

        {/* Legal & Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Directive</a>
            <a href="#" className={styles.legalLink}>Terms of Cloud Service</a>
          </div>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Exatech IT Solutions.<br/>Engineered to Perfection in Kerala, India.</p>
        </div>

      </div>
    </footer>
  );
}

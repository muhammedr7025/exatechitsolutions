import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useSite } from '../cms/SiteContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logoUrl, logoAlt, services: servicesList, settings, whatsapp } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Blog', to: '/blog' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const navLinkClass = ({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

  return (
    <motion.nav
      className={styles.navbarWrapper}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
    >
      <motion.div
        className={`${styles.navFloatingContainer} ${scrolled ? styles.scrolled : ''}`}
        layout
      >
        <Link to="/" className={styles.logo}>
          <img src={logoUrl} alt={logoAlt} className={styles.logoImg} />
        </Link>

        <div className={styles.desktopMenu}>
          <NavLink to="/" end className={navLinkClass}>
            <span className={styles.navLinkText}>Home</span>
          </NavLink>

          <div
            className={styles.servicesMenuItem}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink to="/services" className={navLinkClass}>
              <span className={styles.navLinkText}>
                Services <ChevronDown size={14} className={styles.chevron} />
              </span>
            </NavLink>

            <AnimatePresence>
              {servicesOpen && (
                <div className={styles.servicesDropdownAnchor}>
                  <motion.div
                    className={styles.servicesDropdown}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className={styles.dropdownGrid}>
                      {servicesList.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className={styles.dropdownLink}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <Link to="/services" className={styles.dropdownViewAll}>
                      View All Services <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink key={link.name} to={link.to} className={navLinkClass}>
              <span className={styles.navLinkText}>{link.name}</span>
            </NavLink>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            {settings.navCtaText} <ArrowRight size={16} className={styles.btnIcon} />
            <div className={styles.btnBorderGlow}></div>
          </a>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--text-main)" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div className={styles.mobileMenuAnchor}>
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink to="/" end className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>

            <button
              className={styles.mobileServicesToggle}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown size={16} className={mobileServicesOpen ? styles.chevronOpen : ''} />
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  className={styles.mobileServicesList}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {servicesList.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={styles.mobileLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtnMobile}
              onClick={() => setMobileMenuOpen(false)}
            >
              {settings.navCtaText}
            </a>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

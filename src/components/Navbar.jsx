import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useSite } from '../cms/SiteContext';
import { lockScroll } from '../lib/scrollLock';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blog', to: '/blog' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { logoUrl, logoAlt, services: servicesList, settings, whatsapp } = useSite();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 50);
  // Menus remember the page they were opened on, so any navigation closes them.
  const [mobileMenuPath, setMobileMenuPath] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesMenuPath, setServicesMenuPath] = useState(null);
  const mobileMenuOpen = mobileMenuPath === pathname;
  const servicesOpen = servicesMenuPath === pathname;
  const setMobileMenuOpen = (open) => {
    setMobileMenuPath(open ? pathname : null);
    if (open) setMobileServicesOpen(false);
  };
  const setServicesOpen = (open) => setServicesMenuPath(open ? pathname : null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the mobile menu is open: the page behind it doesn't scroll, and
  // Escape closes it.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const unlock = lockScroll();
    const onKey = (e) => e.key === 'Escape' && setMobileMenuPath(null);
    window.addEventListener('keydown', onKey);
    return () => {
      unlock();
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  // Growing past the mobile breakpoint (rotating a tablet) closes the menu.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const onChange = (e) => e.matches && setMobileMenuPath(null);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const navLinkClass = ({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      className={styles.navbarWrapper}
      aria-label="Main"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
    >
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileBackdrop}
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className={`${styles.navFloatingContainer} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo} aria-label="Home">
          <img src={logoUrl} alt={logoAlt} className={styles.logoImg} width="979" height="528" decoding="async" />
        </Link>

        <div className={styles.desktopMenu}>
          <NavLink to="/" end className={navLinkClass}>
            <span className={styles.navLinkText}>Home</span>
          </NavLink>

          <div
            className={styles.servicesMenuItem}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setServicesOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setServicesOpen(false)}
          >
            <NavLink to="/services" className={navLinkClass} aria-haspopup="true" aria-expanded={servicesOpen}>
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
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} color="var(--primary)" /> : <Menu size={24} color="var(--text-main)" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <div className={styles.mobileMenuAnchor}>
            <motion.div
              id="mobile-menu"
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <NavLink to="/" end className={styles.mobileLink} onClick={closeMenu}>
                Home
              </NavLink>

              <button
                type="button"
                className={styles.mobileServicesToggle}
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown size={18} className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronOpen : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    className={styles.mobileServicesList}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link to="/services" className={styles.mobileSubLink} onClick={closeMenu}>
                      All Services
                    </Link>
                    {servicesList.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className={styles.mobileSubLink}
                        onClick={closeMenu}
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
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtnMobile}
                onClick={closeMenu}
              >
                {settings.navCtaText} <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

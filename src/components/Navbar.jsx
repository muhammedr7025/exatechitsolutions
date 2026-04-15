import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const handleScroll = (e, targetHref) => {
    e.preventDefault();
    const target = document.querySelector(targetHref);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu if open
  };

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
        <div className={styles.logo}>
          <img src="/logo.png" alt="Exatech Logo" className={styles.logoImg} />
        </div>

        <div className={styles.desktopMenu}>
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={styles.navLink}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className={styles.navLinkText}>{link.name}</span>
              {hoveredIndex === idx && (
                <motion.div 
                  layoutId="navItemIndicator"
                  className={styles.navHoverBg}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn} onClick={(e) => handleScroll(e, '#footer')}>
            Let's Talk <ArrowRight size={16} className={styles.btnIcon} />
            <div className={styles.btnBorderGlow}></div>
          </button>
          
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
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={styles.mobileLink} 
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button className={styles.actionBtnMobile} onClick={(e) => handleScroll(e, '#footer')}> Let's Talk</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

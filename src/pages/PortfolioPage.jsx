import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Play, Apple, ExternalLink, X, Maximize2, Sparkles } from 'lucide-react';
import { usePortfolio, usePortfolioPage } from '../cms/hooks';
import { screenshotSrc, hostnameOf } from '../lib/screenshot';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './PortfolioPage.module.css';

export default function PortfolioPage() {
  const page = usePortfolioPage();
  const projects = usePortfolio();

  usePageMeta(page.seoTitle, page.seoDescription);

  const [activeTab, setActiveTab] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  const tabs = [
    { id: 'web', label: page.tabWebLabel, icon: <Globe size={18} /> },
    { id: 'ios', label: page.tabIosLabel, icon: <Apple size={18} /> },
    { id: 'android', label: page.tabAndroidLabel, icon: <Play size={18} /> },
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setIframeLoading(true);
    setSelectedProject(project);
  };

  return (
    <section className={`section ${styles.portfolioSection}`}>

      {/* Dynamic Grid Background overlay */}
      <div className={styles.sectionGridBg}></div>
      <div className={styles.ambientGlowPrimary}></div>
      <div className={styles.ambientGlowSecondary}></div>

      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.headerBlock}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.sectionBadge}
          >
             <Sparkles size={14} className={styles.badgeIcon} /> {page.eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className={styles.sectionTitle}
          >
            {page.title}{' '}
            {page.highlight && <span className="text-gradient">{page.highlight}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, delay: 0.2 }}
            className={styles.sectionSubtitle}
          >
            {page.subtitle}
          </motion.p>
        </div>

        {/* Floating Glass Tab Navigation */}
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.div layoutId="portfolioTabBg" className={styles.activeTabBg} transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
              )}
              <span className={styles.tabContent}>
                {tab.icon} {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid with Animated Beam Cards */}
        <motion.div layout className={styles.projectsGrid}>
          <AnimatePresence mode='popLayout'>
            {projects[activeTab].map((project, idx) => (
              <motion.button
                key={project.url}
                onClick={() => handleProjectClick(project)}
                className={styles.projectCardWrapper}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.5, delay: idx * 0.05, type: 'spring', damping: 20 }}
                whileHover="hover"
              >
                {/* 1px Rotating Beam Layer */}
                <div className={styles.beamBorder}></div>

                {/* Visual Glass Inner Card */}
                <div className={styles.innerCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.macControls}>
                      <span></span><span></span><span></span>
                    </div>
                    <div className={styles.fakeUrl}>{hostnameOf(project.url)}</div>
                  </div>

                  <div className={styles.thumbnailWrapper}>
                    <img
                      src={screenshotSrc(project)}
                      alt={`${project.name} Preview`}
                      className={styles.thumbnailImg}
                      loading="lazy"
                    />
                    <div className={styles.thumbnailOverlay}></div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.projectName}>{project.name}</h3>

                    <motion.div
                        className={styles.previewBtn}
                        variants={{
                            hover: {
                                boxShadow: "0px 10px 40px rgba(77, 184, 72, 0.4)",
                                background: "var(--primary)",
                                color: "#000",
                                scale: 1.05
                            }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                      <Maximize2 size={16} /> {page.cardButtonText}
                    </motion.div>
                  </div>

                  {/* Subtle hover mesh gradient inside the card */}
                  <div className={styles.innerGlow}></div>
                </div>

              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Live Preview Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(25px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalDeviceWindow}
              initial={{ opacity: 0, scale: 0.8, y: 60, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40, rotateX: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Glowing aura around modal */}
              <div className={styles.modalAura}></div>

              {/* Device Window Header */}
              <div className={styles.deviceHeader}>
                <div className={styles.macControls}>
                  <span className={styles.closeBtn} onClick={() => setSelectedProject(null)}><X size={10} /></span>
                  <span></span>
                  <span className={styles.fullBtn}><Maximize2 size={10} /></span>
                </div>

                <div className={styles.addressBar}>
                  <Globe size={14} className={styles.securityIcon} />
                  {selectedProject.url}
                </div>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.externalLinkBtn}
                  title="Open externally"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Iframe Viewport */}
              <div className={styles.deviceScreen}>
                {iframeLoading && (
                   <div className={styles.loaderArea}>
                      <div className={styles.cyberCircle}></div>
                      <p className={styles.loaderText}>Establishing Secure Uplink</p>
                      <span className={styles.corsWarning}>If simulation fails, advanced security headers blocked embedding. Utilize the external link.</span>
                   </div>
                )}
                <iframe
                  src={selectedProject.url}
                  className={styles.previewIframe}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  onLoad={() => setIframeLoading(false)}
                  title={selectedProject.name}
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

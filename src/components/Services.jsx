import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Mic, BookOpen, TrendingUp, Cpu, Server, Activity, ShoppingCart, BarChart3, ArrowRight, Zap } from 'lucide-react';
import styles from './Services.module.css';

const servicesList = [
  { id: '1', title: "Web Development", icon: <Monitor size={42} />, desc: "Responsive, ultra-fast enterprise platforms engineered for maximum scalability.", bg: "/bg-web.png" },
  { id: '2', title: "App Development", icon: <Smartphone size={42} />, desc: "Elite native iOS and Android experiences tailored for seamless mobile UX.", bg: "/bg-web.png" },
  { id: '3', title: "AI Tools & Software", icon: <Cpu size={42} />, desc: "Deep-learning models and neural workflows that automate complexity.", bg: "/bg-ai.png" },
  { id: '4', title: "Custom ERP", icon: <Server size={42} />, desc: "Tailor-made resource planning systems that synchronize enterprise operations.", bg: "/bg-erp.png" },
  { id: '5', title: "Data Analytics", icon: <BarChart3 size={42} />, desc: "Predictive analytics and beautiful telemetry dashboards to decode big data.", bg: "/bg-ai.png" },
  { id: '6', title: "Process Automation", icon: <Activity size={42} />, desc: "Instantaneous, error-free automated pipelines to drastically boost efficiency.", bg: "/bg-erp.png" },
  { id: '7', title: "Voice Agent", icon: <Mic size={42} />, desc: "Deploy 24/7 AI-powered voice bots capable of understanding infinite contexts.", bg: "/bg-ai.png" },
  { id: '8', title: "E-Commerce", icon: <ShoppingCart size={42} />, desc: "Scalable high-conversion retail stores with frictionless integrations.", bg: "/bg-web.png" },
  { id: '9', title: "Digital Marketing", icon: <TrendingUp size={42} />, desc: "Data-driven audience growth utilizing hyper-targeted advertising nets.", bg: "/bg-web.png" },
  { id: '10', title: "Voice Process", icon: <Mic size={42} />, desc: "Elite human-in-the-loop professional call handling and customer support.", bg: "/bg-ai.png" },
  { id: '11', title: "E-Publishing", icon: <BookOpen size={42} />, desc: "Digital content formatting, distribution, and global publishing solutions.", bg: "/bg-web.png" },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      
      {/* 
        CINEMATIC FULL-SCREEN BACKGROUND 
        Crossfades based on the currently active hovered/tapped service
      */}
      <div className={styles.bgViewport}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            className={styles.bgImage}
            style={{ backgroundImage: `url(${servicesList[activeIdx].bg})` }}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 0.8, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={`container ${styles.contentWrapper}`}>
        
        {/* Title Header */}
        <div className={styles.headerBlock}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionBadge}
          >
             <Zap size={14} /> Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Digital <span className="text-gradient">Evolution.</span>
          </motion.h2>
        </div>

        {/* Cinematic Accordion List */}
        <div className={styles.accList}>
          {servicesList.map((service, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <motion.div 
                key={service.id}
                className={`${styles.accItem} ${isActive ? styles.accItemActive : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.itemTitleGroup}>
                    <span className={styles.itemNum}>
                      {service.id.padStart(2, '0')}
                    </span>
                    <h3 className={styles.itemTitle}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Indicator for Mobile users */}
                  <div className={styles.toggleIcon}>
                    <motion.div 
                      animate={{ rotate: isActive ? 45 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className={styles.cross}
                    >
                      +
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      className={styles.itemBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className={styles.bodyContent}>
                        <div className={styles.bodyText}>
                          <p className={styles.desc}>{service.desc}</p>
                          <a 
                            href="https://wa.me/919995066663?text=Hello%20Exatech%20IT%20Solutions,%20I%20am%20ready%20to%20engineer%20my%20business%20to%20the%20next%20level."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.exploreBtn}
                          >
                            Deploy Initiative <ArrowRight size={18} />
                          </a>
                        </div>
                        <div className={styles.bodyVisual}>
                          <div className={styles.iconWrapper}>
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

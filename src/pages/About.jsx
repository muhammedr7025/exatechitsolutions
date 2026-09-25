import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import StatsStrip from '../components/StatsStrip';
import WhyUs from '../components/home/WhyUs';
import Icon from '../lib/Icon';
import { useAboutPage, useHomeDoc } from '../cms/hooks';
import { isShown } from '../cms/resolve';
import { usePageMeta } from '../hooks/usePageMeta';
import styles from './About.module.css';

export default function About() {
  const page = useAboutPage();
  const whyUs = useHomeDoc();

  usePageMeta(page.seoTitle, page.seoDescription);

  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} /> {page.eyebrow}
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
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {page.lead}
          </motion.p>
        </div>
      </section>

      {page.stats.length > 0 && <StatsStrip stats={page.stats} />}

      {page.missionCards.length > 0 && (
        <section className={`section ${styles.missionSection}`}>
          <div className={`container ${styles.missionGrid}`}>
            {page.missionCards.map((card, i) => (
              <div className={styles.missionCard} key={`${i}-${card.title}`}>
                <div className={styles.missionIcon}><Icon name={card.icon} size={26} /></div>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.body?.length > 0 && (
        <section className={`section ${styles.missionSection}`}>
          <div className="container">
            <div className={styles.story}>
              <PortableText value={page.body} />
            </div>
          </div>
        </section>
      )}

      {isShown(page.showWhyUs) && whyUs.whyUsItems.length > 0 && <WhyUs content={whyUs} />}
    </>
  );
}

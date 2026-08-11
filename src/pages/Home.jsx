import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import WhyUs from '../components/home/WhyUs';
import ServicesTeaser from '../components/home/ServicesTeaser';
import ProcessSection from '../components/home/ProcessSection';
import PortfolioTeaser from '../components/home/PortfolioTeaser';
import { usePageMeta } from '../hooks/usePageMeta';

const HOME_STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '2M+', label: 'End Users Served' },
  { value: '500+', label: 'Campaigns Run' },
  { value: '24/7', label: 'Support Coverage' },
];

export default function Home() {
  usePageMeta(
    'Premium Web, Mobile & ERP Engineering',
    'A premium technology collective pioneering web development, AI capabilities, intelligent scalable ERP, and custom business automation frameworks.'
  );

  return (
    <>
      <Hero />
      <StatsStrip stats={HOME_STATS} />
      <WhyUs />
      <ServicesTeaser />
      <ProcessSection />
      <PortfolioTeaser />
    </>
  );
}

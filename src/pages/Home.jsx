import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import WhyUs from '../components/home/WhyUs';
import ServicesTeaser from '../components/home/ServicesTeaser';
import ProcessSection from '../components/home/ProcessSection';
import PortfolioTeaser from '../components/home/PortfolioTeaser';
import ClientLogos from '../components/home/ClientLogos';
import Testimonials from '../components/home/Testimonials';
import Certifications from '../components/home/Certifications';
import { useHomePage } from '../cms/hooks';
import { isShown } from '../cms/resolve';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Home() {
  const { page, services, projects, clients, testimonials, certifications } = useHomePage();

  usePageMeta(page.seoTitle, page.seoDescription);

  // Every section can be switched off in Studio. Client logos, testimonials and
  // certifications also stay hidden until at least one has been added.
  return (
    <>
      <Hero content={page} />
      {isShown(page.showStats) && page.stats.length > 0 && <StatsStrip stats={page.stats} />}
      {isShown(page.showClients) && clients.length > 0 && <ClientLogos content={page} clients={clients} />}
      {isShown(page.showWhyUs) && page.whyUsItems.length > 0 && <WhyUs content={page} />}
      {isShown(page.showServices) && services.length > 0 && <ServicesTeaser content={page} services={services} />}
      {isShown(page.showProcess) && page.processSteps.length > 0 && <ProcessSection content={page} />}
      {isShown(page.showPortfolio) && projects.length > 0 && <PortfolioTeaser content={page} projects={projects} />}
      {isShown(page.showTestimonials) && testimonials.length > 0 && (
        <Testimonials content={page} testimonials={testimonials} />
      )}
      {isShown(page.showCertifications) && certifications.length > 0 && (
        <Certifications content={page} certifications={certifications} />
      )}
    </>
  );
}

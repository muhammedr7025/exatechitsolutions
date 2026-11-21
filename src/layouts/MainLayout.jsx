import { Outlet } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SiteProvider from '../cms/SiteProvider';

// SiteProvider lives here (not in main.jsx) so the lazy-loaded /studio route
// never runs the marketing-site queries.
// MotionConfig reducedMotion="user": visitors who turned on "reduce motion" in
// their OS get instant transitions instead of slides/zooms/parallax.
export default function MainLayout() {
  return (
    <SiteProvider>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MotionConfig>
    </SiteProvider>
  );
}

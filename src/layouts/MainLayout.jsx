import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SiteProvider from '../cms/SiteProvider';

// SiteProvider lives here (not in main.jsx) so the lazy-loaded /studio route
// never runs the marketing-site queries.
export default function MainLayout() {
  return (
    <SiteProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteProvider>
  );
}

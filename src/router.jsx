import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServicesIndex from './pages/ServicesIndex';
import ServiceDetail from './pages/ServiceDetail';
import SubServiceDetail from './pages/SubServiceDetail';
import PortfolioPage from './pages/PortfolioPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import StudioLazy from './pages/StudioLazy';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <ServicesIndex /> },
      { path: '/services/:slug', element: <ServiceDetail /> },
      { path: '/services/:slug/:subSlug', element: <SubServiceDetail /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/studio/*',
    element: <StudioLazy />,
  },
]);


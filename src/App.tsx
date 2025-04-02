import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ScrollToTop component to handle scrolling to top when route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

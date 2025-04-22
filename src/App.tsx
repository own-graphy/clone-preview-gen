
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetricsSection from './components/home/ImpactMetricsSection';
import CaseStudiesSection from './components/home/CaseStudiesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import CtaSection from './components/home/CtaSection';
import Footer from './components/Footer';
// Import all the page sections
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/Services';

const SectionWrapper: React.FC<{
  id: string; 
  title: string; 
  children: React.ReactNode; 
  shortContent?: React.ReactNode;
}> = ({ id, title, children, shortContent }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {showMore || !shortContent ? (
          <>
            {children}
            {shortContent && (
              <button 
                className="mt-6 bg-primary text-white px-6 py-2 rounded-full"
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            )}
          </>
        ) : (
          <>
            {shortContent}
            <button 
              className="mt-6 bg-primary text-white px-6 py-2 rounded-full"
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>
          </>
        )}
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  // Section refs for smooth scrolling
  const sections = {
    hero: useRef<HTMLElement>(null),
    offerings: useRef<HTMLElement>(null),
    caseStudies: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    careers: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollTo = (id: keyof typeof sections) => {
    const el = sections[id].current;
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <div ref={sections.hero}>
        <Hero />
      </div>
      <div ref={sections.offerings}>
        {/* Offerings section, using existing code */}
        <SectionWrapper
          id="offerings"
          title="Our Offerings"
          shortContent={<ImpactMetricsSection />}
        >
          <Services />
        </SectionWrapper>
      </div>
      <div ref={sections.caseStudies}>
        <SectionWrapper
          id="case-studies"
          title="Case Studies"
          shortContent={undefined}
        >
          <CaseStudiesSection />
        </SectionWrapper>
      </div>
      <div ref={sections.about}>
        <SectionWrapper
          id="about"
          title="About Us"
          shortContent={undefined}
        >
          <About />
        </SectionWrapper>
      </div>
      <div ref={sections.careers}>
        <SectionWrapper
          id="careers"
          title="Careers"
          shortContent={undefined}
        >
          <Careers />
        </SectionWrapper>
      </div>
      <div ref={sections.contact}>
        <SectionWrapper
          id="contact"
          title="Contact"
          shortContent={undefined}
        >
          <Contact />
        </SectionWrapper>
      </div>
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return <LandingPage />;
};

export default App;

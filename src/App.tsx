
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import SectionWrapper from './components/SectionWrapper';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import InsightsSection from './components/InsightsSection';
import Footer from './components/Footer';

// Section anchors for smooth scrolling
const SECTIONS = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About Us' },
  { id: 'services', title: 'Services' },
  { id: 'insights', title: 'Insights' },
  { id: 'cases', title: 'Case Studies' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'contact', title: 'Contact' },
];

const App: React.FC = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    insights: useRef<HTMLDivElement>(null),
    cases: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (id: keyof typeof sectionRefs) => {
    const ref = sectionRefs[id];
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 65, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-darkGray">
      <Navbar sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <main>
        <section ref={sectionRefs.hero} id="hero" className="relative">
          <HeroSlider onFreeConsult={() => scrollToSection('contact')} />
        </section>
        <div ref={sectionRefs.about} id="about">
          <SectionWrapper id="about" title="About Us" shortContent={<AboutSection short />}>
            <AboutSection />
          </SectionWrapper>
        </div>
        <div ref={sectionRefs.services} id="services">
          <SectionWrapper id="services" title="Our Services" shortContent={<ServicesSection short />}>
            <ServicesSection />
          </SectionWrapper>
        </div>
        <div ref={sectionRefs.insights} id="insights" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <InsightsSection />
          </div>
        </div>
        <div ref={sectionRefs.cases} id="cases">
          <SectionWrapper id="cases" title="Case Studies" shortContent={<CaseStudiesSection short />}>
            <CaseStudiesSection />
          </SectionWrapper>
        </div>
        <div ref={sectionRefs.testimonials} id="testimonials">
          <SectionWrapper id="testimonials" title="Testimonials">
            <TestimonialsSection />
          </SectionWrapper>
        </div>
        <div ref={sectionRefs.contact} id="contact">
          <SectionWrapper id="contact" title="Contact">
            <ContactSection />
          </SectionWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

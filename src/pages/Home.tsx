
import React from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import ImpactMetricsSection from '@/components/home/ImpactMetricsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Home: React.FC = () => {
  // Add smooth scrolling for anchor links
  React.useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main>
      <Hero />
      <ServicesSection />
      <ImpactMetricsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
};

export default Home;

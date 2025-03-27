
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ServicesHighlightsSection from './ServicesHighlightsSection';
import WhoWeAreSection from './WhoWeAreSection';
import CaseStudiesSection from './CaseStudiesSection';
import OurImpactSection from './OurImpactSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudyModal from './CaseStudyModal';
import { caseStudiesData } from '@/data/caseStudies';

const Hero: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = (id: string) => {
    setActiveCaseStudy(id);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  const selectedCaseStudy = activeCaseStudy 
    ? caseStudiesData.find(cs => cs.id === activeCaseStudy) || null
    : null;

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-darkGray to-darkGray"></div>
      
      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Services Highlights Section */}
      <ServicesHighlightsSection />
      
      {/* Who We Are Section */}
      <WhoWeAreSection />
      
      {/* Case Studies Section */}
      <CaseStudiesSection onSelectCaseStudy={openCaseStudy} />
      
      {/* Our Impact Section */}
      <OurImpactSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Case Study Modal */}
      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={closeCaseStudy} />
    </section>
  );
};

export default Hero;

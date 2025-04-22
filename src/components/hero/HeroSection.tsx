
import React from 'react';
import HeroSliderSection from './HeroSliderSection';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <HeroSliderSection />
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudiesData } from '@/data/caseStudies';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (id: string) => void;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Case Studies</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real results we've achieved for our clients.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {caseStudiesData.map((caseStudy) => (
          <CaseStudyCard 
            key={caseStudy.id} 
            caseStudy={caseStudy} 
            onSelect={onSelectCaseStudy} 
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;

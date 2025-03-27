
import React from 'react';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect: (id: string) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onSelect }) => {
  return (
    <div 
      className="group relative cursor-pointer"
      onClick={() => onSelect(caseStudy.id)}
    >
      <div className="glass p-6 rounded-xl group-hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{caseStudy.title}</h3>
        
        {/* Hover effect - Popover */}
        <div className="absolute inset-0 bg-darkGray/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
          <p className="text-sm text-gray-200">{caseStudy.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;

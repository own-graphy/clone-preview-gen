
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;
  
  return (
    <div className="fixed inset-0 bg-darkGray/95 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-white hover:text-gray-300 p-2"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-auto rounded-xl shadow-lg" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Case+Study';
                }}
              />
            </div>
            <div className="text-white">
              <div className="text-sm font-medium text-primary mb-3">Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.title}</h2>
              <p className="text-lg mb-6">{caseStudy.description}</p>
              <p className="text-gray-300 mb-8">{caseStudy.fullDescription}</p>
              <Link 
                to="/case-studies" 
                className="bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-default inline-flex items-center"
              >
                View More Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;

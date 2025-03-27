
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, category, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
          }}
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-primary mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/case-studies" className="text-primary font-medium inline-flex items-center">
          Read Case Study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;

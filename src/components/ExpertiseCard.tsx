
import React from 'react';
import { ArrowRight } from 'lucide-react';

// Card data structure
export interface ExpertiseCardProps {
  id: string;
  category: string;
  type: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CardProps {
  card: ExpertiseCardProps;
  isSelected: boolean;
  onClick: () => void;
}

const ExpertiseCard: React.FC<CardProps> = ({ card, isSelected, onClick }) => {
  // Handle content visibility based on selection state
  const contentVisibilityClass = isSelected 
    ? "opacity-100 max-h-[200px] transition-all duration-500 ease-out" 
    : "opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out";

  return (
    <div 
      className={`expertise-card cursor-pointer bg-white h-full w-full border border-gray-200 shadow-sm 
        transition-all duration-300 ${isSelected ? 'shadow-lg' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
          />
        </div>
        
        {/* Category */}
        <div className="px-5 pt-4">
          <div className="text-primary font-medium text-sm">{card.category}</div>
        </div>
        
        {/* Content */}
        <div className="px-5 pb-5 flex flex-col flex-grow">
          {/* Type and Date */}
          <div className="flex items-center justify-between my-2">
            <div className="text-xs font-medium text-gray-500 uppercase">{card.type}</div>
            <div className="text-xs text-gray-400">{card.date}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold mb-3 line-clamp-3 text-gray-900">{card.title}</h3>
          
          {/* Description - shown only when selected */}
          <div className={contentVisibilityClass}>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{card.description}</p>
            <a href={card.link} className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-auto">
              Learn More <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;

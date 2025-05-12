
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
  visualState: 'small' | 'medium' | 'large';
}

const ExpertiseCard: React.FC<CardProps> = ({ card, isSelected, onClick, visualState }) => {
  // Get card styling based on its visual state and selection status
  const getCardClass = () => {
    const baseClass = "relative overflow-hidden shadow-sm transition-all duration-500 h-full";
    
    if (isSelected) {
      return `${baseClass} shadow-lg transform scale-100 z-20 opacity-100`;
    }
    
    switch (visualState) {
      case 'small':
        return `${baseClass} transform scale-75 opacity-50`;
      case 'medium':
        return `${baseClass} transform scale-85 opacity-70`;
      case 'large':
        return `${baseClass} transform scale-95 opacity-90`;
      default:
        return baseClass;
    }
  };
  
  // Dynamic styles for content visibility
  const contentVisibilityClass = isSelected 
    ? "max-h-[200px] opacity-100 transition-all duration-300 ease-in-out" 
    : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out";
  
  return (
    <div 
      className={`expertise-card cursor-pointer ${getCardClass()}`}
      onClick={onClick}
    >
      <div className="bg-white h-full rounded-lg border border-gray-200 overflow-hidden flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Category */}
        <div className="px-4 pt-4">
          <div className="text-primary font-medium text-sm mb-2">{card.category}</div>
        </div>
        
        {/* Content */}
        <div className="px-4 pb-4 flex flex-col flex-grow">
          {/* Type and Date */}
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-medium text-gray-500 uppercase">{card.type}</div>
            <div className="text-xs text-gray-400">{card.date}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-base md:text-lg font-bold mb-2 line-clamp-3 text-gray-900">{card.title}</h3>
          
          {/* Description - shown only when selected */}
          <div className={contentVisibilityClass}>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{card.description}</p>
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

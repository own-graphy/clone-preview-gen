
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
  cardPosition: 'far-left' | 'left' | 'center' | 'right' | 'far-right';
}

const ExpertiseCard: React.FC<CardProps> = ({ card, isSelected, onClick, cardPosition }) => {
  // Get card styling based on its position
  const getCardClass = () => {
    // Base classes for all cards
    const baseClass = "rounded-none overflow-hidden border border-gray-200 transition-all duration-500 ease-out shadow-sm";
    
    // Position-specific styling
    switch (cardPosition) {
      case 'far-left':
        return `${baseClass} opacity-60 scale-[0.85] z-10`;
      case 'left':
        return `${baseClass} opacity-75 scale-[0.9] z-20`;
      case 'center':
        return `${baseClass} opacity-100 scale-[1.02] shadow-lg z-30`;
      case 'right':
        return `${baseClass} opacity-75 scale-[0.9] z-20`;
      case 'far-right':
        return `${baseClass} opacity-60 scale-[0.85] z-10`;
      default:
        return baseClass;
    }
  };
  
  // Hide/show content based on selection state
  const contentVisibilityClass = isSelected 
    ? "opacity-100 max-h-[200px] translate-y-0 transition-all duration-300 ease-in-out" 
    : "opacity-0 max-h-0 -translate-y-4 overflow-hidden transition-all duration-300 ease-in-out";

  return (
    <div 
      className={`expertise-card cursor-pointer bg-white h-full ${getCardClass()}`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
          />
        </div>
        
        {/* Category */}
        <div className="px-5 pt-4">
          <div className="text-primary font-medium text-sm">{card.category}</div>
        </div>
        
        {/* Content */}
        <div className="px-5 pb-4 flex flex-col flex-grow">
          {/* Type and Date */}
          <div className="flex items-center justify-between my-2">
            <div className="text-xs font-medium text-gray-500 uppercase">{card.type}</div>
            <div className="text-xs text-gray-400">{card.date}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold mb-2 line-clamp-3 text-gray-900">{card.title}</h3>
          
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

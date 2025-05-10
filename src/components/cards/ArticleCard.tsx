
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ArticleCardProps {
  id: string;
  image: string;
  category: string;
  type: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  category,
  type,
  date,
  title,
  description,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = link}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Article';
          }}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow p-5 transition-all duration-300 ${isHovered ? 'bg-gray-50' : 'bg-white'}`}>
        {/* Category */}
        <div className="mb-2">
          <div className="text-primary font-medium text-sm">{category}</div>
        </div>

        {/* Content header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs font-medium text-gray-500 uppercase">{type}</div>
          <div className="text-xs text-gray-400">{date}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>

        {/* Description - Only visible when hovered */}
        <div 
          className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'} overflow-hidden`}
        >
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        </div>

        {/* Learn More button - Only visible when hovered */}
        <div className={`mt-auto transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link 
            to={link} 
            className="inline-flex items-center text-primary font-medium hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

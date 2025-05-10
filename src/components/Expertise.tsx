
import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

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

// Sample data for the expertise cards
const EXPERTISE_CARDS: ExpertiseCardProps[] = [
  {
    id: '1',
    category: 'Corporate Finance and Strategy',
    type: 'Article',
    date: 'May 2, 2025',
    title: 'The 2025 Value Creators Rankings: After a Decade of Growth, What's Next?',
    description: 'Which industries and regions came out on top last year—and what will drive success in today\'s uncertain economic landscape?',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=Finance',
    link: '/insights/finance'
  },
  {
    id: '2',
    category: 'Asset Management',
    type: 'Report',
    date: 'April 29, 2025',
    title: 'Global Asset Management Report 2025: From Recovery to Reinvention',
    description: 'To continue on the path to growth, asset managers must adapt to the new market forces that are reshaping the industry.',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=Asset',
    link: '/insights/asset'
  },
  {
    id: '3',
    category: 'M&A, Transactions, and PMI',
    type: 'Article',
    date: 'April 30, 2025',
    title: 'Tariffs Are Changing the Dealmaking Landscape. CEOs Need to Prepare.',
    description: 'While conditions are less than ideal for initiating deal discussions, companies need to be ready to move when the business environment finds its new footing.',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=M%26A',
    link: '/insights/ma'
  },
  {
    id: '4',
    category: 'Technology, Media, and Telecommunications',
    type: 'Article',
    date: 'May 2, 2025',
    title: 'Amid Tariffs, Cost Control Now Rivals Growth as the Top Priority',
    description: 'In the face of recent tariff proposals and widespread economic uncertainty, IT leaders are prioritizing controlling costs—and doubling down on AI investments to help manage budgets and boost productivity.',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=Tech',
    link: '/insights/tech'
  },
  {
    id: '5',
    category: 'Corporate Finance and Strategy',
    type: 'Report',
    date: 'April 30, 2025',
    title: 'The Vitality Code: How Growth Leaders Master Strategy, Technology, People, and Culture',
    description: 'Corporate vitality is a proprietary measure that BCG developed to assess a company\'s potential for long-term growth. Find out how leading companies outperform their peers.',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=Vitality',
    link: '/insights/vitality'
  },
  {
    id: '6',
    category: 'Artificial Intelligence',
    type: 'Article',
    date: 'April 24, 2025',
    title: 'When Companies Struggle to Adopt AI, CEOs Must Step Up',
    description: 'AI only delivers impact when employees embrace it. And that only happens when the CEO leads the charge.',
    image: 'https://placehold.co/600x800/2563eb/FFFFFF?text=AI',
    link: '/insights/ai'
  }
];

const ExpertiseCard: React.FC<{
  card: ExpertiseCardProps;
  isSelected: boolean;
  onClick: () => void;
}> = ({ card, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`expertise-card cursor-pointer transition-all duration-500 ${
        isSelected ? 'scale-105 shadow-xl z-20' : 'scale-95 opacity-70'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-lg shadow-md bg-white border border-gray-200">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-2">
            <div className="text-primary font-medium text-sm">{card.category}</div>
          </div>
          
          {/* Type and Date */}
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-medium text-gray-500 uppercase">{card.type}</div>
            <div className="text-xs text-gray-400">{card.date}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 line-clamp-3 text-gray-900">{card.title}</h3>
          
          {/* Description - expanded when selected */}
          <div className={`transition-all duration-300 ${
            isSelected ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <div className="mt-4">
              <a href={card.link} className="inline-flex items-center text-primary font-medium hover:underline">
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string>('3'); // Start with middle card selected
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handleCardClick = (id: string) => {
    setSelectedCard(id);
    
    // Scroll the selected card to center if on mobile
    if (window.innerWidth < 768 && carouselRef.current) {
      const element = document.getElementById(`expertise-card-${id}`);
      if (element) {
        const scrollPosition = element.offsetLeft - (carouselRef.current.offsetWidth / 2) + (element.offsetWidth / 2);
        carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  };
  
  const handlePrevClick = () => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : EXPERTISE_CARDS.length - 1;
    setSelectedCard(EXPERTISE_CARDS[prevIndex].id);
  };
  
  const handleNextClick = () => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const nextIndex = currentIndex < EXPERTISE_CARDS.length - 1 ? currentIndex + 1 : 0;
    setSelectedCard(EXPERTISE_CARDS[nextIndex].id);
  };
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest insights and research across different industries and capabilities
        </p>
        
        <div className="relative">
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 px-8 md:px-12 w-max">
              {EXPERTISE_CARDS.map(card => (
                <div 
                  key={card.id}
                  id={`expertise-card-${card.id}`}
                  className="w-72 md:w-80 flex-shrink-0 snap-center transition-transform duration-500 transform"
                >
                  <ExpertiseCard 
                    card={card}
                    isSelected={selectedCard === card.id}
                    onClick={() => handleCardClick(card.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              onClick={handlePrevClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              onClick={handleNextClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

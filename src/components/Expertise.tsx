import React, { useState, useRef, useEffect } from 'react';
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
    title: "The 2025 Value Creators Rankings: After a Decade of Growth, What's Next?",
    description: "Which industries and regions came out on top last year—and what will drive success in today's uncertain economic landscape?",
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
    description: "Corporate vitality is a proprietary measure that BCG developed to assess a company's potential for long-term growth. Find out how leading companies outperform their peers.",
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
  size: 'small' | 'medium' | 'large';
  isSelected: boolean;
  onClick: () => void;
}> = ({ card, size, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Adjust scale and opacity based on card size
  const getCardClass = () => {
    const baseClass = "expertise-card cursor-pointer transition-all duration-500";
    
    if (isSelected) {
      return `${baseClass} scale-105 shadow-xl z-20`;
    }
    
    switch (size) {
      case 'small':
        return `${baseClass} scale-75 opacity-60`;
      case 'medium':
        return `${baseClass} scale-85 opacity-70`;
      case 'large':
        return `${baseClass} scale-100 opacity-85`;
      default:
        return baseClass;
    }
  };
  
  return (
    <div 
      className={getCardClass()}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-lg shadow-md bg-white border border-gray-200">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <div className="mb-2">
            <div className="text-primary font-medium text-sm">{card.category}</div>
          </div>
          
          {/* Type and Date */}
          <div className="mb-2 flex items-center justify-between">
            <div className="text-xs font-medium text-gray-500 uppercase">{card.type}</div>
            <div className="text-xs text-gray-400">{card.date}</div>
          </div>
          
          {/* Title */}
          <h3 className="text-base md:text-lg font-bold mb-2 line-clamp-3 text-gray-900">{card.title}</h3>
          
          {/* Description - expanded when selected */}
          <div className={`transition-all duration-300 ${
            isSelected ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{card.description}</p>
            <div className="mt-2">
              <a href={card.link} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Learn More <ArrowRight size={14} className="ml-1" />
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
  const [visibleCards, setVisibleCards] = useState<ExpertiseCardProps[]>([]);
  const [centerIndex, setCenterIndex] = useState(2); // Center card index (0-based)
  
  // Calculate visible cards and their sizes
  useEffect(() => {
    // Get the selected card index
    const selectedIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    
    // Calculate the center index (should be 2 for a 5-card display)
    const newCenterIndex = 2;
    setCenterIndex(newCenterIndex);
    
    // Calculate the start index to ensure the selected card is in the center
    let startIndex = selectedIndex - newCenterIndex;
    
    // Handle edge cases
    if (startIndex < 0) {
      startIndex = 0;
    } else if (startIndex + 5 > EXPERTISE_CARDS.length) {
      startIndex = Math.max(0, EXPERTISE_CARDS.length - 5);
    }
    
    // Get the 5 visible cards
    const newVisibleCards = EXPERTISE_CARDS.slice(startIndex, startIndex + 5);
    
    // If we don't have 5 cards, pad with duplicates from the start
    while (newVisibleCards.length < 5) {
      newVisibleCards.push(EXPERTISE_CARDS[newVisibleCards.length % EXPERTISE_CARDS.length]);
    }
    
    setVisibleCards(newVisibleCards);
  }, [selectedCard]);
  
  const handleCardClick = (id: string) => {
    setSelectedCard(id);
    
    // Center the clicked card with smooth animation
    if (carouselRef.current) {
      const element = document.getElementById(`expertise-card-${id}`);
      if (element) {
        // Calculate the position to center the card
        const carouselCenter = carouselRef.current.offsetWidth / 2;
        const cardCenter = element.offsetLeft + (element.offsetWidth / 2);
        const scrollPosition = cardCenter - carouselCenter;
        
        // Smooth scroll to center
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
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
  
  // Determine card size based on position relative to center
  const getCardSize = (index: number): 'small' | 'medium' | 'large' => {
    const distanceFromCenter = Math.abs(index - centerIndex);
    
    if (distanceFromCenter === 0) {
      return 'large';
    } else if (distanceFromCenter === 1) {
      return 'medium';
    } else {
      return 'small';
    }
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Expertise</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our latest insights and research across different industries and capabilities
        </p>
        
        {/* Card Carousel - limiting height to 50vh */}
        <div className="relative" style={{ height: '50vh', maxHeight: '50vh' }}>
          <div 
            ref={carouselRef}
            className="flex justify-center items-center h-full overflow-hidden hide-scrollbar"
          >
            <div className="flex items-center justify-center space-x-4 md:space-x-6 px-4">
              {visibleCards.map((card, index) => (
                <div 
                  key={`${card.id}-${index}`}
                  id={`expertise-card-${card.id}`}
                  className="transition-all duration-500 transform"
                  style={{
                    width: index === centerIndex ? '340px' : index === centerIndex - 1 || index === centerIndex + 1 ? '280px' : '240px',
                    transformOrigin: 'center center',
                    transform: `translateX(${(index - centerIndex) * 20}px) scale(${
                      index === centerIndex ? 1 : 
                      index === centerIndex - 1 || index === centerIndex + 1 ? 0.85 : 0.75
                    })`,
                    opacity: index === centerIndex ? 1 : 
                           index === centerIndex - 1 || index === centerIndex + 1 ? 0.7 : 0.5,
                    zIndex: 10 - Math.abs(index - centerIndex)
                  }}
                >
                  <ExpertiseCard 
                    card={card}
                    size={getCardSize(index)}
                    isSelected={selectedCard === card.id}
                    onClick={() => handleCardClick(card.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6 mb-4 space-x-4">
            <Button 
              onClick={handlePrevClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              onClick={handleNextClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white"
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

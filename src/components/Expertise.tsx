
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ExpertiseCard, { ExpertiseCardProps } from './ExpertiseCard';

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

const Expertise: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string>('3'); // Start with middle card
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Visible cards in display (5 cards including center and edges)
  const [visibleCards, setVisibleCards] = useState<ExpertiseCardProps[]>([]);
  
  // Calculate visible cards based on selected card
  useEffect(() => {
    const selectedIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    let cards: ExpertiseCardProps[] = [];
    
    // Get 2 cards before
    for (let i = selectedIndex - 2; i < selectedIndex; i++) {
      const index = i < 0 ? EXPERTISE_CARDS.length + i : i;
      cards.push(EXPERTISE_CARDS[index]);
    }
    
    // Add selected card
    cards.push(EXPERTISE_CARDS[selectedIndex]);
    
    // Get 2 cards after
    for (let i = selectedIndex + 1; i <= selectedIndex + 2; i++) {
      const index = i >= EXPERTISE_CARDS.length ? i - EXPERTISE_CARDS.length : i;
      cards.push(EXPERTISE_CARDS[index]);
    }
    
    setVisibleCards(cards);
  }, [selectedCard]);
  
  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, selectedCard]);
  
  // Navigation
  const handleNextClick = () => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const nextIndex = (currentIndex + 1) % EXPERTISE_CARDS.length;
    setSelectedCard(EXPERTISE_CARDS[nextIndex].id);
  };
  
  const handlePrevClick = () => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : EXPERTISE_CARDS.length - 1;
    setSelectedCard(EXPERTISE_CARDS[prevIndex].id);
  };
  
  // Calculate card's visual state based on its position
  const getCardVisualState = (index: number): 'small' | 'medium' | 'large' => {
    switch (index) {
      case 0: // Far left
      case 4: // Far right
        return 'small';
      case 1: // Left
      case 3: // Right
        return 'medium';
      case 2: // Center
        return 'large';
      default:
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
        
        {/* Card Carousel Container - 50vh height */}
        <div className="relative" style={{ height: '50vh', maxHeight: '50vh' }}>
          <div className="flex items-center justify-center h-full overflow-hidden">
            {/* Cards Container */}
            <div className="relative flex items-center justify-center">
              {visibleCards.map((card, index) => {
                const isCenter = index === 2;
                const visualState = getCardVisualState(index);
                
                // Calculate position and style based on index
                const getCardStyle = () => {
                  // Base width depends on position
                  const baseWidth = isCenter ? 340 : index === 1 || index === 3 ? 280 : 240;
                  
                  // Calculate horizontal offset 
                  const offsetX = (index - 2) * 120; // 120px offset between cards
                  
                  return {
                    width: `${baseWidth}px`,
                    transform: `translateX(${offsetX}px)`,
                    zIndex: 10 - Math.abs(index - 2),
                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
                  };
                };
                
                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="absolute transition-all duration-500 ease-in-out"
                    style={getCardStyle()}
                  >
                    <ExpertiseCard
                      card={card}
                      isSelected={selectedCard === card.id}
                      onClick={() => setSelectedCard(card.id)}
                      visualState={visualState}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            {/* Play/Pause Button */}
            <Button 
              onClick={() => setAutoPlay(!autoPlay)}
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white shadow-sm"
              aria-label={autoPlay ? "Pause autoplay" : "Play autoplay"}
            >
              {autoPlay ? (
                <span className="h-3 w-3 bg-primary block"></span>
              ) : (
                <span className="h-0 w-0 border-l-[10px] border-l-primary border-y-[6px] border-y-transparent ml-1"></span>
              )}
            </Button>
            
            {/* Previous Button */}
            <Button 
              onClick={handlePrevClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            {/* Next Button */}
            <Button 
              onClick={handleNextClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white shadow-sm"
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

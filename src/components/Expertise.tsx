
import React, { useState, useEffect, useCallback } from 'react';
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
  const [selectedCard, setSelectedCard] = useState<string>('4'); // Start with a middle card
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([]);
  
  // Move to next card
  const handleNextClick = useCallback(() => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const nextIndex = (currentIndex + 1) % EXPERTISE_CARDS.length;
    setSelectedCard(EXPERTISE_CARDS[nextIndex].id);
  }, [selectedCard]);
  
  // Move to previous card
  const handlePrevClick = useCallback(() => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : EXPERTISE_CARDS.length - 1;
    setSelectedCard(EXPERTISE_CARDS[prevIndex].id);
  }, [selectedCard]);
  
  // Update visible cards whenever selected card changes
  useEffect(() => {
    const selectedIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const totalCards = EXPERTISE_CARDS.length;
    
    // Calculate indices for the 5 visible cards
    const farLeftIndex = (selectedIndex - 2 + totalCards) % totalCards;
    const leftIndex = (selectedIndex - 1 + totalCards) % totalCards;
    const rightIndex = (selectedIndex + 1) % totalCards;
    const farRightIndex = (selectedIndex + 2) % totalCards;
    
    // Get the IDs of the cards to show
    setVisibleCardIds([
      EXPERTISE_CARDS[farLeftIndex].id, 
      EXPERTISE_CARDS[leftIndex].id,
      selectedCard,
      EXPERTISE_CARDS[rightIndex].id,
      EXPERTISE_CARDS[farRightIndex].id
    ]);
  }, [selectedCard]);
  
  // Autoplay
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, handleNextClick]);
  
  // Get card position type based on its index in the visible array
  const getCardPosition = (cardId: string): 'far-left' | 'left' | 'center' | 'right' | 'far-right' => {
    const index = visibleCardIds.indexOf(cardId);
    switch (index) {
      case 0: return 'far-left';
      case 1: return 'left';
      case 2: return 'center';
      case 3: return 'right';
      case 4: return 'far-right';
      default: return 'far-left'; // Fallback
    }
  };
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest insights and research across different industries and capabilities
        </p>
        
        {/* Carousel Container with fixed 50vh height */}
        <div className="relative h-[50vh] max-h-[600px] min-h-[400px]">
          {/* Cards Container */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="relative flex items-center justify-center h-full">
              {/* Only render visible cards for better performance */}
              {EXPERTISE_CARDS.filter(card => visibleCardIds.includes(card.id)).map((card) => {
                const position = getCardPosition(card.id);
                
                // Calculate horizontal position based on card's position in carousel
                const getTransformX = () => {
                  switch (position) {
                    case 'far-left': return '-500px';
                    case 'left': return '-250px';
                    case 'center': return '0px';
                    case 'right': return '250px';
                    case 'far-right': return '500px';
                    default: return '0px';
                  }
                };
                
                return (
                  <div
                    key={card.id}
                    className="absolute transition-all duration-500 ease-out"
                    style={{ 
                      transform: `translateX(${getTransformX()})`,
                      width: position === 'center' ? '320px' : '280px'
                    }}
                  >
                    <ExpertiseCard
                      card={card}
                      isSelected={selectedCard === card.id}
                      onClick={() => setSelectedCard(card.id)}
                      cardPosition={position}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
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
            
            {/* Navigation Buttons */}
            <Button 
              onClick={handlePrevClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
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


import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [selectedCard, setSelectedCard] = useState<string>('1');
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragDistance, setDragDistance] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

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
  
  // Mouse/Touch drag functionality
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragDistance(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const distance = clientX - dragStartX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // If dragged left (negative distance) more than threshold, go to next
    if (dragDistance < -70) {
      handleNextClick();
    } 
    // If dragged right (positive distance) more than threshold, go to prev
    else if (dragDistance > 70) {
      handlePrevClick();
    }
    
    setDragDistance(0);
  };

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, handleNextClick]);

  // Get card position for positioning in the carousel
  const getCardStyles = (index: number) => {
    const currentIndex = EXPERTISE_CARDS.findIndex(card => card.id === selectedCard);
    const totalCards = EXPERTISE_CARDS.length;
    
    // Calculate the relative position adjusting for wrap-around
    let relativePos = (index - currentIndex + totalCards) % totalCards;
    if (relativePos > totalCards / 2) relativePos -= totalCards;
    
    const baseZIndex = 10;
    const cardWidth = 300; // Base card width
    const gapWidth = 20;  // Gap between cards
    
    // Calculate transform values based on position
    let translateX = relativePos * (cardWidth + gapWidth);
    // Apply drag distance if currently dragging
    if (isDragging) {
      translateX += dragDistance;
    }
    
    // Calculate scale and opacity based on distance from center
    const distance = Math.abs(relativePos);
    const scale = distance === 0 ? 1 : 0.9 - (distance * 0.05);
    const opacity = distance === 0 ? 1 : 0.7 - (distance * 0.1);
    const zIndex = baseZIndex - distance;

    return {
      transform: `translateX(calc(${translateX}px))`,
      scale: scale.toString(),
      opacity: opacity,
      zIndex: zIndex,
      width: cardWidth,
    };
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest insights and research across different industries and capabilities
        </p>
        
        {/* Carousel Container */}
        <div 
          className="relative h-[500px] max-w-[1200px] mx-auto overflow-hidden"
          ref={carouselRef}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={() => handleDragEnd()}
          onMouseLeave={() => handleDragEnd()}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={() => handleDragEnd()}
        >
          {/* Cards Container */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
            {EXPERTISE_CARDS.map((card, index) => {
              const styles = getCardStyles(index);
              
              return (
                <div
                  key={card.id}
                  className="absolute transition-all duration-500 ease-out transform-gpu"
                  style={{ 
                    transform: styles.transform,
                    width: `${styles.width}px`,
                    zIndex: styles.zIndex,
                    opacity: styles.opacity,
                    scale: styles.scale
                  }}
                >
                  <ExpertiseCard
                    card={card}
                    isSelected={selectedCard === card.id}
                    onClick={() => setSelectedCard(card.id)}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Controls positioned at bottom-left */}
          <div className="absolute bottom-4 left-8 flex items-center space-x-3">
            {/* Play/Pause Button */}
            <Button 
              onClick={() => setAutoPlay(!autoPlay)}
              variant="outline" 
              size="icon" 
              className="rounded-full h-9 w-9 bg-white shadow-sm flex items-center justify-center"
              aria-label={autoPlay ? "Pause autoplay" : "Play autoplay"}
            >
              {autoPlay ? (
                <div className="h-3 w-3 bg-primary" />
              ) : (
                <div className="h-0 w-0 border-l-[8px] border-l-primary border-y-[5px] border-y-transparent ml-1" />
              )}
            </Button>
            
            {/* Navigation Buttons */}
            <Button 
              onClick={handlePrevClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-9 w-9 bg-white shadow-sm flex items-center justify-center"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              onClick={handleNextClick} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-9 w-9 bg-white shadow-sm flex items-center justify-center"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;


import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import ArticleCard, { ArticleCardProps } from './ArticleCard';

// Sample article data
const ARTICLES: ArticleCardProps[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80',
    category: 'Corporate Finance and Strategy',
    type: 'Article',
    date: 'May 2, 2025',
    title: 'The 2025 Value Creators Rankings: After a Decade of Growth, What\'s Next?',
    description: 'Which industries and regions came out on top last year—and what will drive success in today\'s uncertain economic landscape?',
    link: '/case-studies/value-creators'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    category: 'Asset Management',
    type: 'Report',
    date: 'April 29, 2025',
    title: 'Global Asset Management Report 2025: From Recovery to Reinvention',
    description: 'To continue on the path to growth, asset managers must adapt to the new market forces that are reshaping the industry.',
    link: '/case-studies/asset-management'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    category: 'M&A, Transactions, and PMI',
    type: 'Article',
    date: 'April 30, 2025',
    title: 'Tariffs Are Changing the Dealmaking Landscape. CEOs Need to Prepare.',
    description: 'While conditions are less than ideal for initiating deal discussions, companies need to be ready to move when the business environment finds its new footing.',
    link: '/case-studies/dealmaking'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80',
    category: 'Technology & Telecommunications',
    type: 'Article',
    date: 'May 2, 2025',
    title: 'Amid Tariffs, Cost Control Now Rivals Growth as the Top Priority',
    description: 'In the face of recent tariff proposals and widespread economic uncertainty, IT leaders are prioritizing controlling costs—and doubling down on AI investments to help manage budgets and boost productivity.',
    link: '/case-studies/cost-control'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    category: 'Artificial Intelligence',
    type: 'Article',
    date: 'April 24, 2025',
    title: 'When Companies Struggle to Adopt AI, CEOs Must Step Up',
    description: 'AI only delivers impact when employees embrace it. And that only happens when the CEO leads the charge.',
    link: '/case-studies/ai-adoption'
  },
];

const ArticleCarousel: React.FC = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  
  return (
    <div className="my-8">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="py-4">
          {ARTICLES.map((article) => (
            <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-2">
              <div className="h-full">
                <ArticleCard {...article} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-6 gap-2">
          <CarouselPrevious className="static translate-y-0 h-10 w-10" />
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-input"
            aria-label={autoPlay ? "Pause autoplay" : "Play autoplay"}
          >
            {autoPlay ? (
              <span className="h-3 w-3 bg-primary block"></span>
            ) : (
              <span className="h-0 w-0 border-l-[10px] border-l-primary border-y-[6px] border-y-transparent ml-1"></span>
            )}
          </button>
          <CarouselNext className="static translate-y-0 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default ArticleCarousel;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.setProperty('--delay', '0s');
      observer.observe(titleRef.current);
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.setProperty('--delay', '0.1s');
      observer.observe(subtitleRef.current);
    }
    
    if (ctaRef.current) {
      ctaRef.current.style.setProperty('--delay', '0.2s');
      observer.observe(ctaRef.current);
    }
    
    if (imageRef.current) {
      imageRef.current.style.setProperty('--delay', '0.3s');
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0 text-white"
          >
            Strategy Consulting
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-300 max-w-md opacity-0"
          >
            Transforming MSMEs through strategic solutions, expert guidance, and data-driven insights for sustainable growth.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
          >
            <Link to="/services" className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default inline-flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="glass-subtle font-medium px-8 py-3 rounded-full hover:bg-secondary/50 transition-default text-white">
              Free Consulting
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl filter blur-xl opacity-20 animate-pulse-subtle"></div>
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
            alt="Strategy Consulting" 
            className="relative rounded-2xl shadow-sm opacity-0 w-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't load
              (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Strategy+Consulting';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

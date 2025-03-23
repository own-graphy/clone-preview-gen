
import React, { useEffect, useRef } from 'react';
import { hero } from '../assets';

const Hero = () => {
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
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 via-white to-white"></div>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0"
            >
              Design the future with precision
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-muted-foreground max-w-md opacity-0"
            >
              Create stunning designs with our intuitive platform. Simplify your workflow and bring your ideas to life.
            </p>
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
            >
              <button className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
                Get Started
              </button>
              <button className="glass-subtle font-medium px-8 py-3 rounded-full hover:bg-secondary/50 transition-default">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl filter blur-3xl opacity-30 animate-pulse-subtle"></div>
            <img 
              ref={imageRef}
              src={hero} 
              alt="Design Interface" 
              className="relative rounded-2xl shadow-soft opacity-0 w-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/007AFF/FFFFFF?text=Design+Interface';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

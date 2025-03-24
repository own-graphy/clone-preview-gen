
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0"
            >
              Strategic Solutions for Growing Businesses
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-muted-foreground max-w-md opacity-0"
            >
              Helping MSMEs transform challenges into growth opportunities through proven consulting strategies.
            </p>
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
            >
              <Link to="/contact" className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default inline-flex items-center">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="glass-subtle font-medium px-8 py-3 rounded-full hover:bg-secondary/50 transition-default">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30 animate-pulse-subtle"></div>
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
              alt="Business Strategy Meeting" 
              className="relative rounded-2xl shadow-soft opacity-0 w-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Business+Strategy';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

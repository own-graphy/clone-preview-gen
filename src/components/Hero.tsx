
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-darkGray to-darkGray"></div>
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
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl filter blur-3xl opacity-30 animate-pulse-subtle"></div>
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
              alt="Strategy Consulting" 
              className="relative rounded-2xl shadow-soft opacity-0 w-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Strategy+Consulting';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Services Highlights */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceHighlight 
            title="Operational Excellence" 
            description="Optimize processes, reduce costs, and improve efficiency across your business."
          />
          <ServiceHighlight 
            title="Revenue Growth" 
            description="Strategic initiatives to accelerate your revenue growth and improve profitability."
          />
          <ServiceHighlight 
            title="Market Expansion" 
            description="Expand your market reach with data-driven strategies to enter new territories."
          />
          <ServiceHighlight 
            title="Innovation & Technology" 
            description="Leverage the latest technologies to drive innovation and digital transformation."
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceHighlightProps {
  title: string;
  description: string;
}

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ title, description }) => {
  return (
    <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default Hero;

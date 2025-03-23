
import React, { useState, useEffect, useRef } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: "Design Studio",
      description: "Our flagship design tool with everything you need to create stunning visuals, interfaces, and graphics.",
      features: ["Advanced vector editing", "Smart objects", "Real-time collaboration", "Cloud storage"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Prototype Pro",
      description: "Create interactive prototypes that look and feel like the real thing. Test ideas faster than ever before.",
      features: ["Interactive components", "Animation presets", "User flow mapping", "Feedback collection"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Analytics Hub",
      description: "Gain valuable insights about your designs with comprehensive analytics and user testing tools.",
      features: ["Heat maps", "User session recordings", "A/B testing", "Performance metrics"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

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
    
    if (tabsRef.current) {
      tabsRef.current.style.setProperty('--delay', '0.2s');
      observer.observe(tabsRef.current);
    }
    
    if (contentRef.current) {
      contentRef.current.style.setProperty('--delay', '0.3s');
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Our Products
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0"
          >
            Discover our suite of powerful design tools that help you bring your ideas to life.
          </p>
        </div>
        
        <div 
          ref={tabsRef}
          className="flex justify-center mb-8 opacity-0"
        >
          <div className="inline-flex rounded-lg glass p-1 mx-auto">
            {products.map((product, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm rounded-md font-medium transition-default ${
                  activeTab === index
                    ? "bg-white shadow-sm text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={contentRef}
          className="grid md:grid-cols-2 gap-8 items-center opacity-0"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{products[activeTab].title}</h3>
            <p className="text-lg text-muted-foreground mb-6">{products[activeTab].description}</p>
            <ul className="space-y-3 mb-8">
              {products[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2">
                    <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
              Try {products[activeTab].title} Free
            </button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl filter blur-3xl opacity-30"></div>
            <img 
              src={products[activeTab].image} 
              alt={products[activeTab].title} 
              className="relative rounded-2xl shadow-soft w-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).src = `https://placehold.co/800x600/007AFF/FFFFFF?text=${products[activeTab].title}`;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

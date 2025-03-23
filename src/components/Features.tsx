
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);

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

    if (featureRef.current) {
      featureRef.current.style.setProperty('--delay', `${0.1 * index}s`);
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={featureRef}
      className="bg-white rounded-2xl p-6 shadow-soft border border-gray-50 transition-default hover:shadow-lg hover:border-gray-100 opacity-0"
    >
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Intuitive Design",
      description: "Create beautiful designs with our drag-and-drop interface and extensive template library.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12H16" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Smart Automation",
      description: "Save time with AI-powered tools that automate repetitive tasks and optimize your workflow.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, no matter where you are in the world.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 10H16.01M12 10H12.01M8 10H8.01M4 8V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V12.1707C16 12.0648 16.0212 11.9608 16.0614 11.864L17.3775 8.43234C17.6418 7.77652 17.1548 7 16.4396 7H6C4.89543 7 4 7.89543 4 9V8Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights into your design performance with comprehensive analytics and reporting tools.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16V8M12 16V4M16 16V12" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Cross-Platform Support",
      description: "Design once, publish everywhere. Our platform supports all major devices and platforms.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 14L8 16L6.5 17.5M7 9L5 8L3 6.5M15 16L16 17.5L17.5 18.5M15.5 7.5L17 6L18.5 5.5M4 17L6.5 14.5M4 7L6.5 9.5M17.5 6.5L14.5 7.5M16.5 17L18 19" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      description: "Rest easy knowing your designs and data are protected with enterprise-grade security features.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            Features designed for precision
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0"
          >
            Our platform provides everything you need to create stunning designs quickly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

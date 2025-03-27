
import React from 'react';
import ServiceHighlight from './ServiceHighlight';

const ServicesHighlightsSection: React.FC = () => {
  return (
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
  );
};

export default ServicesHighlightsSection;

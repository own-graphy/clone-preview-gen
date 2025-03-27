
import React from 'react';

interface ServiceHighlightProps {
  title: string;
  description: string;
}

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ title, description }) => {
  return (
    <div className="glass p-6 rounded-xl group hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default ServiceHighlight;

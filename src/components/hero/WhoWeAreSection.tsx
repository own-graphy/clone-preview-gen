
import React from 'react';

const WhoWeAreSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We Are?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A team of experienced consultants dedicated to transforming businesses through strategic insights and actionable solutions.
        </p>
      </div>
      
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
        {/* Placeholder for video - Replace src with actual video */}
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Who We Are"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WhoWeAreSection;


import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, image }) => {
  return (
    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-700">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/6366F1/FFFFFF?text=Client';
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
      <p className="italic text-gray-300 text-sm">{quote}</p>
    </div>
  );
};

export default Testimonial;

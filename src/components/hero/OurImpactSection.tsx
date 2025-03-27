
import React from 'react';

const OurImpactSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Impact</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We measure our success by the tangible results we deliver to our clients.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-primary mb-2">200+</div>
          <h3 className="text-xl font-semibold mb-2 text-white">Projects Completed</h3>
          <p className="text-gray-300">Across multiple industries and business sizes.</p>
        </div>
        
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-primary mb-2">95%</div>
          <h3 className="text-xl font-semibold mb-2 text-white">Client Satisfaction</h3>
          <p className="text-gray-300">Our clients consistently rate us with top marks.</p>
        </div>
        
        <div className="glass p-8 rounded-xl text-center">
          <div className="text-4xl font-bold text-primary mb-2">$100M+</div>
          <h3 className="text-xl font-semibold mb-2 text-white">Revenue Generated</h3>
          <p className="text-gray-300">Additional revenue generated for our clients.</p>
        </div>
      </div>
    </div>
  );
};

export default OurImpactSection;

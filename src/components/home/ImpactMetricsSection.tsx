
import React from 'react';
import MetricCard from './MetricCard';

const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Business Impact</h2>
          <p className="text-lg text-gray-600">
            Our consulting services deliver measurable results for our clients across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard 
            number="3X"
            label="Revenue Growth"
            description="Average revenue increase for our clients within 12 months"
          />
          <MetricCard 
            number="10-20%"
            label="Cost Reduction"
            description="Typical reduction in sales and operational costs"
          />
          <MetricCard 
            number="40%"
            label="Efficiency Gain"
            description="Average improvement in operational efficiency"
          />
          <MetricCard 
            number="85%"
            label="Client Satisfaction"
            description="Clients report exceeding their business goals"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;

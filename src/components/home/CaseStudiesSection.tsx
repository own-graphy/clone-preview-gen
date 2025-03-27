
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Case Studies</h2>
          <p className="text-lg text-gray-600">
            Explore how we've helped businesses like yours transform challenges into opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            title="Manufacturing Company Triples Output"
            category="Operational Excellence"
            description="How we helped a manufacturing firm optimize their production processes and triple their output within 6 months."
          />
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            title="Tech Startup Secures $2M Funding"
            category="Growth Strategy"
            description="Strategic guidance that helped a technology startup refine their business model and secure venture capital."
          />
          <CaseStudyCard 
            image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            title="Retail Chain Expands to 15 Locations"
            category="Market Expansion"
            description="Developing a scalable growth strategy that enabled a local retailer to expand across the region."
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/case-studies" className="inline-flex items-center text-primary font-medium hover:underline">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

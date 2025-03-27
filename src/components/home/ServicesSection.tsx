
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, ArrowUpRight, ChartBar } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Strategic Consulting Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive business solutions tailored specifically for Micro, Small, and Medium Enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<TrendingUp className="h-8 w-8" />}
            title="Revenue Growth"
            description="Strategic initiatives to accelerate your revenue growth and improve profitability."
          />
          <ServiceCard 
            icon={<Zap className="h-8 w-8" />}
            title="Operational Excellence"
            description="Streamline operations to reduce costs and improve efficiency across all business functions."
          />
          <ServiceCard 
            icon={<ArrowUpRight className="h-8 w-8" />}
            title="Market Expansion"
            description="Expand your market reach with data-driven strategies to enter new territories."
          />
          <ServiceCard 
            icon={<ChartBar className="h-8 w-8" />}
            title="Innovation & Technology"
            description="Leverage the latest technologies to drive innovation and digital transformation."
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

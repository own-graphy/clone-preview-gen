
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Industries');
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              <button 
                onClick={() => handleFilterChange('All Industries')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === 'All Industries' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                All Industries
              </button>
              <button 
                onClick={() => handleFilterChange('Manufacturing')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === 'Manufacturing' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Manufacturing
              </button>
              <button 
                onClick={() => handleFilterChange('Retail')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === 'Retail' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Retail
              </button>
              <button 
                onClick={() => handleFilterChange('Technology')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === 'Technology' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Technology
              </button>
              <button 
                onClick={() => handleFilterChange('Healthcare')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeFilter === 'Healthcare' 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Healthcare
              </button>
            </div>
            
            {/* Featured Case Study */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-16">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                    alt="Featured Case Study" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm font-medium text-primary mb-2">Featured Case Study • Manufacturing</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">How We Helped ABC Manufacturing Triple Their Production Capacity</h2>
                  <p className="text-gray-600 mb-6">
                    Through operational excellence consulting, we identified bottlenecks and implemented lean manufacturing processes that dramatically increased output while reducing costs by 22%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">3X</div>
                      <div className="text-sm text-gray-500">Production Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">22%</div>
                      <div className="text-sm text-gray-500">Cost Reduction</div>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-primary font-medium hover:underline">
                    Read Full Case Study <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Case Studies Grid - Removed HoverCard/hover effects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="Tech Startup Secures $2M Funding"
                category="Growth Strategy"
                metrics={["$2M Funding", "18 Month Runway"]}
                description="Strategic guidance that helped a technology startup refine their business model and secure venture capital."
                fullContent="Our comprehensive startup advisory services included business model optimization, financial projections, pitch deck creation, and investor introductions. The client was able to secure $2M in Series A funding, extending their runway by 18 months and enabling them to hit critical product development milestones."
              />
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="Retail Chain Expands to 15 Locations"
                category="Market Expansion"
                metrics={["15 New Stores", "142% Revenue Growth"]}
                description="Developing a scalable growth strategy that enabled a local retailer to expand across the region."
                fullContent="We created a data-driven market expansion strategy for this retail chain, including location analytics, logistics optimization, and a standardized store opening playbook. The result was successful expansion from 3 to 15 locations in 24 months, with consistent profitability across all new locations and 142% overall revenue growth."
              />
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="Healthcare Provider Reduces Wait Times by 68%"
                category="Operational Excellence"
                metrics={["68% Time Reduction", "92% Satisfaction"]}
                description="Process optimization that dramatically improved patient experience and operational efficiency."
                fullContent="Our operational excellence team conducted a comprehensive workflow analysis for this healthcare provider, identifying bottlenecks and implementing digital scheduling tools, revised staff allocation models, and patient flow improvements. Wait times decreased by 68%, satisfaction scores increased to 92%, and the provider was able to serve 40% more patients with existing staff resources."
              />
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="Financial Services Firm Increases Client Base by 40%"
                category="Marketing Strategy"
                metrics={["40% Client Growth", "53% Retention Increase"]}
                description="Targeted marketing strategy that attracted high-value clients and improved retention rates."
                fullContent="We developed a comprehensive marketing strategy for this financial services firm targeting high-net-worth clients in specific demographic segments. The implementation included digital marketing campaigns, referral programs, content marketing, and enhanced client relationship management. Client acquisition increased by 40% and retention improved by 53%, significantly growing assets under management."
              />
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="Manufacturing Business Reduces Supply Chain Costs"
                category="Supply Chain Optimization"
                metrics={["32% Cost Reduction", "50% Lead Time Cut"]}
                description="Supply chain redesign that improved resilience and significantly reduced costs across the network."
                fullContent="Our supply chain experts conducted an end-to-end analysis of the client's supplier network, inventory management, and logistics operations. We implemented strategic sourcing initiatives, inventory optimization, and logistics consolidation, resulting in a 32% reduction in total supply chain costs and a 50% decrease in lead times, while improving overall supply chain resilience against disruptions."
              />
              <CaseStudyCard 
                image="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                title="E-commerce Platform Boosts Conversion Rate"
                category="Digital Transformation"
                metrics={["87% Conversion Lift", "2.5X Average Order Value"]}
                description="UX redesign and digital strategy that dramatically improved online sales performance."
                fullContent="We led a complete digital transformation for this e-commerce business, including UX/UI redesign, customer journey optimization, personalization implementation, and analytics infrastructure. The result was an 87% increase in conversion rates, 2.5X growth in average order value, and significant improvements in customer loyalty metrics including repeat purchase rate and lifetime value."
              />
            </div>
            
            {/* CTA Section */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Ready to Create Your Success Story?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our strategic consulting services can help your business achieve similar results. Let's discuss how we can transform your challenges into opportunities.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
  metrics: string[];
  description: string;
  fullContent: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, category, metrics, description, fullContent }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
          }}
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-primary mb-2">{category}</div>
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <div className="flex gap-4 mb-3 flex-wrap">
          {metrics.map((metric, index) => (
            <div key={index} className="text-sm text-black bg-gray-100 px-3 py-1 rounded-full">{metric}</div>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="text-primary font-medium inline-flex items-center">
          Read Case Study <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { caseStudiesData } from '@/data/caseStudies';

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
          {caseStudiesData.slice(0, 3).map((caseStudy) => (
            <HoverCard key={caseStudy.id} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary mb-2">Case Study</div>
                    <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-full max-w-3xl" align="center">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-auto rounded-md shadow-sm object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
                      }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-2">{caseStudy.title}</h4>
                    <p className="text-sm mb-4">{caseStudy.fullDescription}</p>
                    <Link 
                      to="/case-studies" 
                      className="text-primary font-medium inline-flex items-center hover:underline text-sm"
                    >
                      View More Case Studies <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
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

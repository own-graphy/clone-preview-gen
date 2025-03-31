
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { caseStudiesData } from '@/data/caseStudies';
import { useIsMobile } from '@/hooks/use-mobile';

const CaseStudiesSection: React.FC = () => {
  const isMobile = useIsMobile();

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
          {caseStudiesData.slice(0, 5).map((caseStudy) => (
            isMobile ? (
              // Mobile view - opens dialog on click
              <Dialog key={caseStudy.id}>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group cursor-pointer">
                    {/* Always show image and title */}
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
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] p-0">
                  <div className="p-6">
                    <div className="space-y-6">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-auto rounded-md shadow-sm object-cover" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
                        }}
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                        <p className="text-gray-600 mb-6">{caseStudy.fullDescription}</p>
                        <Link 
                          to="/case-studies" 
                          className="text-primary font-medium inline-flex items-center hover:underline"
                        >
                          View More Case Studies <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              // Desktop view - uses hover card with proper hover effect
              <div key={caseStudy.id} className="relative group">
                {/* Base card with image and title always visible */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover transition duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6366F1/FFFFFF?text=Case+Study';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary mb-2">Case Study</div>
                    <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                  </div>
                </div>
                
                {/* Hover overlay that appears on hover */}
                <div className="absolute inset-0 bg-primary/90 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-6 text-white overflow-y-auto">
                  <div className="text-sm font-medium mb-2">Case Study</div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                  <div className="mb-4 flex-shrink-0 h-32 overflow-hidden rounded-md">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/FFFFFF/6366F1?text=Case+Study';
                      }}
                    />
                  </div>
                  <p className="text-white/90 mb-4 overflow-y-auto flex-grow text-sm">{caseStudy.fullDescription}</p>
                  <Link 
                    to="/case-studies" 
                    className="text-white font-medium inline-flex items-center hover:underline mt-auto"
                  >
                    View More Case Studies <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            )
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

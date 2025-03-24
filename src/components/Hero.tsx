
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.setProperty('--delay', '0s');
      observer.observe(titleRef.current);
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.setProperty('--delay', '0.1s');
      observer.observe(subtitleRef.current);
    }
    
    if (ctaRef.current) {
      ctaRef.current.style.setProperty('--delay', '0.2s');
      observer.observe(ctaRef.current);
    }
    
    if (imageRef.current) {
      imageRef.current.style.setProperty('--delay', '0.3s');
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-darkGray to-darkGray"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0 text-white"
            >
              Strategy Consulting
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-gray-300 max-w-md opacity-0"
            >
              Transforming MSMEs through strategic solutions, expert guidance, and data-driven insights for sustainable growth.
            </p>
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
            >
              <Link to="/services" className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="glass-subtle font-medium px-8 py-3 rounded-full hover:bg-secondary/50 transition-default text-white">
                Free Consulting
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl filter blur-xl opacity-20 animate-pulse-subtle"></div>
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
              alt="Strategy Consulting" 
              className="relative rounded-2xl shadow-sm opacity-0 w-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Strategy+Consulting';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Services Highlights - Animated on hover */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceHighlight 
            title="Operational Excellence" 
            description="Optimize processes, reduce costs, and improve efficiency across your business."
          />
          <ServiceHighlight 
            title="Revenue Growth" 
            description="Strategic initiatives to accelerate your revenue growth and improve profitability."
          />
          <ServiceHighlight 
            title="Market Expansion" 
            description="Expand your market reach with data-driven strategies to enter new territories."
          />
          <ServiceHighlight 
            title="Innovation & Technology" 
            description="Leverage the latest technologies to drive innovation and digital transformation."
          />
        </div>
      </div>
      
      {/* Who We Are Section with Video */}
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
      
      {/* Case Studies Section */}
      <div className="container mx-auto px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Case Studies</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real results we've achieved for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <CaseStudyCard 
            title="3X Revenue" 
            description="How we helped a retail client triple their revenue in just 18 months."
          />
          <CaseStudyCard 
            title="10%-20% Sales Cost Reduction" 
            description="Optimizing sales processes for a manufacturing firm."
          />
          <CaseStudyCard 
            title="Increased Market Penetration" 
            description="Expanding into new markets with targeted strategies."
          />
          <CaseStudyCard 
            title="Brand Awareness" 
            description="Building recognition and trust in competitive markets."
          />
          <CaseStudyCard 
            title="Multichannel Presence" 
            description="Creating an integrated omnichannel customer experience."
          />
          <CaseStudyCard 
            title="2X EBITDA" 
            description="Doubling earnings before interest, taxes, depreciation & amortization."
          />
        </div>
      </div>
      
      {/* Our Impact Section */}
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
      
      {/* Testimonies Section */}
      <div className="container mx-auto px-4 md:px-6 mt-24 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Testimonials</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What our clients say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial 
            quote="The strategic insights from Advizo transformed our approach to market expansion. We're now operating in three new regions with remarkable success."
            author="Sarah Johnson"
            position="CEO, TechGrowth Inc."
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          />
          
          <Testimonial 
            quote="Working with Advizo helped us identify inefficiencies we never noticed. Their operational excellence program reduced our costs by 18% in just four months."
            author="Michael Chen"
            position="COO, Precision Manufacturing"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          />
          
          <Testimonial 
            quote="The team at Advizo doesn't just provide recommendations—they partner with you to implement them. Their hands-on approach made all the difference for our business."
            author="Elena Rodriguez"
            position="Founder, GreenLife Solutions"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          />
        </div>
      </div>
    </section>
  );
};

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

interface CaseStudyCardProps {
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description }) => {
  return (
    <div className="group relative">
      <div className="glass p-6 rounded-xl group-hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{title}</h3>
        
        {/* Hover effect - Popover */}
        <div className="absolute inset-0 bg-darkGray/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

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

export default Hero;


import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

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

  const openCaseStudy = (id: string) => {
    setActiveCaseStudy(id);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  const caseStudiesData = [
    {
      id: "revenue",
      title: "3X Revenue",
      description: "How we helped a retail client triple their revenue in just 18 months.",
      fullDescription: "Our strategic approach involved a complete overhaul of the client's sales funnel, implementation of data-driven marketing campaigns, and optimization of their pricing strategy. By focusing on high-value customer segments and improving conversion rates at each stage of the customer journey, we were able to achieve a 300% increase in revenue within 18 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "cost-reduction",
      title: "10%-20% Sales Cost Reduction",
      description: "Optimizing sales processes for a manufacturing firm.",
      fullDescription: "Through a detailed analysis of the sales process, we identified inefficiencies in resource allocation, redundant steps, and opportunities for automation. By streamlining the sales workflow and implementing targeted technology solutions, we reduced sales operational costs by 17.5% while simultaneously increasing sales team productivity by 22%.",
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "market-penetration",
      title: "Increased Market Penetration",
      description: "Expanding into new markets with targeted strategies.",
      fullDescription: "Our client needed to expand beyond their existing market but lacked the data and strategy to do so effectively. We conducted comprehensive market analysis, identified high-potential segments, and developed a tailored entry strategy. Within one year, the client successfully established presence in three new regional markets, capturing an average of 12% market share in each.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness",
      description: "Building recognition and trust in competitive markets.",
      fullDescription: "For this emerging tech startup, we developed a comprehensive brand strategy focusing on their unique value proposition. Through strategic content marketing, industry partnerships, and targeted PR campaigns, we increased brand recognition by 155% and improved positive sentiment scores by 43% within 12 months, positioning them as thought leaders in their niche.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "multichannel",
      title: "Multichannel Presence",
      description: "Creating an integrated omnichannel customer experience.",
      fullDescription: "Our client struggled with disconnected customer experiences across different channels. We implemented an integrated omnichannel strategy, unifying customer data and creating seamless transitions between online, mobile, and physical touchpoints. The result was a 78% increase in cross-channel customer engagement and a 45% improvement in customer retention rates.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "ebitda",
      title: "2X EBITDA",
      description: "Doubling earnings before interest, taxes, depreciation & amortization.",
      fullDescription: "This mid-sized manufacturing business was struggling with profitability despite strong revenue. We conducted a comprehensive operational and financial analysis, identifying key inefficiencies in production processes, supply chain management, and financial controls. Our implementation plan resulted in doubling EBITDA within 24 months while creating sustainable systems for continued profitability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    }
  ];

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
          {caseStudiesData.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="group relative cursor-pointer"
              onClick={() => openCaseStudy(caseStudy.id)}
            >
              <div className="glass p-6 rounded-xl group-hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                
                {/* Hover effect - Popover */}
                <div className="absolute inset-0 bg-darkGray/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                  <p className="text-sm text-gray-200">{caseStudy.description}</p>
                </div>
              </div>
            </div>
          ))}
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

      {/* Full-screen Case Study Pop-up */}
      {activeCaseStudy && (
        <div className="fixed inset-0 bg-darkGray/95 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-12">
            <button 
              onClick={closeCaseStudy} 
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-2"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {caseStudiesData.filter(cs => cs.id === activeCaseStudy).map(caseStudy => (
              <div key={caseStudy.id} className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-auto rounded-xl shadow-lg" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6366F1/FFFFFF?text=Case+Study';
                      }}
                    />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium text-primary mb-3">Case Study</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{caseStudy.title}</h2>
                    <p className="text-lg mb-6">{caseStudy.description}</p>
                    <p className="text-gray-300 mb-8">{caseStudy.fullDescription}</p>
                    <Link 
                      to="/case-studies" 
                      className="bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-default inline-flex items-center"
                    >
                      View More Case Studies
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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

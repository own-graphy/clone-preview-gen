
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ArrowRight, Zap, TrendingUp, ArrowUpRight, Award, Briefcase, ChartBar, CircleDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
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
        
        {/* Impact Metrics Section */}
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
        
        {/* Featured Case Studies */}
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
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Hear directly from business leaders who have partnered with Advizo Consulting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="The strategic insights from Advizo transformed our approach to market expansion. We're now operating in three new regions with remarkable success."
                author="Sarah Johnson"
                position="CEO, TechGrowth Inc."
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              />
              <TestimonialCard 
                quote="Working with Advizo helped us identify inefficiencies we never noticed. Their operational excellence program reduced our costs by 18% in just four months."
                author="Michael Chen"
                position="COO, Precision Manufacturing"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              />
              <TestimonialCard 
                quote="The team at Advizo doesn't just provide recommendations—they partner with you to implement them. Their hands-on approach made all the difference for our business."
                author="Elena Rodriguez"
                position="Founder, GreenLife Solutions"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a free consultation with our strategy experts and discover how we can help your business reach new heights.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-default">
                Book Your Free Consultation
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

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface MetricCardProps {
  number: string;
  label: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ number, label, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-3">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, category, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group">
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
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="/case-studies" className="text-primary font-medium inline-flex items-center">
          Read Case Study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
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
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <p className="italic text-gray-700 mb-4">"{quote}"</p>
    </div>
  );
};

export default Home;

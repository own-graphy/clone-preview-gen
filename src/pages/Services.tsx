import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Briefcase, BarChart, TrendingUp, Zap, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyScrollTo } from '../utils/scrollHelper';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={dummyScrollTo} />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600">
                Comprehensive strategic consulting solutions tailored for MSMEs.
              </p>
            </div>
            
            {/* Services Overview */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold mb-6">Strategic Consulting for Business Growth</h2>
                  <p className="text-gray-600 mb-6">
                    At Advizo Consulting, we specialize in helping Micro, Small, and Medium Enterprises (MSMEs) navigate challenges, identify opportunities, and implement strategic solutions that drive sustainable growth.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our consultants bring deep industry expertise and proven methodologies to deliver tailored strategies that address your specific business needs. We focus on practical, implementable solutions with measurable results.
                  </p>
                  <div className="space-y-3">
                    <ServiceFeature text="Data-driven strategy development" />
                    <ServiceFeature text="Industry-specific expertise" />
                    <ServiceFeature text="Implementation support" />
                    <ServiceFeature text="Measurable business outcomes" />
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                    alt="Strategic consulting" 
                    className="relative rounded-2xl shadow-soft w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Services Grid */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Core Services</h2>
                <p className="text-lg text-gray-600">
                  Comprehensive solutions to address your most critical business challenges.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <ServiceCard 
                  icon={<Zap className="h-8 w-8" />}
                  title="Operational Excellence"
                  description="Optimize your business operations to reduce costs, eliminate inefficiencies, and improve overall productivity. Our operational excellence services include:"
                  features={[
                    "Process optimization and redesign",
                    "Lean implementation",
                    "Supply chain optimization",
                    "Quality management systems",
                    "Operational cost reduction"
                  ]}
                />
                <ServiceCard 
                  icon={<TrendingUp className="h-8 w-8" />}
                  title="Revenue Growth"
                  description="Accelerate your business growth with strategies to increase revenue, improve profit margins, and enhance customer value. Our revenue growth services include:"
                  features={[
                    "Sales strategy and optimization",
                    "Pricing strategy and implementation",
                    "Customer segmentation and targeting",
                    "Channel development and management",
                    "Customer retention programs"
                  ]}
                />
                <ServiceCard 
                  icon={<Globe className="h-8 w-8" />}
                  title="Market Expansion"
                  description="Expand your business into new markets with confidence through research-backed strategies and implementation support. Our market expansion services include:"
                  features={[
                    "Market opportunity assessment",
                    "Competitive landscape analysis",
                    "Market entry strategy",
                    "Partnership and distribution models",
                    "International expansion planning"
                  ]}
                />
                <ServiceCard 
                  icon={<Lightbulb className="h-8 w-8" />}
                  title="Innovation & Technology"
                  description="Transform your business through innovation and strategic technology adoption to gain competitive advantage. Our innovation services include:"
                  features={[
                    "Digital transformation strategy",
                    "Technology assessment and roadmap",
                    "Product and service innovation",
                    "Business model innovation",
                    "Innovation culture development"
                  ]}
                />
              </div>
            </div>
            
            {/* Specialized Services */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Specialized Services</h2>
                <p className="text-lg text-gray-600">
                  Additional consulting offerings to address specific business needs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <SpecializedServiceCard 
                  icon={<Briefcase className="h-6 w-6" />}
                  title="Business Transformation"
                  description="End-to-end transformation programs to fundamentally change how your business operates and competes in the market."
                />
                <SpecializedServiceCard 
                  icon={<BarChart className="h-6 w-6" />}
                  title="Data Analytics"
                  description="Turn your business data into actionable insights with our analytics services and data-driven decision frameworks."
                />
                <SpecializedServiceCard 
                  icon={<CheckCircle className="h-6 w-6" />}
                  title="Strategic Planning"
                  description="Develop comprehensive strategic plans to guide your business toward sustainable growth and long-term success."
                />
              </div>
            </div>
            
            {/* Our Approach */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Consulting Approach</h2>
                <p className="text-lg text-gray-600">
                  A proven methodology that delivers measurable results for your business.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative">
                  <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                    alt="Our consulting approach" 
                    className="relative rounded-2xl shadow-soft w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-8">
                  <ProcessStep 
                    number="01"
                    title="Assess"
                    description="We conduct a comprehensive assessment of your business, analyzing current state, challenges, opportunities, and market dynamics."
                  />
                  <ProcessStep 
                    number="02"
                    title="Strategize"
                    description="Based on data-driven insights, we develop tailored strategies and detailed implementation plans to address your specific needs."
                  />
                  <ProcessStep 
                    number="03"
                    title="Implement"
                    description="We work alongside your team to implement solutions, providing guidance, tools, and frameworks for successful execution."
                  />
                  <ProcessStep 
                    number="04"
                    title="Measure"
                    description="We establish metrics and tracking systems to monitor progress and quantify the impact of our consulting initiatives."
                  />
                  <ProcessStep 
                    number="05"
                    title="Refine"
                    description="We continuously evaluate results, gather feedback, and refine strategies to ensure optimal outcomes and sustainable improvements."
                  />
                </div>
              </div>
            </div>
            
            {/* Industries Served */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-gray-600">
                  We have deep expertise across multiple sectors, with consultants who understand your industry's specific challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <IndustryCard name="Manufacturing" />
                <IndustryCard name="Retail & E-commerce" />
                <IndustryCard name="Technology" />
                <IndustryCard name="Healthcare" />
                <IndustryCard name="Financial Services" />
                <IndustryCard name="Professional Services" />
                <IndustryCard name="Education" />
                <IndustryCard name="Hospitality" />
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Schedule a free consultation with our strategy experts to discuss how our services can address your specific business challenges.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
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

interface ServiceFeatureProps {
  text: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="flex-shrink-0 text-primary h-5 w-5 mt-0.5" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="flex-shrink-0 text-primary h-5 w-5 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SpecializedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecializedServiceCard: React.FC<SpecializedServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface IndustryCardProps {
  name: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition duration-300 text-center">
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

export default Services;

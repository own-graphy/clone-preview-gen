
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600">
                Comprehensive design solutions tailored to your unique needs.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <ServiceCard 
                title="Web Design"
                description="Custom website designs that are visually stunning, easy to use, and optimized for all devices."
                image="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              />
              <ServiceCard 
                title="Logo Design"
                description="Memorable, distinctive logos that capture your brand's essence and make a lasting impression."
                image="https://images.unsplash.com/photo-1560157368-d461d92a6570"
              />
              <ServiceCard 
                title="Branding"
                description="Comprehensive brand identity systems that communicate your values and connect with your audience."
                image="https://images.unsplash.com/photo-1558403194-611308249627"
              />
              <ServiceCard 
                title="UI/UX Design"
                description="User-centered interface designs that enhance usability and create seamless digital experiences."
                image="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634"
              />
              <ServiceCard 
                title="Print Design"
                description="Eye-catching print materials that communicate your message effectively across various formats."
                image="https://images.unsplash.com/photo-1571498664957-0a39676d2c81"
              />
              <ServiceCard 
                title="Motion Graphics"
                description="Dynamic animations and visual effects that bring your brand to life and engage your audience."
                image="https://images.unsplash.com/photo-1601469090980-672ee2bb7058"
              />
            </div>
            
            {/* Process Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
              <p className="text-lg text-gray-600 mb-12">
                A proven approach to deliver exceptional results for every project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a" 
                  alt="Our design process" 
                  className="relative rounded-2xl shadow-soft w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <ProcessStep 
                  number="01"
                  title="Discovery"
                  description="We begin by understanding your business, goals, target audience, and project requirements through in-depth consultation."
                />
                <ProcessStep 
                  number="02"
                  title="Strategy"
                  description="Based on our findings, we develop a strategic plan that outlines how design will address your specific challenges and objectives."
                />
                <ProcessStep 
                  number="03"
                  title="Design"
                  description="Our creative team crafts multiple concepts, refining them based on your feedback until we achieve the perfect solution."
                />
                <ProcessStep 
                  number="04"
                  title="Implementation"
                  description="We bring the approved designs to life, ensuring meticulous attention to detail and quality throughout the process."
                />
                <ProcessStep 
                  number="05"
                  title="Evaluation"
                  description="After launch, we analyze the performance of our designs and make any necessary refinements to ensure optimal results."
                />
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Why Choose Graphix</h2>
                <p className="text-lg text-gray-600">
                  What sets us apart from other design agencies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <FeatureItem 
                  title="Experienced Team"
                  description="Our designers bring years of industry expertise across various sectors and design disciplines."
                />
                <FeatureItem 
                  title="Results-Driven Approach"
                  description="We focus on creating designs that not only look great but also help you achieve your business objectives."
                />
                <FeatureItem 
                  title="Collaborative Process"
                  description="We work closely with you throughout the project, ensuring your vision is brought to life exactly as you imagined."
                />
                <FeatureItem 
                  title="Timely Delivery"
                  description="We respect your timelines and consistently deliver high-quality work on schedule."
                />
                <FeatureItem 
                  title="Ongoing Support"
                  description="Our relationship doesn't end when the project is delivered; we provide continued assistance and updates."
                />
                <FeatureItem 
                  title="Competitive Pricing"
                  description="We offer excellent value without compromising on quality, with transparent pricing and no hidden costs."
                />
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how we can help bring your vision to life with our expert design services.
              </p>
              <a href="/contact" className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/007AFF/FFFFFF?text=Service';
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-primary font-medium inline-flex items-center">
          Learn More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
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

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="flex gap-4">
      <CheckCircle className="flex-shrink-0 text-primary h-6 w-6 mt-1" />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyScrollTo } from '../utils/scrollHelper';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={dummyScrollTo} />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Advizo Consulting</h1>
              <p className="text-lg text-gray-600">
                Strategic consulting partners dedicated to MSME business success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Advizo Consulting began with a clear mission: to provide micro, small, and medium enterprises with the same caliber of strategic consulting traditionally available only to large corporations.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders, experienced consultants from leading global firms, recognized that MSMEs face unique challenges that require specialized solutions. They built Advizo to bridge this gap, creating a consulting practice specifically designed to address the needs of growing businesses.
                </p>
                <p className="text-gray-600">
                  Over the years, we've helped hundreds of businesses across diverse industries transform challenges into opportunities for growth. Our practical approach, industry expertise, and commitment to measurable results have established us as trusted advisors to business leaders nationwide.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                  alt="Our team collaborating" 
                  className="relative rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
            </div>
            
            {/* Video Introduction */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Meet our team and learn about our approach to strategic consulting.
                </p>
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    alt="Video thumbnail" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 cursor-pointer hover:bg-white transition-default">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                  alt="Our mission" 
                  className="relative rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Advizo Consulting, our mission is to empower MSMEs with strategic guidance that drives sustainable growth and creates lasting value. We're committed to making world-class consulting accessible to growing businesses.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that MSMEs are the backbone of the economy, and by helping them succeed, we contribute to economic growth, job creation, and community development. Every business we work with represents an opportunity to make a meaningful impact.
                </p>
                <p className="text-gray-600">
                  Our approach combines proven consulting methodologies with practical implementation support, ensuring that our recommendations translate into tangible business results for our clients.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600 mb-12">
                These principles guide everything we do at Advizo Consulting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <ValueCard 
                title="Excellence" 
                description="We're committed to delivering the highest quality consulting services, continuously raising the bar for ourselves and the value we provide to clients."
                icon="🌟"
              />
              <ValueCard 
                title="Integrity" 
                description="We maintain the highest ethical standards, providing honest advice and transparent communication in all client relationships."
                icon="⚖️"
              />
              <ValueCard 
                title="Results-Driven" 
                description="We focus relentlessly on delivering measurable, meaningful outcomes that positively impact our clients' business performance."
                icon="🎯"
              />
              <ValueCard 
                title="Collaboration" 
                description="We work as partners with our clients, combining our expertise with their business knowledge to develop the most effective solutions."
                icon="🤝"
              />
              <ValueCard 
                title="Innovation" 
                description="We embrace forward-thinking approaches, continuously evolving our methodologies to address emerging business challenges."
                icon="💡"
              />
              <ValueCard 
                title="Empowerment" 
                description="We transfer knowledge and build capabilities within our client organizations, enabling long-term success beyond our engagement."
                icon="🚀"
              />
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 mb-12">
                Meet the experienced professionals leading our strategic consulting practice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <TeamMember 
                name="Jennifer Roberts" 
                role="Founder & CEO"
                image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Former partner at a global consulting firm with 20+ years of experience transforming businesses across multiple industries."
              />
              <TeamMember 
                name="Michael Chen" 
                role="Managing Director"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Strategy expert specializing in operational excellence and business transformation with experience across 200+ client engagements."
              />
              <TeamMember 
                name="Sarah Williams" 
                role="Director of Client Services"
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Customer-focused consulting leader with deep expertise in growth strategy and market expansion for emerging businesses."
              />
              <TeamMember 
                name="David Johnson" 
                role="Head of Innovation"
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Technology and innovation specialist who helps businesses leverage digital transformation to gain competitive advantage."
              />
              <TeamMember 
                name="Maria Rodriguez" 
                role="Finance Director"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Financial strategy expert who guides businesses in optimizing capital allocation, funding growth, and improving profitability."
              />
              <TeamMember 
                name="James Lee" 
                role="Industry Solutions Lead"
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                bio="Specialized in developing industry-specific consulting solutions with particular expertise in manufacturing and technology sectors."
              />
            </div>
            
            {/* CTA Section */}
            <div className="bg-primary text-white p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our strategic consulting services can help your business reach new heights.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-default">
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

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="text-center">
      <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-4 border-white shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/6366F1/FFFFFF?text=Team+Member';
          }}
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-primary font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default About;

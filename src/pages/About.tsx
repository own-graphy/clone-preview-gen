
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-lg text-gray-600">
                Learn about our journey, mission, and the team behind our success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Graphix began as a small design studio with a big vision. We set out to create meaningful and impactful designs that could transform businesses and help them connect with their audiences.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've evolved into a full-service creative agency, working with clients from various industries across the globe. What hasn't changed is our passion for design excellence and our commitment to delivering exceptional results.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be recognized as industry leaders, known for our innovative approach and dedication to pushing creative boundaries.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Our team collaborating" 
                  className="relative rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                  alt="Our mission" 
                  className="relative rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Graphix, our mission is to create designs that not only look beautiful but also drive results. We believe in the power of design to transform businesses, shape perceptions, and create meaningful connections.
                </p>
                <p className="text-gray-600 mb-4">
                  We're committed to understanding each client's unique needs and challenges, crafting tailored solutions that help them stand out in a crowded marketplace and achieve their business objectives.
                </p>
                <p className="text-gray-600">
                  Our approach combines creative excellence with strategic thinking, ensuring that every design decision serves a purpose and contributes to the overall success of our clients.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-gray-600 mb-12">
                These core principles guide everything we do at Graphix.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <ValueCard 
                title="Excellence" 
                description="We're committed to delivering the highest quality work in everything we do, pushing ourselves to exceed expectations and achieve outstanding results."
                icon="🌟"
              />
              <ValueCard 
                title="Collaboration" 
                description="We believe in the power of teamwork, both within our team and with our clients, fostering open communication and shared success."
                icon="🤝"
              />
              <ValueCard 
                title="Innovation" 
                description="We embrace creativity and fresh thinking, constantly exploring new ideas and approaches to solve complex design challenges."
                icon="💡"
              />
              <ValueCard 
                title="Integrity" 
                description="We conduct our business with honesty, transparency, and respect, building trust with our clients and within our team."
                icon="⚖️"
              />
              <ValueCard 
                title="Client Focus" 
                description="We put our clients at the center of everything we do, listening carefully to their needs and working tirelessly to help them succeed."
                icon="🎯"
              />
              <ValueCard 
                title="Growth" 
                description="We're committed to continuous learning and improvement, both as individuals and as an organization."
                icon="📈"
              />
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-gray-600 mb-12">
                Meet the talented people behind our success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember 
                name="Alex Johnson" 
                role="Founder & Creative Director"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              />
              <TeamMember 
                name="Sarah Williams" 
                role="Lead Designer"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              />
              <TeamMember 
                name="Michael Chen" 
                role="UI/UX Specialist"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              />
              <TeamMember 
                name="Emily Rodriguez" 
                role="Brand Strategist"
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              />
              <TeamMember 
                name="David Kim" 
                role="Web Developer"
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
              />
              <TeamMember 
                name="Lisa Patel" 
                role="Project Manager"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              />
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
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/007AFF/FFFFFF?text=Team+Member';
          }}
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default About;

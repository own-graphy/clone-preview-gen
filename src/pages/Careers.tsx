import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, BriefcaseBusiness, GraduationCap, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyScrollTo } from '../utils/scrollHelper';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={dummyScrollTo} />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-600">
                Help businesses transform and grow as part of our strategic consulting team.
              </p>
            </div>
            
            {/* Our Culture */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-4">
                  At Advizo Consulting, we foster a collaborative environment where innovative thinking, continuous learning, and excellence are celebrated. We're passionate about making a meaningful impact for our clients while providing our team members with opportunities to grow both professionally and personally.
                </p>
                <p className="text-gray-600 mb-4">
                  Our consultants work directly with business leaders across various industries, gaining diverse experience and developing valuable skills that drive career advancement. We invest in our team through comprehensive training, mentorship, and development programs.
                </p>
                <p className="text-gray-600">
                  If you're driven, curious, and eager to help businesses overcome challenges and achieve their goals, you'll find a rewarding home at Advizo Consulting.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl filter blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                  alt="Our team collaborating" 
                  className="relative rounded-2xl shadow-soft w-full object-cover"
                />
              </div>
            </div>
            
            {/* Benefits */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
                <p className="text-lg text-gray-600">
                  We offer a comprehensive benefits package and a supportive work environment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <BenefitCard 
                  icon={<GraduationCap className="h-6 w-6" />}
                  title="Learning & Development"
                  description="Continuous training, education stipends, and professional certification support to help you grow."
                />
                <BenefitCard 
                  icon={<BriefcaseBusiness className="h-6 w-6" />}
                  title="Competitive Compensation"
                  description="Salary packages that recognize your expertise, plus performance bonuses and profit sharing."
                />
                <BenefitCard 
                  icon={<Users className="h-6 w-6" />}
                  title="Collaborative Culture"
                  description="Work alongside talented professionals in a supportive environment that values your input."
                />
                <BenefitCard 
                  icon={<Award className="h-6 w-6" />}
                  title="Recognition Programs"
                  description="Regular recognition for exceptional work and contributions to client success."
                />
                <BenefitCard 
                  icon={<Globe className="h-6 w-6" />}
                  title="Remote Flexibility"
                  description="Flexible work arrangements that balance in-office collaboration and remote work options."
                />
                <BenefitCard 
                  icon={<ArrowRight className="h-6 w-6" />}
                  title="Career Advancement"
                  description="Clear progression paths and opportunities to grow into leadership roles."
                />
              </div>
            </div>
            
            {/* Open Positions */}
            <div className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
                <p className="text-lg text-gray-600">
                  Explore current opportunities to join our consulting team.
                </p>
              </div>
              
              <div className="space-y-6">
                <JobCard 
                  title="Senior Strategy Consultant"
                  location="New York (Hybrid)"
                  department="Client Services"
                  description="Lead strategic consulting engagements for clients across various industries, focusing on business transformation and growth initiatives."
                />
                <JobCard 
                  title="Business Analyst"
                  location="Remote"
                  department="Analytics"
                  description="Support consulting teams with data analysis, market research, and business insights to drive evidence-based recommendations."
                />
                <JobCard 
                  title="Operations Consultant"
                  location="Chicago (Hybrid)"
                  department="Operations Excellence"
                  description="Help clients optimize their operational processes, implement lean methodologies, and improve efficiency across their business functions."
                />
                <JobCard 
                  title="Digital Transformation Specialist"
                  location="Remote"
                  department="Technology"
                  description="Guide clients through digital transformation initiatives, helping them leverage technology to drive business growth and innovation."
                />
              </div>
            </div>
            
            {/* Application Process */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-xl mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Application Process</h2>
                
                <div className="space-y-8">
                  <ProcessStep 
                    number="01"
                    title="Application Review"
                    description="Submit your application online. Our recruiting team reviews applications and selects candidates whose experience and skills align with our requirements."
                  />
                  <ProcessStep 
                    number="02"
                    title="Initial Interview"
                    description="Selected candidates participate in an initial interview to discuss experience, skills, and career goals with our recruiting team."
                  />
                  <ProcessStep 
                    number="03"
                    title="Case Study & Assessment"
                    description="Candidates complete a case study exercise relevant to the role, demonstrating problem-solving abilities and consulting approach."
                  />
                  <ProcessStep 
                    number="04"
                    title="Team Interviews"
                    description="Meet with potential team members and leaders to assess cultural fit and discuss role-specific expectations."
                  />
                  <ProcessStep 
                    number="05"
                    title="Offer & Onboarding"
                    description="Successful candidates receive a competitive offer and begin our comprehensive onboarding program to set them up for success."
                  />
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We're always interested in connecting with talented professionals. Send us your resume for future opportunities.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
                Submit Your Resume
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

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
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

interface JobCardProps {
  title: string;
  location: string;
  department: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, department, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="md:flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{location}</span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{department}</span>
          </div>
          <p className="text-gray-600 mb-4 md:mb-0">{description}</p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <button className="inline-flex items-center whitespace-nowrap bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-primary/90 transition-default">
            Apply Now
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
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

export default Careers;

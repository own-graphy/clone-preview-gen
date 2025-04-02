
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    companyName: '',
    industryType: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        companyName: '',
        industryType: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600">
                Schedule a free consultation with our strategy experts or reach out with any questions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ContactInfoCard 
                icon={<MapPin className="h-6 w-6" />}
                title="Our Location"
                details={["123 Business Avenue", "Corporate District, 10001", "United States"]}
              />
              <ContactInfoCard 
                icon={<Phone className="h-6 w-6" />}
                title="Phone & Email"
                details={["+1 (555) 123-4567", "contact@advizoconsulting.com"]}
              />
              <ContactInfoCard 
                icon={<Clock className="h-6 w-6" />}
                title="Working Hours"
                details={["Monday - Friday: 9am - 6pm", "Saturday: By appointment", "Sunday: Closed"]}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-black mb-6">Schedule a Free Consultation</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Request Submitted!</h3>
                    <p className="text-gray-600">
                      Thanks for reaching out. One of our strategy consultants will contact you within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="text-black">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formState.companyName}
                          onChange={handleChange}
                          className="w-full text-black"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-1">
                          Industry Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="industryType"
                          name="industryType"
                          value={formState.industryType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          required
                        >
                          <option value="" className="text-black">Select your industry</option>
                          <option value="Manufacturing" className="text-black">Manufacturing</option>
                          <option value="Retail" className="text-black">Retail</option>
                          <option value="Technology" className="text-black">Technology</option>
                          <option value="Healthcare" className="text-black">Healthcare</option>
                          <option value="Financial Services" className="text-black">Financial Services</option>
                          <option value="Education" className="text-black">Education</option>
                          <option value="Hospitality" className="text-black">Hospitality</option>
                          <option value="Other" className="text-black">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full text-black"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full text-black"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us about your business challenges
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full text-black"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary/90 transition-default disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Consultation
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-6">
                  <h2 className="text-2xl font-bold mb-6 text-black">Need Immediate Assistance?</h2>
                  <p className="text-gray-600 mb-6">
                    Our consultants are available to chat with you directly about your business needs.
                  </p>
                  
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-medium px-6 py-3 rounded-md hover:bg-green-600 transition-default"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 text-black">Common Questions</h2>
                  
                  <div className="space-y-6">
                    <FAQItem 
                      question="What happens in the free consultation?"
                      answer="During our 30-minute free consultation, we'll discuss your business challenges, goals, and how our strategic consulting services might help. There's no obligation to proceed further."
                    />
                    <FAQItem 
                      question="How long does a typical consulting project take?"
                      answer="Project timelines vary depending on scope and complexity. A strategic assessment might take 2-4 weeks, while implementation support could span several months. We'll provide a detailed timeline during our consultation."
                    />
                    <FAQItem 
                      question="Do you work with businesses in all industries?"
                      answer="Yes, we specialize in helping MSMEs across various industries. Our methodologies are adaptable to different sectors while leveraging our consultants' industry-specific expertise."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, details }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-black">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Contact;

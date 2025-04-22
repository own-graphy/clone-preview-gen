
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation with our strategy experts and discover how we can help your business reach new heights.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-default"
            onClick={handleContactClick}
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

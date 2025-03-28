
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
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
  );
};

export default CtaSection;

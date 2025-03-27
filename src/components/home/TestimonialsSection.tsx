
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
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
  );
};

export default TestimonialsSection;

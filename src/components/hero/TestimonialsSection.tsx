
import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-24 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Testimonials</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          What our clients say about working with us.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Testimonial 
          quote="The strategic insights from Advizo transformed our approach to market expansion. We're now operating in three new regions with remarkable success."
          author="Sarah Johnson"
          position="CEO, TechGrowth Inc."
          image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        />
        
        <Testimonial 
          quote="Working with Advizo helped us identify inefficiencies we never noticed. Their operational excellence program reduced our costs by 18% in just four months."
          author="Michael Chen"
          position="COO, Precision Manufacturing"
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        />
        
        <Testimonial 
          quote="The team at Advizo doesn't just provide recommendations—they partner with you to implement them. Their hands-on approach made all the difference for our business."
          author="Elena Rodriguez"
          position="Founder, GreenLife Solutions"
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;


import React from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    text: "Advizo's insights transformed how we approach growth. We're thriving in new markets, thanks to their partnership.",
  },
  {
    name: "Michael Chen",
    text: "Their cost-reduction program saved us 18% in operating expenses, driving our profits to new highs.",
  },
  {
    name: "Elena Rodriguez",
    text: "The Advizo team implemented strategies with us, not just for us. We've never felt more supported.",
  },
];

const TestimonialsSection: React.FC = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {TESTIMONIALS.map((t, idx) => (
      <div key={idx} className="bg-primary/90 rounded-xl text-white p-6 shadow">
        <p>&ldquo;{t.text}&rdquo;</p>
        <div className="mt-4 font-bold">{t.name}</div>
      </div>
    ))}
  </div>
);

export default TestimonialsSection;

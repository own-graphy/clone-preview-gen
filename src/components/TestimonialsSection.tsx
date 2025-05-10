
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechForward",
    text: "Advizo's insights transformed how we approach growth. We're thriving in new markets, thanks to their partnership.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120"
  },
  {
    name: "Michael Chen",
    role: "CFO, Nexus Corp",
    text: "Their cost-reduction program saved us 18% in operating expenses, driving our profits to new highs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120"
  },
  {
    name: "Elena Rodriguez",
    role: "COO, BuildBetter",
    text: "The Advizo team implemented strategies with us, not just for us. We've never felt more supported.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120"
  },
];

const TestimonialsSection: React.FC = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {TESTIMONIALS.map((t, idx) => (
      <Card key={idx} className="bg-primary/5 border border-primary/10 hover:shadow-md transition-all duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start mb-4">
            <div className="mr-4">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/120x120/6366F1/FFFFFF?text=${t.name.charAt(0)}`;
                }}
              />
            </div>
            <div>
              <p className="text-lg font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
          <blockquote className="text-gray-700 italic">
            &ldquo;{t.text}&rdquo;
          </blockquote>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default TestimonialsSection;

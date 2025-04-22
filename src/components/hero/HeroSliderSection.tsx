
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    title: "Operational Excellence",
    desc: "Optimize processes, reduce costs, and enhance customer satisfaction using Lean and Six Sigma tailored for Indian SMEs.",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    alt: "Operational Excellence",
  },
  {
    title: "Revenue Growth",
    desc: "Boost revenue with strategies in marketing, sales, and innovation—tailored for SME scalability.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    alt: "Revenue Growth",
  },
  {
    title: "Market Expansion",
    desc: "Enter new geographies with localized strategy, market research, and risk-managed growth plans.",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1400&q=80",
    alt: "Market Expansion",
  },
  {
    title: "Innovation & Technology",
    desc: "Adopt cloud, AI, and automation to improve product quality, reduce costs, and scale faster.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    alt: "Innovation & Technology",
  }
];

const HeroSliderSection: React.FC = () => {
  return (
    <div className="relative">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {SLIDES.map((slide, i) => (
            <CarouselItem key={slide.title} className="w-full min-h-[420px] flex items-center justify-center">
              <div className="relative w-full grid md:grid-cols-2 gap-10 bg-gradient-to-br from-indigo-800/80 to-darkGray/90 rounded-2xl shadow-soft overflow-hidden min-h-[420px] items-center">
                <div className="flex flex-col justify-center px-6 py-12 md:py-24 space-y-6 z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{slide.title}</h2>
                  <p className="text-lg text-gray-200 mb-6">{slide.desc}</p>
                  <div className="flex space-x-4">
                    <Link
                      to="/contact"
                      className="bg-primary text-white font-medium px-7 py-2.5 rounded-full hover:bg-primary/85 transition-default"
                    >
                      Free Consulting
                    </Link>
                    <Link
                      to="/services"
                      className="glass-subtle font-medium px-7 py-2.5 rounded-full hover:bg-secondary/50 transition-default text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="relative h-full hidden md:flex items-center justify-end">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="rounded-2xl shadow-md w-full h-[420px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-darkGray/60 to-transparent rounded-2xl" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* Diagonal gradient blur effect overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden style={{
        background: "linear-gradient(120deg, rgba(45,56,254,0.09) 12%, rgba(69,210,252,0.06) 88%)"
      }} />
    </div>
  );
}

export default HeroSliderSection;

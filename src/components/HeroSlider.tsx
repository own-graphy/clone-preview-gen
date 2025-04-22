
import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    headline: "Transform Challenges Into Growth.",
    description: "Partner with Advizo to unlock your business's full potential with data-driven strategies.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    headline: "Accelerate Revenue, Reduce Costs.",
    description: "Our proven frameworks boost profits and efficiency for ambitious MSMEs.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    headline: "Expand To New Markets.",
    description: "Get actionable insights to grow beyond your current boundaries.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  },
  {
    headline: "Innovate With Best-in-Class Tech.",
    description: "We help your business leverage technology to get ahead of the competition.",
    img: "https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?auto=format&fit=crop&w=1200&q=80",
  },
];

type HeroSliderProps = { onFreeConsult: () => void };

const HeroSlider: React.FC<HeroSliderProps> = ({ onFreeConsult }) => {
  const [active, setActive] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => { if (timeout.current) clearTimeout(timeout.current); }
  }, [active]);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-apple z-10 ${
            idx === active
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={active !== idx}
        >
          <img
            src={slide.img}
            alt={slide.headline}
            className="w-full h-full object-cover absolute inset-0 z-0"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] w-full text-white px-2 md:px-0 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{slide.headline}</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">{slide.description}</p>
            <button
              className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-medium shadow-lg transition"
              onClick={onFreeConsult}
            >
              Free Consulting
            </button>
          </div>
        </div>
      ))}
      <div className="absolute left-0 right-0 flex justify-center gap-2 bottom-6 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full bg-white transition border-2 ${active === i ? 'border-primary scale-125' : 'border-transparent opacity-70'}`}
            aria-label={`Go to slide ${i+1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

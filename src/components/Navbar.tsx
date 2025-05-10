
import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', anchor: 'hero' },
  { label: 'About', anchor: 'about' },
  { label: 'Services', anchor: 'services' },
  { label: 'Expertise', anchor: 'expertise' },
  { label: 'Insights', anchor: 'insights' },
  { label: 'Case Studies', anchor: 'cases' },
  { label: 'Testimonials', anchor: 'testimonials' },
  { label: 'Contact', anchor: 'contact' },
];

export type NavbarProps = {
  sectionRefs?: Record<string, React.RefObject<HTMLElement>>;
  scrollToSection?: (id: string) => void;
  scrollTo?: (id: string) => void; // Add this alternative prop name to match usage in pages
};

const Navbar: React.FC<NavbarProps> = ({ sectionRefs = {}, scrollToSection, scrollTo }) => {
  const [active, setActive] = useState('hero');
  
  // Use scrollTo as a fallback if scrollToSection is not provided
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else if (scrollTo) {
      scrollTo(id);
    }
  };

  // Highlight section on scroll
  useEffect(() => {
    const onScroll = () => {
      let currentSection = 'hero';
      for (const { anchor } of NAV_LINKS) {
        const ref = sectionRefs[anchor];
        if (ref && ref.current) {
          const offset = ref.current.offsetTop - 70;
          if (window.scrollY + 80 >= offset) {
            currentSection = anchor;
          }
        }
      }
      setActive(currentSection);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionRefs]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-darkGray/90 backdrop-blur shadow-md transition">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#"
          className="font-bold text-xl text-white"
          onClick={e => { e.preventDefault(); handleScroll('hero'); }}
        >
          Advizo
        </a>
        <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
          {NAV_LINKS.map(link => (
            <button
              key={link.anchor}
              className={`transition px-3 py-1 rounded-md text-sm font-medium capitalize ${
                active === link.anchor
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-200 hover:text-primary'
              }`}
              onClick={() => handleScroll(link.anchor)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import { isElementInViewport } from '../utils/scrollHelper';

type NavbarProps = {
  scrollTo: (section: string) => void;
};

const NAV_LINKS = [
  { label: 'Home', anchor: 'hero' },
  { label: 'Offerings', anchor: 'offerings' },
  { label: 'Case Studies', anchor: 'caseStudies' },
  { label: 'About', anchor: 'about' },
  { label: 'Careers', anchor: 'careers' },
  { label: 'Contact', anchor: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ scrollTo }) => {
  const [activeSection, setActiveSection] = useState('hero');

  // Set up scroll event listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.anchor);
        if (element && isElementInViewport(element)) {
          setActiveSection(link.anchor);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-darkGray/85 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center space-x-2 ml-4 z-10" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
            <span className="font-semibold text-xl text-gray-100">Advizo</span>
          </a>
          <nav className="flex items-center space-x-8 flex-grow justify-end ml-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.anchor}
                href={`#${link.anchor}`}
                className={`transition duration-300 font-medium ${
                  activeSection === link.anchor 
                    ? 'text-primary' 
                    : 'text-gray-200 hover:text-primary'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.anchor);
                  setActiveSection(link.anchor);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

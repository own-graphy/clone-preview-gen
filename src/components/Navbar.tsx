
import React from 'react';
import { logo } from '../assets';

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
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-darkGray/85 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center space-x-2 ml-4 z-10" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
            <span className="font-semibold text-xl text-gray-100">Advizo</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-end ml-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.anchor}
                href={`#${link.anchor}`}
                className="transition duration-300 font-medium text-gray-200 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.anchor);
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

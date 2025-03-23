
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Graphix" className="h-8 w-auto" />
            <span className="font-semibold text-xl text-gray-900">Graphix</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/about" label="About" currentPath={location.pathname} />
            <NavLink to="/services" label="Services" currentPath={location.pathname} />
            <NavLink to="/portfolio" label="Portfolio" currentPath={location.pathname} />
            <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-3 py-4">
            <MobileNavLink to="/" label="Home" currentPath={location.pathname} />
            <MobileNavLink to="/about" label="About" currentPath={location.pathname} />
            <MobileNavLink to="/services" label="Services" currentPath={location.pathname} />
            <MobileNavLink to="/portfolio" label="Portfolio" currentPath={location.pathname} />
            <MobileNavLink to="/contact" label="Contact" currentPath={location.pathname} />
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`transition duration-300 font-medium hover:text-primary ${
        isActive 
          ? 'text-primary' 
          : 'text-gray-700 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`block py-2 px-4 transition duration-300 hover:bg-gray-50 rounded ${
        isActive 
          ? 'font-medium text-primary bg-gray-50' 
          : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;

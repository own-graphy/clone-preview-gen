import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen === false) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
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
    setIsSearchOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkGray/90 backdrop-blur-md shadow-md' : 'bg-darkGray/70 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="text-gray-200 hover:text-white transition-colors focus:outline-none z-20"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Centered on mobile, left on desktop (after hamburger) */}
          <Link to="/" className="flex items-center space-x-2 ml-4 z-10">
            <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
            <span className="font-semibold text-xl text-gray-100">Advizo Transforming MSMEs</span>
          </Link>
          
          {/* Desktop Menu - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center ml-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/case-studies" label="Case Studies" currentPath={location.pathname} />
            <NavLink to="/services" label="Offerings" currentPath={location.pathname} />
            <NavLink to="/about" label="About Advizo" currentPath={location.pathname} />
            <NavLink to="/contact" label="Contact Us" currentPath={location.pathname} />
            <NavLink to="/careers" label="Careers" currentPath={location.pathname} />
          </nav>
          
          {/* Search Icon */}
          <button 
            onClick={toggleSearch} 
            className={`text-gray-200 hover:text-white transition-colors focus:outline-none ml-auto md:ml-0 z-20 ${isSearchOpen ? 'hidden' : 'block'}`}
            aria-label="Search"
          >
            <Search size={22} />
          </button>
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
          : 'text-gray-200 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

interface MenuLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, label, currentPath, onClick }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block py-3 px-4 transition duration-300 text-lg font-medium rounded hover:bg-gray-800/50 ${
        isActive 
          ? 'text-primary bg-gray-800/30' 
          : 'text-gray-200'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;

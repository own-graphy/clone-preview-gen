
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { Menu, X, Search, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
            <span className="font-semibold text-xl text-gray-100">Advizo</span>
          </Link>
          
          {/* Desktop Menu - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center ml-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/services" label="Offerings" currentPath={location.pathname} />
            <NavLink to="/case-studies" label="Case Studies" currentPath={location.pathname} />
            <NavLink to="/about" label="About" currentPath={location.pathname} />
            <NavLink to="/careers" label="Careers" currentPath={location.pathname} />
            <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
          </nav>
          
          {/* Search Icon */}
          <button 
            onClick={toggleSearch} 
            className={`text-gray-200 hover:text-white transition-colors focus:outline-none ml-auto md:ml-0 z-20 ${isSearchOpen ? 'hidden' : 'block'}`}
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          {/* Hamburger Menu - full screen overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#131620] z-50">
              <div className="flex flex-col h-full">
                {/* Header with Logo and Close Button - 80px padding */}
                <div className="flex items-center justify-between px-20 pt-20 pb-10">
                  <div className="flex items-center space-x-2">
                    <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
                    <span className="font-semibold text-xl text-white">Advizo</span>
                  </div>
                  <button 
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Menu links - 80px padding */}
                <div className="flex-1 px-20">
                  <nav className="flex flex-col space-y-6">
                    <MenuLink to="/" label="Home" currentPath={location.pathname} onClick={toggleMenu} />
                    <MenuLink to="/services" label="Offerings" currentPath={location.pathname} onClick={toggleMenu} />
                    <MenuLink to="/case-studies" label="Case Studies" currentPath={location.pathname} onClick={toggleMenu} />
                    <MenuLink to="/about" label="About" currentPath={location.pathname} onClick={toggleMenu} />
                    <MenuLink to="/careers" label="Careers" currentPath={location.pathname} onClick={toggleMenu} />
                    <MenuLink to="/contact" label="Contact" currentPath={location.pathname} onClick={toggleMenu} />
                  </nav>
                </div>
                
                {/* Footer with divider and social links - 80px padding */}
                <div className="px-20 pb-20 pt-10">
                  <Separator className="mb-10 opacity-20" />
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook size={22} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={22} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Bar Overlay */}
          {isSearchOpen && (
            <div className="absolute inset-0 bg-darkGray/95 flex items-center px-4 z-10">
              <div className="w-full max-w-2xl mx-auto relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  className="w-full bg-gray-800/50 text-white py-3 px-4 pr-10 rounded-[3px] border border-gray-700 focus:border-primary focus:outline-none"
                  placeholder="Search..."
                  autoFocus
                />
                <button 
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          )}
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
      className={`block text-2xl font-medium transition duration-300 ${
        isActive 
          ? 'text-primary' 
          : 'text-white hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;


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
          {/* Hamburger Menu Button - Always visible */}
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
            className="text-gray-200 hover:text-white transition-colors focus:outline-none ml-auto md:ml-0 z-20"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
        </div>
      </div>
      
      {/* Search Bar - Animation based on screen size */}
      <div className={`absolute top-0 right-0 h-full transition-all duration-300 ease-in-out overflow-hidden bg-darkGray/95 backdrop-blur-lg z-10 flex items-center ${
        isSearchOpen 
          ? 'w-full md:w-2/3 opacity-100' 
          : 'w-0 opacity-0'
      }`}>
        <div className="w-full flex items-center px-4 py-4">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-primary py-2 px-4 text-white placeholder-gray-400 outline-none"
          />
          <button 
            onClick={toggleSearch}
            className="ml-2 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      {/* Hamburger Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none -z-10'
        }`}
        onClick={toggleMenu}
      />
      
      {/* Hamburger Menu Content */}
      <div 
        className={`fixed top-0 left-0 h-screen max-h-screen overflow-y-auto bg-darkGray shadow-xl transition-all duration-300 ease-in-out z-20 ${
          isMenuOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'
        }`}
        style={{ borderBottomRightRadius: '20px', padding: '20px' }}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center justify-between mb-8 pt-2">
            <Link to="/" className="flex items-center space-x-2" onClick={toggleMenu}>
              <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
              <span className="font-semibold text-xl text-white">Advizo</span>
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-1 flex-grow">
            <MenuLink to="/" label="Home" currentPath={location.pathname} onClick={toggleMenu} />
            <MenuLink to="/case-studies" label="Case Studies" currentPath={location.pathname} onClick={toggleMenu} />
            <MenuLink to="/services" label="Offerings" currentPath={location.pathname} onClick={toggleMenu} />
            <MenuLink to="/about" label="About Advizo" currentPath={location.pathname} onClick={toggleMenu} />
            <MenuLink to="/contact" label="Contact Us" currentPath={location.pathname} onClick={toggleMenu} />
            <MenuLink to="/careers" label="Careers" currentPath={location.pathname} onClick={toggleMenu} />
          </nav>
          
          <div className="mt-auto pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">© 2023 Advizo Consulting</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
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

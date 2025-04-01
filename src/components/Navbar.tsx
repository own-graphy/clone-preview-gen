
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { Menu, X, Search, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer";
import { 
  Dialog, 
  DialogContent,
  DialogTitle
} from '@/components/ui/dialog';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you would implement actual search functionality
    setIsSearchOpen(false);
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

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '/') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkGray/90 backdrop-blur-md shadow-md' : 'bg-darkGray/70 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={toggleMenu} 
            className="text-gray-200 hover:text-white transition-colors focus:outline-none z-20"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="flex items-center space-x-2 ml-4 z-10">
            <img src={logo} alt="Advizo Consulting" className="h-8 w-auto" />
            <span className="font-semibold text-xl text-gray-100">Advizo</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center ml-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/services" label="Offerings" currentPath={location.pathname} />
            <NavLink to="/case-studies" label="Case Studies" currentPath={location.pathname} />
            <NavLink to="/about" label="About" currentPath={location.pathname} />
            <NavLink to="/careers" label="Careers" currentPath={location.pathname} />
            <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
          </nav>
          
          <button 
            onClick={toggleSearch} 
            className="text-gray-200 hover:text-white transition-colors focus:outline-none ml-auto md:ml-0 z-20"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          {/* Sidebar drawer based on the provided image */}
          <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DrawerPortal>
              <DrawerContent className="w-[380px] left-0 right-auto max-h-screen p-0 h-full rounded-none bg-[#181C24]">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between p-6 pb-4">
                    <div className="flex items-center space-x-2">
                      <img src={logo} alt="Advizo Consulting" className="h-10 w-auto" />
                      <span className="font-semibold text-2xl text-white">Advizo</span>
                    </div>
                    <DrawerClose className="text-gray-300 hover:text-white">
                      <X size={24} />
                    </DrawerClose>
                  </div>
                  
                  <nav className="flex-grow flex flex-col p-6 space-y-8">
                    <MenuLink to="/" label="Home" active={location.pathname === "/"} />
                    <MenuLink to="/services" label="Offerings" active={location.pathname === "/services"} />
                    <MenuLink to="/case-studies" label="Case Studies" active={location.pathname === "/case-studies"} />
                    <MenuLink to="/about" label="About" active={location.pathname === "/about"} />
                    <MenuLink to="/careers" label="Careers" active={location.pathname === "/careers"} />
                    <MenuLink to="/contact" label="Contact" active={location.pathname === "/contact"} />
                  </nav>
                  
                  <div className="p-6 mt-auto">
                    <Separator className="mb-6 opacity-20" />
                    <div className="text-sm text-gray-400 mb-4">
                      © 2023 Advizo Consulting
                    </div>
                    <div className="flex space-x-6">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </DrawerPortal>
          </Drawer>

          {/* Simplified search dialog */}
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogTitle>Search</DialogTitle>
              <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-primary">
                  <Search className="ml-3 h-5 w-5 text-gray-500" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search across the site..."
                    className="flex-1 px-3 py-2 bg-transparent border-none focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                  Search
                </button>
              </form>
            </DialogContent>
          </Dialog>
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

interface MenuLinkProps {
  to: string;
  label: string;
  active: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`block text-2xl font-medium transition duration-300 ${
        active 
          ? 'text-[#0099FF]' 
          : 'text-white hover:text-[#0099FF]'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;

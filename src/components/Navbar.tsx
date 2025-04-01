import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets';
import { Menu, X, Search, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { caseStudiesData } from '@/data/caseStudies';

type SearchItemType = 'menu' | 'case-study' | 'service';
interface SearchItem {
  id: string;
  type: SearchItemType;
  title: string;
  path: string;
  description?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const searchableItems: SearchItem[] = useMemo(() => [
    { id: 'menu-home', type: 'menu', title: 'Home', path: '/' },
    { id: 'menu-services', type: 'menu', title: 'Offerings', path: '/services' },
    { id: 'menu-case-studies', type: 'menu', title: 'Case Studies', path: '/case-studies' },
    { id: 'menu-about', type: 'menu', title: 'About', path: '/about' },
    { id: 'menu-careers', type: 'menu', title: 'Careers', path: '/careers' },
    { id: 'menu-contact', type: 'menu', title: 'Contact', path: '/contact' },
    
    ...caseStudiesData.map(study => ({
      id: `case-study-${study.id}`,
      type: 'case-study' as SearchItemType,
      title: study.title,
      path: '/case-studies',
      description: study.description
    })),
    
    { id: 'service-1', type: 'service', title: 'Strategy Consulting', path: '/services', description: 'Business strategy and planning services' },
    { id: 'service-2', type: 'service', title: 'Digital Transformation', path: '/services', description: 'Modernize your business with digital solutions' },
    { id: 'service-3', type: 'service', title: 'Data Analytics', path: '/services', description: 'Insights and analytics services' },
  ], []);

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

  const handleSearchSelect = (item: SearchItem) => {
    setIsSearchOpen(false);
    // Navigate or other actions can be performed here
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

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div className="w-3/4 sm:w-[30%] lg:w-[20%] h-full bg-[#0A0E17] p-8">
                <div className="flex items-center justify-between mb-10">
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
                
                <nav className="flex flex-col space-y-6">
                  <MenuLink to="/" label="Home" currentPath={location.pathname} onClick={toggleMenu} />
                  <MenuLink to="/services" label="Offerings" currentPath={location.pathname} onClick={toggleMenu} />
                  <MenuLink to="/case-studies" label="Case Studies" currentPath={location.pathname} onClick={toggleMenu} />
                  <MenuLink to="/about" label="About" currentPath={location.pathname} onClick={toggleMenu} />
                  <MenuLink to="/careers" label="Careers" currentPath={location.pathname} onClick={toggleMenu} />
                  <MenuLink to="/contact" label="Contact" currentPath={location.pathname} onClick={toggleMenu} />
                </nav>
                
                <div className="mt-10">
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
              
              <div className="flex-1 bg-black/60" onClick={toggleMenu}></div>
            </div>
          )}

          <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <Command>
              <CommandInput placeholder="Search across the app..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                
                <CommandGroup heading="Menu">
                  {searchableItems
                    .filter(item => item.type === 'menu')
                    .map((item) => (
                      <CommandItem key={item.id} onSelect={() => {
                        setIsSearchOpen(false);
                        window.location.href = item.path;
                      }}>
                        <Link to={item.path} className="flex w-full">
                          {item.title}
                        </Link>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Case Studies">
                  {searchableItems
                    .filter(item => item.type === 'case-study')
                    .map((item) => (
                      <CommandItem key={item.id} onSelect={() => {
                        setIsSearchOpen(false);
                        window.location.href = item.path;
                      }}>
                        <div className="flex flex-col">
                          <span>{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-gray-500 truncate">
                              {item.description.substring(0, 60)}...
                            </span>
                          )}
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Services">
                  {searchableItems
                    .filter(item => item.type === 'service')
                    .map((item) => (
                      <CommandItem key={item.id} onSelect={() => {
                        setIsSearchOpen(false);
                        window.location.href = item.path;
                      }}>
                        <div className="flex flex-col">
                          <span>{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-gray-500 truncate">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
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
      className={`block text-xl font-medium transition duration-300 ${
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

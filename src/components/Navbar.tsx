
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
    } else {
      // Clear search when closing
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchSiteContent(searchQuery);
    setSearchResults(results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Perform live search as user types
    if (query.length > 2) {
      const results = searchSiteContent(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (url: string) => {
    closeSearch();
    navigate(url);
  };

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    setSearchResults([]);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '/') {
        event.preventDefault();
        setIsSearchOpen(true);
      } else if (event.key === 'Escape') {
        setIsSearchOpen(false);
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

          {/* Inline expanding search bar */}
          <div 
            ref={searchContainerRef}
            className={`absolute top-0 right-0 h-full transition-all duration-300 ease-in-out flex items-center ${
              isSearchOpen 
                ? isMobile ? 'w-full px-2' : 'w-[calc(100%-64px)]'
                : 'w-0 opacity-0'
            } bg-darkGray/90 backdrop-blur-md z-10`}
          >
            {isSearchOpen && (
              <div className="w-full flex items-center">
                <form onSubmit={handleSearch} className="flex-grow flex items-center">
                  <Search className="ml-3 h-5 w-5 text-gray-400 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search across the site..."
                    className="flex-grow px-3 py-2 bg-transparent border-none focus:outline-none text-white"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:text-white"
                      onClick={() => {
                        setSearchQuery('');
                        setSearchResults([]);
                        searchInputRef.current?.focus();
                      }}
                    >
                      <X size={18} />
                    </button>
                  )}
                </form>
                <button 
                  onClick={closeSearch}
                  className="p-4 text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Search results dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-darkGray/95 backdrop-blur-lg shadow-lg max-h-[70vh] overflow-y-auto z-50 border-t border-gray-700">
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2">Search Results ({searchResults.length})</h3>
                <div className="divide-y divide-gray-700">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="py-3 block hover:bg-gray-800/50 px-2 rounded-md cursor-pointer"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <h4 className="text-primary font-medium mb-1">{result.title}</h4>
                      <p className="text-gray-300 text-sm mb-1">{result.excerpt}</p>
                      <span className="text-gray-400 text-xs">{result.category}</span>
                    </div>
                  ))}
                </div>
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

interface SearchResult {
  title: string;
  url: string;
  excerpt: string;
  category: string;
}

// Sample search function for demonstration - this would be more sophisticated in a real site
const searchSiteContent = (query: string): SearchResult[] => {
  // This is a mock search - in a real application, this would search actual content
  const allContent: SearchResult[] = [
    {
      title: "Strategic IT Consulting Services",
      url: "/services",
      excerpt: "Our experts help transform your business with cutting-edge IT strategies and solutions.",
      category: "Services"
    },
    {
      title: "Digital Transformation Success Stories",
      url: "/case-studies",
      excerpt: "See how we helped enterprise clients achieve digital transformation success.",
      category: "Case Studies"
    },
    {
      title: "About Our Company",
      url: "/about",
      excerpt: "Learn about our mission, vision, and the team behind Advizo Consulting.",
      category: "About"
    },
    {
      title: "Join Our Team",
      url: "/careers",
      excerpt: "Explore career opportunities at Advizo Consulting.",
      category: "Careers"
    },
    {
      title: "Cloud Migration Services",
      url: "/services#cloud",
      excerpt: "Seamlessly migrate your infrastructure to the cloud with our expert guidance.",
      category: "Services"
    },
    {
      title: "Data Analytics Solutions",
      url: "/services#analytics",
      excerpt: "Turn data into actionable insights with our advanced analytics solutions.",
      category: "Services"
    },
    {
      title: "E-commerce Platform Optimization",
      url: "/case-studies#ecommerce",
      excerpt: "How we helped a retail client increase online sales by 45% through platform optimization.",
      category: "Case Studies"
    },
    {
      title: "Healthcare Technology Transformation",
      url: "/case-studies#healthcare",
      excerpt: "Learn how we modernized a healthcare provider's IT infrastructure.",
      category: "Case Studies"
    },
    {
      title: "Contact Us Today",
      url: "/contact",
      excerpt: "Get in touch with our consultants to discuss your business needs.",
      category: "Contact"
    }
  ];

  // Filter content based on search query
  if (!query || query.trim() === '') return [];
  
  const lowerCaseQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery) || 
    item.excerpt.toLowerCase().includes(lowerCaseQuery) || 
    item.category.toLowerCase().includes(lowerCaseQuery)
  );
};

export default Navbar;

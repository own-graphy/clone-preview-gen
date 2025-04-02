
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SearchResult {
  title: string;
  url: string;
  excerpt: string;
  category: string;
}

export const useSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    } else {
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
    
    if (query.length > 2) {
      const results = searchSiteContent(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (url: string) => {
    if (url.includes('#')) {
      const [path, hash] = url.split('#');
      navigate(path);
      closeSearch();
      
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.scrollTo(0, 0);
      }, 100);
    } else {
      navigate(url);
      closeSearch();
      window.scrollTo(0, 0);
    }
  };

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

  return {
    isSearchOpen,
    searchQuery,
    searchResults,
    searchInputRef,
    searchContainerRef,
    toggleSearch,
    closeSearch,
    handleSearch,
    handleSearchChange,
    handleResultClick,
    setIsSearchOpen
  };
};

// Helper function to search content
export const searchSiteContent = (query: string): SearchResult[] => {
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

  if (!query || query.trim() === '') return [];
  
  const lowerCaseQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery) || 
    item.excerpt.toLowerCase().includes(lowerCaseQuery) || 
    item.category.toLowerCase().includes(lowerCaseQuery)
  );
};

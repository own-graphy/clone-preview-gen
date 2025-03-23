
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-default", 
        scrolled ? "glass py-3" : "py-6 bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-lg font-medium">Graphix</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Products", "Features", "Pricing", "Support"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-default hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium transition-default hover:text-primary">
            Sign In
          </button>
          <button className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full transition-default hover:bg-primary/90">
            Try Free
          </button>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-40 glass-subtle transition-default", 
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col h-full pt-24 px-6 space-y-8">
          {["Products", "Features", "Pricing", "Support"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <button className="text-lg font-medium transition-default hover:text-primary">
              Sign In
            </button>
            <button className="text-lg font-medium bg-primary text-white px-6 py-3 rounded-full transition-default hover:bg-primary/90">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

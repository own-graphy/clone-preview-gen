
import React from 'react';
import { Search, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearch, SearchResult } from '@/hooks/use-search';

const SearchComponent: React.FC = () => {
  const { 
    isSearchOpen,
    searchQuery,
    searchResults,
    searchInputRef,
    searchContainerRef,
    toggleSearch,
    closeSearch,
    handleSearch,
    handleSearchChange,
    handleResultClick
  } = useSearch();
  
  const isMobile = useIsMobile();

  return (
    <>
      <button 
        onClick={toggleSearch} 
        className={`text-gray-200 hover:text-white transition-colors focus:outline-none ml-auto md:ml-0 z-20 ${isSearchOpen ? 'hidden' : 'block'}`}
        aria-label="Search"
      >
        <Search size={22} />
      </button>

      <div 
        ref={searchContainerRef}
        className={`absolute top-0 left-0 h-auto my-auto transition-all duration-300 ease-in-out flex items-center ${
          isSearchOpen 
            ? isMobile ? 'w-full px-2' : 'w-[calc(100%-90px)] right-14'
            : 'w-0 opacity-0'
        } bg-darkGray/90 backdrop-blur-md z-10 rounded-md border border-gray-700`}
        style={{ 
          padding: isSearchOpen ? '2px' : '0px',
          height: isSearchOpen ? 'calc(100% - 10px)' : '100%',
          margin: isSearchOpen ? '5px 0' : '0',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        {isSearchOpen && (
          <div className="w-full flex items-center h-full">
            <form onSubmit={handleSearch} className="flex-grow flex items-center h-full">
              <Search className="ml-3 h-5 w-5 text-gray-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search across the site..."
                className="flex-grow px-3 py-1 bg-transparent border-none focus:outline-none text-white h-full text-sm"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={() => {
                    handleSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
                    searchInputRef.current?.focus();
                  }}
                >
                  <X size={18} />
                </button>
              )}
            </form>
            <button 
              onClick={closeSearch}
              className="p-2 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>

      {isSearchOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-darkGray/95 backdrop-blur-lg shadow-lg max-h-[70vh] overflow-y-auto z-50 border-t border-gray-700 rounded-b-md">
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
    </>
  );
};

export default SearchComponent;

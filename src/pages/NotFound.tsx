
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  // Mock scrollTo function for the Navbar component
  const scrollTo = (section: string) => {
    // No-op function since we're not on the landing page
    console.log(`Would scroll to ${section} if on landing page`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={scrollTo} />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-medium mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-default"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

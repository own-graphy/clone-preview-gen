
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

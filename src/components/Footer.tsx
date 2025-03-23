
import React from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Advizo Consulting" className="h-8 w-auto mr-2" />
              <span className="font-semibold text-xl text-white">Advizo Consulting</span>
            </Link>
            <p className="mb-6">
              Strategic consulting services for MSMEs, helping businesses transform challenges into growth opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-primary transition-colors">Operational Excellence</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Revenue Growth</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Market Expansion</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Innovation & Technology</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Business Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-5 w-5 mr-2 mt-0.5" />
                <span>123 Business Avenue, Corporate District, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@advizoconsulting.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Advizo Consulting. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

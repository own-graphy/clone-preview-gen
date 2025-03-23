
import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Graphix" className="h-8 w-auto brightness-0 invert" />
              <span className="font-semibold text-xl">Graphix</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're a creative design agency focused on delivering exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services" label="Web Design" />
              <FooterLink to="/services" label="Logo Design" />
              <FooterLink to="/services" label="Branding" />
              <FooterLink to="/services" label="UI/UX Design" />
              <FooterLink to="/services" label="Print Design" />
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/portfolio" label="Portfolio" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="#" label="Privacy Policy" />
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-gray-400" />
                <span className="text-gray-400 text-sm">hello@graphix.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Graphix. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Designed & Developed with ❤️ by Graphix Team
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => (
  <li>
    <Link 
      to={to}
      className="text-gray-400 text-sm hover:text-white transition duration-300"
    >
      {label}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a 
    href="#" 
    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition duration-300"
  >
    {icon}
  </a>
);

export default Footer;

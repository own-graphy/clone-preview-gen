
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { logo } from '../../assets';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPortal
} from "@/components/ui/drawer";
import { MenuLink } from './NavLinks';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="text-gray-200 hover:text-white transition-colors focus:outline-none z-20"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DrawerPortal>
          <DrawerContent className="w-1/4 min-w-[300px] max-h-screen p-0 h-full rounded-none bg-[#181C24]">
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
              
              <nav className="flex-grow flex flex-col p-6 space-y-4">
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
    </>
  );
};

export default MobileMenu;

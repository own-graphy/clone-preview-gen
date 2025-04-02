
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
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

export const MenuLink: React.FC<MenuLinkProps> = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`block text-sm font-medium tracking-wide transition duration-300 ${
        active 
          ? 'text-[#0099FF]' 
          : 'text-white hover:text-[#0099FF]'
      }`}
    >
      {label}
    </Link>
  );
};

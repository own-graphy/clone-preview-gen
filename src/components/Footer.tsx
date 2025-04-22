
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGray text-gray-400 py-8 text-center border-t border-primary/20">
      <div className="mb-3 font-semibold text-white">Advizo Consulting &copy; {new Date().getFullYear()}</div>
      <div>Strategic consulting for MSMEs – Growth. Efficiency. Results.</div>
    </footer>
  );
};

export default Footer;

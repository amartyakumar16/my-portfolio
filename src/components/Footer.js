import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Amartya Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
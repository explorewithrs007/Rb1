import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-links left-links">
          <a href="#about" className="nav-link">House of RB</a>
          <a href="#collections" className="nav-link">Collections</a>
        </div>
        
        <div className="logo-container">
          <a href="#" className="logo shimmer-text">RB</a>
        </div>

        <div className="nav-links right-links">
          <a href="#bespoke" className="nav-link">Bespoke</a>
          <a href="#boutique" className="nav-link">Boutique</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

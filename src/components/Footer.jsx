import React from 'react';
// import { Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo shimmer-text">RB</h2>
            <p className="footer-tagline text-caption">Rupal Bagrechaa</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h5 className="footer-heading">Explore</h5>
              <ul className="footer-list">
                <li><a href="#about" className="footer-link">House of RB</a></li>
                <li><a href="#collections" className="footer-link">Collections</a></li>
                <li><a href="#bespoke" className="footer-link">Bespoke</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5 className="footer-heading">Legal</h5>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Returns</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5 className="footer-heading">Social</h5>
              <div className="social-icons">
                {/* <a href="#" className="social-icon hover-gold-glow"><Instagrams size={20} /></a> */}
                {/* <a href="#" className="social-icon hover-gold-glow"><Facebook size={20} /></a>
                <a href="#" className="social-icon hover-gold-glow"><Twitter size={20} /></a> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Rupal Bagrecha. All Rights Reserved.</p>
          <p className="credits">Designed for Timeless Elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

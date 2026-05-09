import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      heroRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    )
    .fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      "-=1"
    )
    .fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1599643477874-5c866f466cb1?q=80&w=2574&auto=format&fit=crop" 
          alt="Luxury Jewellery Background" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          <span className="shimmer-text">RB</span><br />
          <span className="hero-brand-name">Rupal Bagrecha</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle text-caption">Timeless Elegance Since 1998</p>
        
        <div ref={ctaRef} className="hero-cta">
          <a href="#collections" className="btn-primary">Explore Collections</a>
          <a href="#bespoke" className="btn-secondary">Book Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

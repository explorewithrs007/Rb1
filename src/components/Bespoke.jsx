import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Bespoke.css';

gsap.registerPlugin(ScrollTrigger);

const Bespoke = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        }
      }
    );

    gsap.fromTo(
      parallaxRef.current,
      { y: -50 },
      {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section id="bespoke" className="bespoke section-padding" ref={sectionRef}>
      <div className="container bespoke-container">
        <div className="bespoke-image-wrapper">
          <div className="bespoke-parallax-inner" ref={parallaxRef}>
            <img 
              src="https://images.unsplash.com/photo-1573408301145-b98c4142f31b?q=80&w=2574&auto=format&fit=crop" 
              alt="Designing bespoke jewellery" 
              className="bespoke-image"
            />
          </div>
        </div>
        
        <div className="bespoke-content" ref={textRef}>
          <h2 className="heading-sm text-gold">The Experience</h2>
          <h3 className="heading-md">Design Your Signature Piece</h3>
          <p className="text-body mt-2">
            Your unique story deserves to be immortalized in an extraordinary creation. The bespoke journey at Rupal Bagrecha is a collaborative exploration of imagination, where your vision meets our master craftsmanship.
          </p>
          <p className="text-body mt-1">
            From the initial sketch to the final polish, experience the magic of seeing your dream transform into a timeless masterpiece, crafted exclusively for you.
          </p>
          <div className="mt-2">
            <a href="#contact" className="btn-primary">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bespoke;

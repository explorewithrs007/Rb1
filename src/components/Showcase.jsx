import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Showcase.css';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      image1Ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        }
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
        }
      }
    );
  }, []);

  return (
    <section className="showcase section-padding" ref={sectionRef}>
      <div className="container showcase-container">
        <div className="showcase-header">
          <h2 className="heading-lg text-gold mb-2">The Art of Brilliance</h2>
          <p className="text-body max-w-lg">
            Our master artisans breathe life into precious stones and metals, creating masterpieces that transcend time. Every facet is meticulously cut, every setting crafted with precision.
          </p>
        </div>
        
        <div className="showcase-layout">
          <div className="showcase-img-wrapper img-1" ref={image1Ref}>
            <div className="image-zoom-container">
              <img 
                src="https://images.unsplash.com/photo-1599643477874-5c866f466cb1?q=80&w=2574&auto=format&fit=crop" 
                alt="Close up of diamond ring" 
              />
            </div>
          </div>
          
          <div className="showcase-img-wrapper img-2" ref={image2Ref}>
             <div className="image-zoom-container">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f6612644e?q=80&w=2670&auto=format&fit=crop" 
                alt="Gold necklace on model" 
              />
            </div>
            <div className="showcase-details">
              <h4 className="heading-sm text-gold">The Royal Emerald Set</h4>
              <p className="text-body mt-1">A symphony of Zambian emeralds and flawless diamonds, set in 18k yellow gold.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, filter: "blur(10px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container about-container">
        <div className="about-content" ref={textRef}>
          <h2 className="heading-sm text-gold">Heritage</h2>
          <h3 className="heading-md">Crafting Legacies Since 1998</h3>
          <p className="text-body mt-2">
            For over two decades, Rupal Bagrecha has been synonymous with unparalleled craftsmanship and timeless elegance. Founded on the principles of trust and artistry, every piece that leaves our boutique is a testament to our dedication to the fine art of jewellery making.
          </p>
          <p className="text-body mt-1">
            We believe that jewellery is not just an accessory, but an heirloom—a silent narrator of your most cherished stories, designed to be passed down through generations.
          </p>
          <div className="signature-container">
            <span className="signature">Rupal Bagrecha</span>
          </div>
        </div>
        
        <div className="about-image-wrapper">
          <div className="about-image-inner image-zoom-container" ref={imageRef}>
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop" 
              alt="Artisan crafting jewellery" 
              className="about-image"
            />
            <div className="about-image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

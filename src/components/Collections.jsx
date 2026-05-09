import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Collections.css';

gsap.registerPlugin(ScrollTrigger);

const collectionsData = [
  {
    title: 'Bridal Collection',
    image: 'https://images.unsplash.com/photo-1599643478514-4a4e0f152d2c?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-2 row-span-2'
  },
  {
    title: 'Diamond Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Gold Essentials',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Heritage Collection',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Bespoke Creations',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-1 row-span-1'
  }
];

const Collections = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(
      gridRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="collections" className="collections section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="heading-sm text-gold">Curations</h2>
          <h3 className="heading-lg">Signature Collections</h3>
        </div>
        
        <div className="collections-grid" ref={gridRef}>
          {collectionsData.map((item, index) => (
            <div key={index} className={`collection-card hover-gold-glow image-zoom-container ${item.span}`}>
              <img src={item.image} alt={item.title} className="collection-image" />
              <div className="collection-overlay">
                <h4 className="collection-title">{item.title}</h4>
                <span className="collection-link">Discover</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Scissors, ShieldCheck, HeartHandshake } from 'lucide-react';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: 'Certified Purity',
    description: 'Every diamond and gemstone is ethically sourced and accompanied by certification.'
  },
  {
    icon: <Scissors size={32} strokeWidth={1} />,
    title: 'Handcrafted Excellence',
    description: 'Meticulously crafted by master artisans blending traditional techniques with modern design.'
  },
  {
    icon: <Award size={32} strokeWidth={1} />,
    title: 'Trusted Since 1998',
    description: 'A legacy of over two decades built on uncompromising quality and customer trust.'
  },
  {
    icon: <HeartHandshake size={32} strokeWidth={1} />,
    title: 'Personalized Experience',
    description: 'Dedicated consultants to guide you through a bespoke and intimate shopping journey.'
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      cardsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section className="features section-padding" ref={sectionRef}>
      <div className="features-bg-image"></div>
      <div className="container">
        <div className="section-header text-center mb-5 relative z-10">
          <h2 className="heading-sm text-gold">The RB Promise</h2>
          <h3 className="heading-lg">Why Choose Us</h3>
        </div>
        
        <div className="features-grid relative z-10" ref={cardsRef}>
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card glassmorphism hover-gold-glow">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title heading-sm text-gold">{feature.title}</h4>
              <p className="feature-description text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    text: "The bespoke necklace crafted for my wedding was nothing short of a masterpiece. The attention to detail and the sheer brilliance of the diamonds left everyone in awe.",
    author: "Anjali M.",
    location: "Mumbai"
  },
  {
    text: "Rupal Bagrecha is where art meets elegance. Their heritage collection speaks volumes of their deep understanding of traditional Indian jewellery, yet feels incredibly modern.",
    author: "Priya S.",
    location: "London"
  },
  {
    text: "A truly personalized experience from start to finish. They understood exactly what I envisioned for our anniversary ring and delivered beyond expectations.",
    author: "Kavita R.",
    location: "Dubai"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonialsData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonialsData.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="testimonial-controls prev" onClick={prevSlide}>
            <ChevronLeft size={32} strokeWidth={1} />
          </div>
          
          <div className="testimonial-carousel">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-slide ${index === current ? 'active' : ''}`}
              >
                <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
                <h5 className="testimonial-author">{testimonial.author}</h5>
                <span className="testimonial-location text-caption">{testimonial.location}</span>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls next" onClick={nextSlide}>
            <ChevronRight size={32} strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

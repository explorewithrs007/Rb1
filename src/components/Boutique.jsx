import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import './Boutique.css';

const Boutique = () => {
  return (
    <section id="boutique" className="boutique section-padding">
      <div className="container">
        <div className="boutique-container">
          <div className="boutique-info">
            <h2 className="heading-sm text-gold mb-2">The Boutique</h2>
            <h3 className="heading-lg mb-5">Visit Our Sanctuary</h3>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon text-gold" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-caption mb-1">Flagship Store</h4>
                  <p className="text-body">123 Luxury Avenue, High Street<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon text-gold" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-caption mb-1">Contact</h4>
                  <p className="text-body">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="boutique-cta mt-5">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn-primary flex-center gap-2">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a href="#book" className="btn-secondary">Book Appointment</a>
            </div>
          </div>
          
          <div className="boutique-visuals">
            <div className="boutique-image-main image-zoom-container">
              <img 
                src="https://images.unsplash.com/photo-1571554552636-66f8e7150c26?q=80&w=2670&auto=format&fit=crop" 
                alt="Boutique Interior" 
              />
            </div>
            {/* Minimal Map Placeholder representing Google Map Integration */}
            <div className="boutique-map glassmorphism">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.14304683058!2d72.77587895315518!3d19.082502006132715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Boutique Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boutique;

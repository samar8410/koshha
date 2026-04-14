import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Discover the Ancient Wisdom of Ayurveda</h2>
        <p>Experience luxurious skincare that nourishes your skin from within, using time-honored Ayurvedic ingredients.</p>
        <button className="cta-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/600x400?text=Ayurvedic+Skincare" alt="Ayurvedic skincare products" />
      </div>
    </section>
  );
};

export default HeroSection;
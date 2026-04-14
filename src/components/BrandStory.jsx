import React from 'react';
import '../styles/BrandStory.css';

const BrandStory = () => {
  return (
    <section className="brand-story">
      <div className="story-content">
        <h3>Our Ayurvedic Heritage</h3>
        <p>Rooted in 5,000 years of Ayurvedic wisdom, AyurGlow brings the essence of ancient healing traditions to modern skincare. Our formulations blend rare herbs, precious oils, and sustainable practices to nurture your skin's natural balance.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="story-image">
        <img src="https://via.placeholder.com/500x400?text=Ayurvedic+Heritage" alt="Ayurvedic heritage" />
      </div>
    </section>
  );
};

export default BrandStory;
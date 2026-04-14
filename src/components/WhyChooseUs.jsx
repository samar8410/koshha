import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Pure Natural Ingredients', description: 'Sourced from organic farms and wildcrafted herbs.' },
    { title: 'Ayurvedic Expertise', description: 'Formulated by Ayurvedic practitioners with centuries of knowledge.' },
    { title: 'Sustainable Practices', description: 'Eco-friendly packaging and ethical sourcing.' },
    { title: 'Holistic Wellness', description: 'Products that nourish body, mind, and spirit.' },
  ];

  return (
    <section className="why-choose-us">
      <h3>Why Choose AyurGlow?</h3>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <h4>{reason.title}</h4>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
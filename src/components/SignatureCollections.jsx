import React from 'react';
import '../styles/SignatureCollections.css';

const SignatureCollections = () => {
  const collections = [
    { name: 'Dosha Balance Set', description: 'Personalized for your unique constitution.', image: 'https://via.placeholder.com/400x300?text=Dosha+Balance' },
    { name: 'Seasonal Harmony Kit', description: 'Adapt your routine to nature\'s cycles.', image: 'https://via.placeholder.com/400x300?text=Seasonal+Harmony' },
  ];

  return (
    <section className="signature-collections">
      <h3>Signature Collections</h3>
      <div className="collections-showcase">
        {collections.map((collection, index) => (
          <div key={index} className="collection-showcase-item">
            <img src={collection.image} alt={collection.name} />
            <div className="collection-info">
              <h4>{collection.name}</h4>
              <p>{collection.description}</p>
              <button className="explore-btn">Explore Collection</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureCollections;
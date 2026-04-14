import React from 'react';
import '../styles/FeaturedCollections.css';

const FeaturedCollections = () => {
  const collections = [
    { name: 'Radiant Glow Collection', description: 'Illuminate your skin with natural radiance.', image: 'https://via.placeholder.com/300x300?text=Radiant+Glow' },
    { name: 'Tranquil Calm Collection', description: 'Soothe and balance for peaceful skin.', image: 'https://via.placeholder.com/300x300?text=Tranquil+Calm' },
  ];

  return (
    <section className="featured-collections">
      <h3>Featured Collections</h3>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-item">
            <img src={collection.image} alt={collection.name} />
            <h4>{collection.name}</h4>
            <p>{collection.description}</p>
            <button className="shop-btn">Shop Collection</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
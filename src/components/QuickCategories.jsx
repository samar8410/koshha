import React from 'react';
import '../styles/QuickCategories.css';

const QuickCategories = () => {
  const categories = [
    { label: 'AURA SPRAYS', href: '#aura-sprays' },
    { label: 'SALT LAMPS', href: '#salt-lamps' },
    { label: 'PAIN RELIEVING OIL', href: '#pain-relieving-oil' },
    { label: 'HERBS & RESINS', href: '#herbs-resins' },
    { label: 'FACIAL CARE', href: '#facial-care' },
    { label: 'FACIAL BARS', href: '#facial-bars' },
    { label: 'FACE ROLLER', href: '#face-roller' },
    { label: 'ESSENTIAL OILS', href: '#essential-oils' },
    { label: 'DIFFUSERS', href: '#diffusers' },
    { label: 'CRYSTALS & GEMSTONES', href: '#crystals-gemstones' },
    { label: 'BATHING BARS', href: '#bathing-bars' },
  ];

  return (
    <section className="quick-categories">
      <div className="category-pills">
        {categories.map((category) => (
          <a
            key={category.label}
            href={category.href}
            className="category-pill"
          >
            {category.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickCategories;
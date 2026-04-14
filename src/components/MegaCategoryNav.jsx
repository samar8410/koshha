import React from 'react';
import '../styles/MegaCategoryNav.css';

const MegaCategoryNav = () => {
  return (
    <nav className="mega-category-nav">
      <ul className="mega-list">
        <li><a href="#facial-care">Facial care</a></li>
        <li><a href="#aura-sprays">Aura Sprays</a></li>
        <li><a href="#essential-oils">Essential Oils</a></li>
        <li><a href="#salt-lamps">Salt Lamps</a></li>
        <li className="mega-highlight"><a href="#bath-body">Bath & Body</a></li>
        <li><a href="#crystals-gemstones">Crystals & Gemstones</a></li>
        <li><a href="#gifting">Gifting</a></li>
        <li><a href="#bestsellers">Bestsellers</a></li>
        <li><a href="#all-products">All Products</a></li>
      </ul>
    </nav>
  );
};

export default MegaCategoryNav;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoImage from '../assets/logo.webp';
import searchIcon from '../assets/search.svg';
import menuIcon from '../assets/menu.svg';
import loginIcon from '../assets/login.svg';
import cartIcon from '../assets/cart.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/menu" className="icon-btn menu-btn" aria-label="Open menu">
          <img src={menuIcon} alt="Menu" className="icon-img" />
        </Link>
        <Link to="/search" className="icon-btn search-btn" aria-label="Search">
          <img src={searchIcon} alt="Search" className="icon-img" />
        </Link>
      </div>

      <Link to="/" className="logo">
        <img src={logoImage} alt="AyurGlow Logo" className="logo-img" />
      </Link>

      <div className="header-right">
        <Link to="/account" className="icon-btn account-btn" aria-label="Account">
          <img src={loginIcon} alt="Account" className="icon-img" />
        </Link>
        <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
          <img src={cartIcon} alt="Cart" className="icon-img" />
          <span className="cart-badge">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

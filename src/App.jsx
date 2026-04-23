import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar'; // 👈 ADD THIS
import Home from './Home';
import Search from './pages/Search';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <AnnouncementBar /> {/* 👈 NOW ON TOP */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

    </div>
  );
}

export default App;
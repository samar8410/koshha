import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MegaCategoryNav from './components/MegaCategoryNav';
import HeroSlider from './components/HeroSlider';
import QuickCategories from './components/QuickCategories';
import BestSellers from './components/BestSellers';
import InTheSpotlight from './components/InTheSpotlight';
import ProductCarouselSections from './components/ProductCarouselSections';
import FeaturedCollections from './components/FeaturedCollections';
import BrandStory from './components/BrandStory';
import WhyChooseUs from './components/WhyChooseUs';
import SignatureCollections from './components/SignatureCollections';
import Footer from './components/Footer';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <AnnouncementBar />
      <Header />
      <MegaCategoryNav />
      <HeroSlider />
      <QuickCategories />
      <BestSellers />
      <InTheSpotlight />
      <ProductCarouselSections />
      <FeaturedCollections />
      <BrandStory />
      <WhyChooseUs />
      <SignatureCollections />
      <Footer />
    </div>
  );
};

export default Home;
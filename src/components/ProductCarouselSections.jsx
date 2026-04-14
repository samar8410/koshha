import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/ProductCarouselSections.css';

import bs1 from '../assets/bestSeller/bs_1.webp';
import bs2 from '../assets/bestSeller/bs_2.webp';
import bs3 from '../assets/bestSeller/bs_3.webp';
import bs4 from '../assets/bestSeller/bs_4.webp';
import bs5 from '../assets/bestSeller/bs_5.webp';
import bs6 from '../assets/bestSeller/bs_6.webp';
import bs7 from '../assets/bestSeller/bs_7.webp';
import bs8 from '../assets/bestSeller/bs_8.webp';

const carouselSections = [
  {
    id: 'iconic-bestsellers',
    title: 'Iconic Collection',
    showTrending: true,
    products: [
      {
        id: 1,
        name: 'SOUNDARYA AGE DEFYING FACIAL SERUM',
        subtitle: 'With 24 Karat Gold',
        price: '₹5,695.00',
        image: bs1,
        rating: '4.5 ★',
      },
      {
        id: 2,
        name: 'AFTER BATH OIL LIME SAFFRON & OUDH',
        subtitle: 'Scented Moisture Sealer',
        price: '₹1,950.00',
        image: bs2,
        rating: '4.4 ★',
      },
      {
        id: 3,
        name: 'TRANSFORMATIVE SOUNDARYA NIGHT CREAM',
        subtitle: 'Serum-soaked Age-defying Night Formula',
        price: '₹3,375.00',
        image: bs3,
        rating: '4.6 ★',
      },
      {
        id: 4,
        name: 'KESARI INTENSE PERFUME',
        subtitle: 'Warm. Intense. Earthy.',
        price: '₹6,200.00',
        image: bs4,
        rating: '4.3 ★',
      },
    ],
  },
  {
    id: 'gallery-favorites',
    title: 'Gallery Favorites',
    showTrending: false,
    products: [
      {
        id: 5,
        name: 'NEEM & TURMERIC CLARITY OIL',
        subtitle: 'Cleanse, calm and glow',
        price: '₹2,150.00',
        image: bs5,
        rating: '4.7 ★',
      },
      {
        id: 6,
        name: 'SANDALWOOD REPAIR BALM',
        subtitle: 'Strengthen and restore',
        price: '₹1,750.00',
        image: bs6,
        rating: '4.8 ★',
      },
      {
        id: 7,
        name: 'ELDERFLOWER TONIC MIST',
        subtitle: 'Hydrate with a light veil',
        price: '₹1,250.00',
        image: bs8,
        rating: '4.5 ★',
      },
      {
        id: 8,
        name: 'ROSE INFUSED BODY SERUM',
        subtitle: 'Silky softness in every drop',
        price: '₹2,450.00',
        image: bs7,
        rating: '4.7 ★',
      },
    ],
  },
];

const ProductCarouselSections = () => {
  const breakpoints = {
    0: { slidesPerView: 1.05, spaceBetween: 14 },
    640: { slidesPerView: 1.5, spaceBetween: 16 },
    900: { slidesPerView: 2.1, spaceBetween: 20 },
    1200: { slidesPerView: 3.3, spaceBetween: 24 },
    1500: { slidesPerView: 4.1, spaceBetween: 28 },
  };

  return (
    <div className="product-carousel-sections">
      {carouselSections.map((section) => (
        <section className="product-carousel-section" id={section.id} key={section.id}>
          <div className="section-heading-row">
            <h3>{section.title}</h3>
            <a href={`#${section.id}`} className="section-link">
              VIEW ALL →
            </a>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={750}
            navigation
            breakpoints={breakpoints}
            className="product-carousel-swiper"
          >
            {section.products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <article className="section-product-card">
                  <div className="section-product-image">
                    {section.showTrending && index === 0 && (
                      <span className="trending-pill">TRENDING NOW</span>
                    )}
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="section-product-copy">
                    <h4>{product.name}</h4>
                    <p className="product-subtitle">{product.subtitle}</p>
                    <p className="product-size">2 Sizes Available</p>
                    <div className="price-row">
                      <span className="product-price">{product.price}</span>
                      <span className="product-rating">{product.rating}</span>
                    </div>
                    <button className="select-size-btn" type="button">
                      SELECT SIZE
                      <span className="dropdown-arrow">▾</span>
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </div>
  );
};

export default ProductCarouselSections;

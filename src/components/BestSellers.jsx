import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/BestSellers.css';

import bs1 from '../assets/bestSeller/bs_1.webp';
import bs2 from '../assets/bestSeller/bs_2.webp';
import bs3 from '../assets/bestSeller/bs_3.webp';
import bs4 from '../assets/bestSeller/bs_4.webp';
import bs5 from '../assets/bestSeller/bs_5.webp';
import bs6 from '../assets/bestSeller/bs_6.webp';
import bs7 from '../assets/bestSeller/bs_7.webp';
import bs8 from '../assets/bestSeller/bs_8.webp';

const products = [
  {
    id: 1,
    name: 'Kumkumadi Youth-Recovering Night Balm',
    price: '₹2295.00',
    image: bs1,
    label: 'NEW & IMPROVED',
    rating: '5.0 ★ (55)',
    description:
      'Saffron-infused cream to restore and rejuvenate your skin overnight.',
  },
  {
    id: 2,
    name: 'Bringaras Balancing Shampoo',
    price: '₹525.00',
    image: bs2,
    label: 'NEW & IMPROVED',
    rating: '4.9 ★ (12)',
    description:
      'For nourished, balanced hair with gentle Ayurvedic care.',
  },
  {
    id: 3,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs3, 
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 4,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs4,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 5,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs5,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 6,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs6,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 7,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs7,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 8,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs8,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
  {
    id: 9,
    name: 'Bringaras Invigorating Scalp & Hair Oil',
    price: '₹615.00',
    image: bs1,
    label: 'NEW & IMPROVED',
    rating: '4.7 ★ (60)',
    description:
      'Stimulates growth and rebalances scalp health naturally.',
  },
];

const swiperBreakpoints = {
  0: { slidesPerView: 1.1, spaceBetween: 16 },
  640: { slidesPerView: 1.2, spaceBetween: 18 },
  900: { slidesPerView: 2, spaceBetween: 20 },
  1200: { slidesPerView: 3, spaceBetween: 24 },
};

const BestSellers = () => {
  return (
    <section className="best-sellers" id="bestsellers">
      <div className="best-sellers-heading">
        <h3>Our Bestsellers</h3>
        <a
          href="#bestsellers"
          className="view-all-link"
          aria-label="View all bestselling products"
        >
          View All
        </a>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={swiperBreakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <article className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>

              <div className="product-details">
                <div className="product-meta">
                  <span>{product.label}</span>
                  <span>{product.rating}</span>
                </div>

                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellers;
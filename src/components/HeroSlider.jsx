import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/HeroSlider.css';

import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.png';
import banner4 from '../assets/banner_4.png';

const slides = [
  {
    id: 1,
    backgroundImage: `linear-gradient(180deg, rgba(69, 18, 18, 0.25), rgba(15, 7, 5, 0.35)), url(${banner1})`,
    subtitle: 'New ritual',
    title: 'kama glow ritual',
    tagline: 'Glow now and tomorrow with timeless radiance.',
    statOne: '98% Younger Skin',
    statTwo: '98% Brighter Skin',
    cta: 'Shop Now',
  },
  {
    id: 2,
    backgroundImage: `linear-gradient(180deg, rgba(47, 14, 10, 0.25), rgba(10, 6, 4, 0.35)), url(${banner2})`,
    subtitle: 'Luxury formula',
    title: 'reawaken your radiance',
    tagline: 'Infuse your skin with glowing hydration and soft luminosity.',
    statOne: '95% Improved Texture',
    statTwo: '100% Cruelty Free',
    cta: 'Explore Collection',
  },
  {
    id: 3,
    backgroundImage: `linear-gradient(180deg, rgba(35, 9, 9, 0.25), rgba(8, 4, 3, 0.35)), url(${banner3})`,
    subtitle: 'Signature glow',
    title: 'timeless skincare luxury',
    tagline: 'Indulge in a ritual designed for healthy, luminous skin.',
    statOne: '92% Skin Renewal',
    statTwo: 'Rich Botanical Blend',
    cta: 'Discover Now',
  },
  {
    id: 4,
    backgroundImage: `linear-gradient(180deg, rgba(47, 14, 10, 0.25), rgba(10, 6, 4, 0.35)), url(${banner4})`,
    subtitle: 'Luxury formula',
    title: 'pure wellness ritual',
    tagline: 'Elevate your self-care with nature-inspired wellness essentials.',
    statOne: '100% Natural',
    statTwo: 'Daily Ritual',
    cta: 'Explore More',
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <div className="hero-slide-copy">
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-tagline">{slide.tagline}</p>

                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>{slide.statOne.split(' ')[0]}</strong>
                    <span>{slide.statOne.replace(/^\S+\s*/, '')}</span>
                  </div>
                  <div className="hero-stat">
                    <strong>{slide.statTwo.split(' ')[0]}</strong>
                    <span>{slide.statTwo.replace(/^\S+\s*/, '')}</span>
                  </div>
                </div>

                <button className="hero-cta">{slide.cta}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
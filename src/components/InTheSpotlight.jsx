import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/InTheSpotlight.css';


import spotlight_1 from '../assets/spotlight_1.png';
import spotlight_2 from '../assets/spotlight_2.png';
import spotlight_3 from '../assets/spotlight_3.png';
import spotlight_4 from '../assets/spotlight_4.png';
import spotlight_5 from '../assets/spotlight_5.png';


const InTheSpotlight = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'Bringaras Rebalanced Scalp',
      description: 'A luxurious ritual for stronger, shinier hair.',
      image: spotlight_1
    },
    {
      id: 2,
      title: 'Kama Ayurveda Elixir',
      description: 'Pure saffron and herbs in a single bottle.',
      image: spotlight_2
    },
    {
      id: 3,
      title: 'Signature Treatment Oil',
      description: 'Nourish your scalp with ancient botanicals.',
      image: spotlight_3
    },
    {
      id: 4,
      title: 'Luxury Hair Ritual',
      description: 'Deep conditioning for a radiant glow.',
      image: spotlight_4
    },
    {
      id: 5,
      title: 'Botanical Aroma Drop',
      description: 'A silky infusion for scalp comfort.',
      image: spotlight_5
    }
  ];

  return (
    <section className="in-the-spotlight">
      <h2>In the Spotlight</h2>

      <div className="spotlight-carousel-wrapper">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          spaceBetween={40}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 180,
            modifier: 1.05,
            slideShadows: true
          }}
          className="spotlight-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="spotlight-slide">
              <div className="slide-container">
                <img src={slide.image} alt={slide.title} className="slide-image" />
                
                <div className="slide-overlay">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button className="slide-action">Explore More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={prevRef} className="spotlight-nav spotlight-prev" aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button ref={nextRef} className="spotlight-nav spotlight-next" aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default InTheSpotlight;

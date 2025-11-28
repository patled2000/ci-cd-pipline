 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Style/heroslider.css";

import slide1 from "../assets/image/slider/one.png";
import slide2 from "../assets/image/slider/two.png";
import slide3 from "../assets/image/slider/three.png";

const slides = [
  { id: 1, image: slide1, title: "" },
  { id: 2, image: slide2, title: "" },
  { id: 3, image: slide3, title: "" },
];

const ResponsiveSlider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        speed={1200}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              <img src={slide.image} alt="slider" className="slide-img" />
              <div className="overlay"></div>

              <h2 className="slide-title">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResponsiveSlider;

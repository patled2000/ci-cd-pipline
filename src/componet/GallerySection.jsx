 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Autoplay removed
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Style/gallerySlider.css";

import gl1 from '../assets/image/DSC01372.webp';
import gl2 from '../assets/image/DSC01749.webp';
import gl3 from '../assets/image/DSC01386.webp';
import gl4 from '../assets/image/DSC01636.webp';
import gl5 from '../assets/image/DSC01391.webp';
import gl6 from '../assets/image/DSC01572.webp';

const images = [
  { img: gl1, title: "Shagun Premium Floral" },
  { img: gl2, title: "Shagun Floral Aroma" },
  { img: gl3, title: "Suyog 2 in 1 Floral" },
  { img: gl4, title: "Suyog Floral Fresh" },
  { img: gl5, title: "Suyog Aromatic" },
  { img: gl6, title: "Madhuban Floral" },
];

const GallerySlider = () => {
  return (
    <section className="gallery-slider-section">
      <h2 className="section-title">Our Premium Products</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={25}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="product-card">
              <img src={item.img} alt={item.title} className="product-img" />
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>Premium Quality Incense</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySlider;

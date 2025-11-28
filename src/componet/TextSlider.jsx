 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const slides = [
  "Sharda Industries - Reliable Supply",
  "Marketing & Promotional Support",
  "Business Development Assistance",
  "Long-term Partnership Opportunities",
  "High Profit Potential with Low Investment",
];

export default function TextSlider() {
  return (
    <section className="text-slider-section">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        freeMode={{ enabled: true }}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {slides.map((text, idx) => (
          <SwiperSlide key={idx} style={{ width: "auto" }}>
            <div className="slide-text">{text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

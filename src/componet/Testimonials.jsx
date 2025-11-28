 import React from "react";
import "../Style/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import one from "../assets/image/1.png";
import two from "../assets/image/2.png";
import three from "../assets/image/3.png";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai, India",
    rating: 5,
    photo: two,
    quote:
      "Amazing fragrance and long-lasting. Packaging was neat and delivery was fast. Highly recommended!",
  },
  {
    id: 2,
    name: "Sneha Patel",
    location: "Pune, India",
    rating: 5,
    photo: one,
    quote:
      "Natural smell and very calming. I ordered bulk for the puja and loved the quality.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Delhi, India",
    rating: 4,
    photo: three,
    quote:
      "Great value for money. Customer support was helpful. Will buy again.",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`star ${filled ? "filled" : ""}`}
    viewBox="0 0 24 24"
    width="16"
    height="16"
  >
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.172L12 18.896l-7.336 3.875 1.402-8.172L.132 9.21l8.2-1.192z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h1 className="testimonials-title">What our customers say</h1>

        {/* Desktop Grid */}
        <div className="reviews-grid">
          {reviews.map((r) => (
            <article key={r.id} className="review-card">
              <div className="review-top">
                <img src={r.photo} alt={r.name} className="avatar" />
                <div className="meta">
                  <h3 className="review-name">{r.name}</h3>
                  <p className="review-location">{r.location}</p>
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < r.rating} />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="review-quote">“{r.quote}”</blockquote>
            </article>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="reviews-carousel">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={18}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <article className="review-card-sm">
                  <div className="review-top">
                    <img src={r.photo} alt={r.name} className="avatar" />
                    <div className="meta">
                      <h3 className="review-name">{r.name}</h3>
                      <p className="review-location">{r.location}</p>
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} filled={i < r.rating} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="review-quote">“{r.quote}”</blockquote>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

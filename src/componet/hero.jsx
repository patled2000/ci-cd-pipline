 import React from "react";
import "../Style/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Pure Fragrance, Timeless Devotion</h1>
          <p className="hero-sub">
            Handcrafted agarbattis & dhoop that bring peace and positivity to every prayer.
          </p>

          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">Shop Now</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

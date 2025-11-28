import React from "react";
import "../Style/features.css";
import { FaFire, FaLeaf, FaStar, FaHeart } from "react-icons/fa"; 

const features = [
  {
    id: 1,
    icon: <FaHeart />,
    title: "Crafted with Devotion",
    desc: "Each incense stick reflects faith, care, and spiritual dedication.",
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Spiritual Essence",
    desc: "Fragrances that connect hearts with faith.",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Premium Quality",
    desc: "Our promise of purity and perfection in every single product.",
  },
  {
    id: 4,
    icon: <FaFire />,
    title: "Long Lasting Aroma",
    desc: "Experience fragrance that stays longer and spreads positivity.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((item) => (
          <div className="feature-box" key={item.id}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

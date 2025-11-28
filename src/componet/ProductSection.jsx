 import React, { useState } from "react";
import "../Style/productSection.css";

// Product Images
import agarbati1 from '../assets/image/DSC01372.webp';
import agarbati2 from '../assets/image/DSC01391.webp';
import agarbati3 from '../assets/image/DSC01749.webp';
import agarbati4 from '../assets/image/DSC01636.webp';

// Product Data
const products = [
  {
    id: 1,
    category: "Agarbatti",
    title: "Premium Agarbatti",
    desc: "Pure natural incense sticks for home & temple.",
    rate: "₹250 / pack",
    images: [agarbati1, agarbati2,  ],
  },
  {
    id: 2,
    category: "Dhoopbatti",
    title: "Luxury Dhoop",
    desc: "Calming fragrance to relax your mind and soul.",
    rate: "₹300 / pack",
    images: [agarbati1, agarbati2,  ],
  },
  {
    id: 3,
    category: "Agarbatti",
    title: "Special Agarbatti",
    desc: "Refreshing aroma for your meditation.",
    rate: "₹200 / pack",
    images: [agarbati1, agarbati2,  ],
  },
  {
    id: 4,
    category: "Dhoopbatti",
    title: "Premium Dhoop Stick",
    desc: "Relaxing incense for home & temple.",
    rate: "₹350 / pack",
    images: [agarbati1, agarbati2,  ],
  },
];

const categories = ["All", "Agarbatti", "Dhoopbatti"];

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mainImageIndex, setMainImageIndex] = useState({});
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleThumbnailClick = (productId, idx) => {
    setMainImageIndex({ ...mainImageIndex, [productId]: idx });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.slice(0, visibleCount).map(product => {
          const mainIdx = mainImageIndex[product.id] || 0;
          return (
            <div key={product.id} className="product-card">
              <div className="main-image-container">
                <img
                  src={product.images[mainIdx]}
                  alt={product.title}
                  className="main-image"
                />
              </div>

              <div className="thumbnail-row">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className={`thumbnail ${mainIdx === idx ? "active-thumb" : ""}`}
                    onClick={() => handleThumbnailClick(product.id, idx)}
                  />
                ))}
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.desc}</p>
                <p className="product-rate">{product.rate}</p>

                <a
                  href="https://wa.me/919907705500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </section>
  );
};

export default ProductSection;

 import React from "react";
import "../Style/whyChoose.css";

// Icons
import icon1 from "../assets/icons/natural.png";
import icon2 from "../assets/icons/fragrance.png";
import icon3 from "../assets/icons/trusted.png";
import icon4 from "../assets/icons/purity.png";

// Right side image
import rightImg from "../assets/image/why.png";

const points = [
  {
    id: 1,
    icon: icon1,
    title: "100% Natural & Eco-Friendly",
    desc: "We guarantee that every stick is produced using eco-friendly, natural, and biodegradable materials, thus ensuring environmental care, and cleansing and purifying every location."
  },
  {
    id: 2,
    icon: icon2,
    title: "Authentic Fragrance Blends",
    desc: "Our collection of incense comprises breathtaking fragrances that alleviate stress and energize your spirit, including calming Kaccha Bela, soothing Rose, and rich musk along with other woods, chandan, and subdued fragrances."
  },
  {
    id: 3,
    icon: icon3,
    title: "Trusted Across India",
    desc: "For the last 10 years, temples and devotees all over the country have been relying on the honesty and pure, soulful fragrances provided by Sharda Industries."
  },
  {
    id: 4,
    icon: icon4,
    title: "A Symbol of Faith & Purity",
    desc: "We intend to preserve and build spiritual welfare and devotion by ethically manufacturing every product that upholds the beacon of purity and devotion."
  }
];

const WhyChooseLayout = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container two-column">
        
        {/* Left Side: Content + 4 Boxes */}
        <div className="why-choose-left">
          <div className="left-content">
            <h2>Why Choose  </h2>
            <p className="why-choose-desc">
              At Sharda Industries, we understand that scent goes beyond mere fragrance. 
              It embodies an emotional and spiritual bond. Since 2014, we have been manufacturing 
              pure, natural, and eco-friendly Premium agarbattis and dhoopbattis that promote 
              devotion and peace and comfort every space you visit.
            </p>
          </div>

          <div className="icon-grid">
            {points.map(point => (
              <div key={point.id} className="point-item">
                <img src={point.icon} alt={point.title} className="point-icon"/>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
          <p className="why-choose-desc">We intend to preserve and build spiritual welfare and devotion by ethically manufacturing every product that upholds the beacon of purity and devotion.
</p>
        </div>

        {/* Right Side: Image */}
        <div className="why-choose-right">
          <img src={rightImg} alt="Why Choose" className="right-image"/>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseLayout;

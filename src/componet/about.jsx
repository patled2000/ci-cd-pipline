 import React from "react";
import aboutImg from "../assets/image/aboutsection.png"; // apni image ka path yahan lagao
import "../Style/about.css";

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={aboutImg} alt="About Sharda Industries" />
      </div>
      <div className="about-content">
        <h2>About Sharda Industries</h2>
        <h3>The Essence of Faith in Every Fragrance</h3>
        <p>
          To Sharda Industries, fragrance signifies a passageway, a connection where
           trust meets emotion. Every agarbatti and dhoopbatti we produce is machincraft,
            embodying devotion and reverence since 2014. We aim to fill every household and 
            temple with peace and positivity. Each product is carefully manufactured using 100%
             natural, biodegradable and eco friendly resources, merging old world artistry with 
             modern eco consciousness. 
        </p>
        <p>Our agarbattis are crafted with greater depth and richness than ordinary incense
           sticks, ensuring a longer lasting and more fulfilling fragrance experience.</p>
        <p>For every prayer and meditation, we offer a bouquet of fragrances  Kaccha Bela, 
          Rose, Musk, Sugandh Sigar, Intimate, Woods and Chandan. Every prayer and meditation
           session is infused with our products and becomes a source of calmness, spiritual harmony 
           and freshness.</p>
           <p>Sharda Industries has become synonymous with
             natural incense. Heritage, purity, and devotion are interwoven within
              every product, disconnecting and reconnecting hearts and homes with a divine aroma. Sharda 
            Industries has gained trust throughout India, and with every product we deliver, we embody a legacy. </p>
      </div>
    </section>
  );
};

export default AboutPage;

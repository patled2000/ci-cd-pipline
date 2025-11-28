 import React from "react";
import "../Style/footer.css";
import logo from "../assets/image/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section about">
          <img src={logo} alt="Suyog Agarbatti" className="footer-logo-img" />
          <p>
            Premium incense sticks made with natural oils & pure ingredients.
            Experience fragrance that touches the soul.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/people/Sharda-Industries/61581194392710/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/shardaindustries.co.in/"><FaInstagram /></a>
            <a href=" https://wa.me/919907705500" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            
          </div>
        </div>

        {/* Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section news">
          <h3>Contact Info</h3>
          <p>Subscribe to receive new fragrance launches & offers.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>

          <p className="contact-info">
              Sharada Agarbatti, Bada Bazaar, Sagar (M.P.) 470001
             
          </p>
            <p className="contact-info">
              
             shardaindustriesink@gmail.com
          </p>
            <p className="contact-info">
               
             +91 9907705500 
             
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Suyog Agarbatti |  Inkcast Innovations</p>
      </div>
    </footer>
  );
};

export default Footer;

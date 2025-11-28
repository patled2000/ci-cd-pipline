 import React from "react";
import "../Style/mapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Only Map */}
        <div className="map-left">
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58391.465927204896!2d78.70742692446869!3d23.837558735141606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d14a2cf591af%3A0xf446eaa2b5281370!2sSagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1763732135222!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sharda Industries Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

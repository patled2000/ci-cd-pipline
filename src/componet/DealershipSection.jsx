 import React from "react";
import "../Style/dealershipSection.css";
import { FaHandshake, FaBullhorn, FaChartLine, FaAward } from "react-icons/fa";

const topics = [
  { icon: <FaHandshake />, title: "Reliable Supply", desc: "Reliable product supply and quality assurance" },
  { icon: <FaBullhorn />, title: "Marketing Support", desc: "Marketing and promotional support" },
  { icon: <FaChartLine />, title: "Business Development", desc: "Business development assistance" },
  { icon: <FaAward />, title: "Long-term Partnership", desc: "Long-term partnership opportunities" },
];

const DealershipSection = () => {
  return (
    <section className="dealership-section">
      <div className="container">
        {/* Left Content */}
        <div className="dealership-left">
          <h2>Dealership and Distributor Opportunities Sharda Industries</h2>
          <p style={{ textAlign:"justify"}}>
            Are you looking to start your own business with low investment and high returns? Sharda 
            Industries offer an excellent opportunity to become our dealer or distributor and earn up to 25% profit with minimal investment.
            Our manufacturing unit is located in Sagar, and our corporate office is based in Bhopal and Indore ensuring smooth coordination, timely delivery, and strong support for all our partners.
            At Sharda Industries, we believe in growing together. We provide complete guidance and support to our dealers and distributors, including:
          </p>
           
          
          {/* Topics Grid 2x2 */}
          <div className="topics-list">
            {topics.map((topic, idx) => (
              <div key={idx} className="topic-item">
                <div className="topic-heading">
                  <span className="topic-icon">{topic.icon}</span>
                  <h4>{topic.title}</h4>
                </div>
                <p>{topic.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign:"justify"}}> <br />
            With a focus on quality, trust, and transparency, Sharda Industries has built a strong reputation in the market. Now, we invite you to become a part of our success story.
            Take the first step towards your entrepreneurial journey with Sharda Industries - where low investment meets high profit potential.
          </p>
        </div>

        {/* Right Form */}
        <div className="dealership-right">
          <h3>Contact Us</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DealershipSection;

import React, { useState } from "react";
import "../Style/faq.css";
import faqImg from "../assets/image/2.png"; // apni image import karo

const FAQSection = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const faqs = [
    { question: "How long does one stick burn?", answer: " Each stick burns for about 35–45 minutes." },
    { question: " What is your return policy?", answer: " We offer a 30-day return policy. Items must be unused and in original packaging." },
    { question: " What payment methods do you accept?", answer: " We accept all major credit/debit cards, UPI, Net Banking, and popular wallets for secure payments." },
    { question: "What fragrances do you offer?", answer: " We offer Kaccha Bela, Rose, Musk, Sugandh Sigar, Intimate, Woods, and Chandan." },
      
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Left Side Image */}
        <div className="faq-image-box">
          <img src={faqImg} alt="FAQ" className="faq-image" />
        </div>

        {/* Right FAQ */}
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${active === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="faq-icon">{active === index ? "-" : "+"}</span>
                </div>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

import React from "react";
import "../Style/categories.css";
import cat1 from "../assets/image/DSC01372.webp";
import cat2 from "../assets/image/DSC01572.webp";
import cat3 from "../assets/image/DSC01386.webp";
import cat4 from "../assets/image/DSC01636.webp";
import cat5 from "../assets/image/DSC01391.webp";


const categories = [
  { id: 1, image: cat1, title: "Masala Sticks" },
  { id: 2, image: cat2, title: "Dhoop Sticks" },
  { id: 3, image: cat3, title: "Cone Dhoop" },
  { id: 4, image: cat4, title: "Cup Sambrani" },
  { id: 5, image: cat5, title: "Hawan Samagri" },
  
];

const Categories = () => {
  return (
    <section className="category-section">
       

      <div className="category-container">
        {categories.map((cat) => (
          <div className="category-box" key={cat.id}>
            <img src={cat.image} alt={cat.title} className="category-img" />
            <p className="category-name">{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

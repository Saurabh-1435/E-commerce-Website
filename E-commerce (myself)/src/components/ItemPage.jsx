import React from "react";
import "./ItemPage.css"; // Updated CSS import to match the new file name

// Import item images
import itemImage1 from "../assets/images/item-1.jpg";
import itemImage2 from "../assets/images/item-2.jpg";
import itemImage3 from "../assets/images/item-3.jpg";
import itemImage4 from "../assets/images/item-4.jpg";

const ItemPage = () => {
  return (
    <div className="item-page">
      {/* Brand Name */}
      <div className="brand-name">
        <h1>Pretty   Little   Thing</h1>
      </div>

      {/* Item Images */}
      <div className="item-container">
        <div className="item-card">
          <img src={itemImage1} alt="Item 1" className="item-image" />
        </div>
        <div className="item-card">
          <img src={itemImage2} alt="Item 2" className="item-image" />
        </div>
        <div className="item-card">
          <img src={itemImage3} alt="Item 3" className="item-image" />
        </div>
        <div className="item-card">
          <img src={itemImage4} alt="Item 4" className="item-image" />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

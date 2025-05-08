import React from "react";
import "./CategoryPage.css";

// Import category images
import womenImage from "../assets/images/women.jpg";
import curveImage from "../assets/images/curve.jpg";
import kidsImage from "../assets/images/kids.jpg";
import menImage from "../assets/images/men.jpg";
import dressesImage from "../assets/images/dresses.jpg";
import topsImage from "../assets/images/tops.jpg";
import homeKitchenImage from "../assets/images/home-kitchen.jpg";
import beautyHealthImage from "../assets/images/beauty-health.jpg";
// import underwearImage from "../assets/images/underwear.jpg";
// import sportsOutdoorImage from "../assets/images/sports-outdoor.jpg";
import shoesBagsImage from "../assets/images/shoes-bags.jpg";
import accessoriesJewelryImage from "../assets/images/accessories-jewelry.jpg";

const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="category-container">
        <div className="category-card">
          <img src={womenImage} alt="Women" className="category-image" />
          <p>Women</p>
        </div>
        <div className="category-card">
          <img src={curveImage} alt="Curve" className="category-image" />
          <p>Curve</p>
        </div>
        <div className="category-card">
          <img src={kidsImage} alt="Kids" className="category-image" />
          <p>Kids</p>
        </div>
        <div className="category-card">
          <img src={menImage} alt="Men" className="category-image" />
          <p>Men</p>
        </div>
        <div className="category-card">
          <img src={dressesImage} alt="Dresses" className="category-image" />
          <p>Dresses</p>
        </div>
        <div className="category-card">
          <img src={topsImage} alt="Tops" className="category-image" />
          <p>Tops</p>
        </div>
        <div className="category-card">
          <img src={homeKitchenImage} alt="Home & Kitchen" className="category-image" />
          <p>Home & Kitchen</p>
        </div>
        <div className="category-card">
          <img src={beautyHealthImage} alt="Beauty & Health" className="category-image" />
          <p>Beauty & Health</p>
        </div>
        {/* <div className="category-card">
          <img src={underwearImage} alt="Underwear & Sleepwear" className="category-image" />
          <p>Underwear & Sleepwear</p>
        </div>
        <div className="category-card">
          <img src={sportsOutdoorImage} alt="Sports & Outdoor" className="category-image" />
          <p>Sports & Outdoor</p>
        </div> */}
        <div className="category-card">
          <img src={shoesBagsImage} alt="Shoes & Bags" className="category-image" />
          <p>Shoes & Bags</p>
        </div>
        <div className="category-card">
          <img src={accessoriesJewelryImage} alt="Accessories & Jewelry" className="category-image" />
          <p>Accessories & Jewelry</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

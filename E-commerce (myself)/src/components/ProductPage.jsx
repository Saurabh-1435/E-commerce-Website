import React from 'react';
import './ProductPage.css';

// Import videos
import product1Video from '../assets/videos/product-1.mp4';
import product2Video from '../assets/videos/product-2.mp4';
import product3Video from '../assets/videos/product-3.mp4';
import product4Video from '../assets/videos/product-4.mp4';

const ProductPage = () => {
  return (
    <div className="product-container">
      {/* Header */}
      <h2 className="product-header">OUR PRODUCT</h2>

      {/* Product 1 */}
      <div className="product-card">
        <div className="video-container">
          <video
            className="product-video"
            src={product1Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Product 2 */}
      <div className="product-card">
        <div className="video-container">
          <video
            className="product-video"
            src={product2Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Product 3 */}
      <div className="product-card">
        <div className="video-container">
          <video
            className="product-video"
            src={product3Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Product 4 */}
      <div className="product-card">
        <div className="video-container">
          <video
            className="product-video"
            src={product4Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React from 'react';
import './Banner.css';
import bannerVideo from '../assets/videos/Banner.mp4';

const Banner = () => {
  return (
    <div className="banner-container">
      <video autoPlay loop muted className="banner-video">
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <p className="subheading">LATEST COLLECTION</p>
        <h1 className="main-heading">
          Spring <br /> Summer ’25
        </h1>
        <a href="#discover" className="discover-link">Discover now</a>
      </div>
    </div>
  );
};

export default Banner;

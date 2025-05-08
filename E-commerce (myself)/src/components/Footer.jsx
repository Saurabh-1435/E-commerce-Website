import React from "react";
import "./Footer.css";

// Social media icons and other necessary content links can be added later as needed.
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Mailing List Section */}
      <div className="mailing-list">
        <h2>Join Our Mailing List</h2>
        <p>Sign up to receive 15% off your first order.</p>
        <div className="email-input">
          <input type="email" placeholder="Email Address" />
          <button className="email-submit">→</button>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Pinterest</a>
          <a href="#" className="social-icon">TikTok</a>
        </div>
      </div>

      {/* Shipping Section */}
      <div className="shipping-info">
        <span>Shipping to <b>India</b></span>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            <li>Stores</li>
            <li>Rewards</li>
            <li>Gift Cards</li>
            <li>Care Guide</li>
            <li>Size Guide</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li>Help Center</li>
            <li>Start a US Return</li>
            <li>Start an International Return</li>
            <li>International FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>HAVE A QUESTION?</h3>
          <p>We are available Monday - Friday from 8am to 5pm PST.</p>
        </div>
      </div>

      {/* Footer Copyright and Legal Links */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span>&copy; Copyright 2025</span>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Accessibility Statement</li>
            <li>Supply Chain Disclosure Act</li>
            <li>Notice of Financial Incentive</li>
            <li>Sitemap</li>
            <li>Do Not Sell My Personal Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

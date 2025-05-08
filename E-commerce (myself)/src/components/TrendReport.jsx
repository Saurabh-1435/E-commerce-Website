import React from "react";
import "./TrendReport.css";

// Import trend images
import trendImage1 from "../assets/images/trend-1.jpg";
import trendImage2 from "../assets/images/trend-2.jpg";
import trendImage3 from "../assets/images/trend-3.jpg";
import trendImage4 from "../assets/images/update.jpg";

const TrendReport = () => {
  return (
    <div className="trend-report">
      {/* Header */}
      <div className="trend-report-header">
        <h1>THE TREND REPORT</h1>
      </div>

      {/* Trend Categories */}
      <div className="trend-container">
        <div className="trend-card">
          <img src={trendImage1} alt="Prom" className="trend-image" />
          {/* <div className="trend-caption">Prom &gt;</div> */}
        </div>
        <div className="trend-card">
          <img src={trendImage2} alt="Espresso" className="trend-image" />
          {/* <div className="trend-caption">Espresso &gt;</div> */}
        </div>
        <div className="trend-card">
          <img src={trendImage3} alt="A Garden Affair" className="trend-image" />
          {/* <div className="trend-caption">A Garden Affair &gt;</div> */}
        </div>
        <div className="trend-card">
          <img src={trendImage4} alt="Resort" className="trend-image" />
          {/* <div className="trend-caption">Resort &gt;</div> */}
        </div>
      </div>
    </div>
  );
};

export default TrendReport;

import React, { useEffect } from "react";
import { HomePageAnimation } from "../utils/HomePageAnimation";
import { HomePageTextAnimation } from "../utils/HomePageTextAnimation";

const HomePage = () => {
  useEffect(() => {
    HomePageAnimation();
    HomePageTextAnimation();
  });
  return (
    <>
      <div className="content content--home">
        <div className="container demo">
          <div className="content">
            <div className="typing"></div>
            <div id="large-header" className="large-header">
              <canvas id="demo-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

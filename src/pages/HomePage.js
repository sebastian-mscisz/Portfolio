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
        <div className="typing-script"></div>
        <canvas id="demo-canvas"></canvas>
      </div>
    </>
  );
};
export default HomePage;

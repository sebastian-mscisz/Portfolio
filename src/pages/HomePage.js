import React, { useEffect } from "react";
import { HomePageAnimation } from "../utils/HomePageAnimation";
import { HomePageTextAnimation } from "../utils/HomePageTextAnimation";

const HomePage = () => {
  useEffect(() => {
    setTimeout(() => {
      HomePageTextAnimation(["Hello, friend.^How are you today??"]);
    }, 700);
    HomePageAnimation();
  });
  return (
    <>
      <div className="content content--home">
        <div className="content__row">
          <div className="typing-script">
            <p class="typing-script__text"></p>
          </div>
        </div>
        <div className="content__row content__row--home-my-name">
          <h1 className="heading heading--home">
            Sebastian
            <br />
            Mścisz
          </h1>
          <p className="heading-subtext">Junior Web Developer</p>
        </div>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default HomePage;

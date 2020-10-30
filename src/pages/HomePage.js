import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { HomePageTextAnimation } from "../utils/HomePageTextAnimation";
import { CSSTransition } from "react-transition-group";

const HomePage = () => {
  useEffect(() => {
    setTimeout(() => {
      HomePageTextAnimation(["Hello, friend.."]);
    }, 1000);
    PageAnimation();
  });
  return (
    <>
      <div className="content content--home">
        <div className="content__row">
          <div className="typing-script">
            <p className="typing-script__text"></p>
          </div>
        </div>
        <div className="content__row content__row--home-my-name">
          <CSSTransition
            in={true}
            appear
            timeout={3700}
            classNames="content__transition"
            unmountOnExit
          >
            <div className="content__transition">
              <p className="heading-subtext">I am</p>
              <h1 className="heading heading--home">
                Sebastian
                <br />
                Mścisz
              </h1>
              <p className="heading-subtext">Junior Front-end Developer</p>
            </div>
          </CSSTransition>
        </div>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default HomePage;

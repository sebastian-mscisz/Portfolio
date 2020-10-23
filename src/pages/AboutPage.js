import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";

const AboutPage = () => {
  useEffect(() => {
    PageAnimation();
  });
  return (
    <>
      <div className="content content--about">
        <CSSTransition
          in={true}
          appear
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading">O mnie</h1>
            </div>
            <div className="content__row">
              <p className="content__row__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis
                cumque tenetur, ad excepturi et temporibus aliquid laborum
                officia, nisi ea, numquam accusamus.
              </p>
            </div>
            <div className="content__row">
              <p className="content__row__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis
                cumque tenetur, ad excepturi et temporibus aliquid laborum
                officia, nisi ea, numquam accusamus.
              </p>
            </div>
            <div className="content__row">
              <p className="content__row__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis
                cumque tenetur, ad excepturi et temporibus aliquid laborum
                officia, nisi ea, numquam accusamus.
              </p>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default AboutPage;

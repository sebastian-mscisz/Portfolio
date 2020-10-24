import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";

const ProjectsPage = () => {
  useEffect(() => {
    PageAnimation();
  });
  return (
    <>
      <div className="content content--projects">
        <CSSTransition
          in={true}
          timeout={0}
          appear
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading heading--projects">Projekty</h1>
            </div>
            <div className="content__row">
              <h2 className="heading heading--h2">La Stravaganza</h2>
            </div>
            <div className="content__row">
              <p className="content__row__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis
                cumque tenetur, ad excepturi et temporibus aliquid laborum
                officia, nisi ea, numquam accusamus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nulla esse nemo aspernatur fuga,
                voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi
                et temporibus aliquid laborum officia, nisi ea, numquam
                accusamus.
              </p>
            </div>
            <div className="content__row">
              <h2 className="heading heading--h2">Tododo</h2>
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
              <h2 className="heading heading--h2">Strona portfolio</h2>
            </div>
            <div className="content__row content__row--last">
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
export default ProjectsPage;

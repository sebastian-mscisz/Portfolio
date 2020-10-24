import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import MySqlIcon from "../assets/mysql-iconsvg.svg";
import { CSSTransition } from "react-transition-group";

const SkillsPage = () => {
  useEffect(() => {
    PageAnimation();
  });
  return (
    <>
      <div className="content content--skills">
        <CSSTransition
          in={true}
          appear
          timeout={0}
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading">Moje umiejętności</h1>
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
              <h2 className="heading heading--h2">Technologie</h2>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <span className="fab fa-html5 tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-js-square tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-react tile__icon"></span>
              </div>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <span className="fab fa-css3-alt tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-sass tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-bootstrap tile__icon"></span>
              </div>
            </div>
            <div className="content__row content__row--skills content__row--last">
              <div className="tile">
                <span className="fab fa-github tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-npm tile__icon"></span>
              </div>
              <div className="tile">
                <img src={MySqlIcon}></img>
              </div>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default SkillsPage;

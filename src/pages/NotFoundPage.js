import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";

const NotFoundPage = () => {
  useEffect(() => {
    //to start background animation
    PageAnimation();
  });
  return (
    <>
      <div className="content">
        <CSSTransition
          in={true}
          appear
          timeout={0}
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading">Błąd 404 - strony nie znaleziono</h1>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default NotFoundPage;

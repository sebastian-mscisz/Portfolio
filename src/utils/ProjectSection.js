import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const ProjectSection = (props) => {
  const [toggleMenuVisibility, setToggleMenuVisibility] = useState(false);
  const handleToggleMenuVisibility = () => {
    setToggleMenuVisibility((prevValue) => !prevValue);
  };
  return (
    <>
      <div className="content__row content__row--projects">
        <h2 className="heading heading--h2">{props.title}</h2>
        <img
          className="content__row__image content__row__image--projects"
          src={props.image}
        ></img>
        <CSSTransition
          in={toggleMenuVisibility}
          timeout={400}
          classNames="project-section-toggle"
          unmountOnExit
        >
          <div>
            {/* <p className="content__row__text content__row__text--projects"> */}
            {props.text}
            {/* </p> */}
          </div>
        </CSSTransition>
        <button
          className="content__row__button"
          onClick={handleToggleMenuVisibility}
        >
          {toggleMenuVisibility ? "Mniej" : "Więcej"}
        </button>
      </div>
    </>
  );
};
export default ProjectSection;

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
        <div className="project-image__wrap">
          <img className="project-image__image" src={props.image}></img>
          <div className="project-image__text-wrap">
            <a href={props.link} className="project-image__text">
              <span className="fas fa-link"></span>&nbsp;{props.link}
            </a>
          </div>
        </div>
        <CSSTransition
          in={toggleMenuVisibility}
          timeout={400}
          classNames="project-section-toggle"
          unmountOnExit
        >
          <div>{props.text}</div>
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

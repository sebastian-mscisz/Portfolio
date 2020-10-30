import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";
import ProjectSection from "../utils/ProjectSection";
import tododoImage from "../assets/tododo-image.png";
import lastravaganzaImage from "../assets/lastravaganza-image.png";
import portfolioImage from "../assets/portfolio-image.png";

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
            <ProjectSection
              title={"La Stravaganza"}
              image={lastravaganzaImage}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus."
              }
            />
            <ProjectSection
              title={"Tododo"}
              image={tododoImage}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus."
              }
            />
            <ProjectSection
              title={"Strona portfolio"}
              image={portfolioImage}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla esse nemo aspernatur fuga, voluptate iure perspiciatis? Quis cumque tenetur, ad excepturi et temporibus aliquid laborum officia, nisi ea, numquam accusamus."
              }
            />
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default ProjectsPage;

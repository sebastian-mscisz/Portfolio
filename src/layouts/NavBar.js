import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavBar = (props) => {
  return (
    <>
      {/* <CSSTransition
        in={props.toggleMenuVisibility}
        timeout={700}
        classNames="header__droplist"
        unmountOnExit
      > */}
      <div
        className={
          props.toggleMenuVisibility
            ? "header__droplist header__droplist--visible"
            : "header__droplist header__droplist--hidden"
        }
      >
        <div className="header__menu">
          <NavLink to="/about" className="header__menu__item" exact>
            O mnie
          </NavLink>
          <NavLink to="/skills" className="header__menu__item" exact>
            Umiejętności
          </NavLink>
          <NavLink to="/projects" className="header__menu__item" exact>
            Projekty
          </NavLink>
          <NavLink to="/contact" className="header__menu__item" exact>
            Kontakt
          </NavLink>
        </div>
      </div>
      {/* </CSSTransition> */}
    </>
  );
};

export default NavBar;

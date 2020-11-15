import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavBar = (props) => {
  return (
    <>
      <div
        className={
          props.toggleMenuVisibility
            ? "header__droplist header__droplist--visible"
            : "header__droplist header__droplist--hidden"
        }
      >
        <div className="header__menu">
          <NavLink
            to="/about"
            className="header__menu__item"
            exact
            activeClassName="header__menu__item--active"
          >
            O mnie
          </NavLink>
          <NavLink
            to="/skills"
            className="header__menu__item"
            exact
            activeClassName="header__menu__item--active"
          >
            Umiejętności
          </NavLink>
          <NavLink
            to="/projects"
            className="header__menu__item"
            exact
            activeClassName="header__menu__item--active"
          >
            Projekty
          </NavLink>
          <NavLink
            to="/contact"
            className="header__menu__item"
            exact
            activeClassName="header__menu__item--active"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;

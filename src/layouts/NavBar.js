import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavBar = (props) => {
  return (
    <>
      <CSSTransition
        in={props.toggleMenuVisibility}
        appear={props.toggleMenuVisibility}
        timeout={700}
        classNames="header__droplist"
        unmountOnExit
      >
        <div>
          <div className="header__menu">
            <NavLink to="/about" className="header__menu__item" exact>
              O mnie
            </NavLink>
            <NavLink to="/projects" className="header__menu__item" exact>
              Projekty
            </NavLink>
            <NavLink to="/contact" className="header__menu__item" exact>
              Kontakt
            </NavLink>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default NavBar;

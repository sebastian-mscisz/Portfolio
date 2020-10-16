import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
  const [toggleMenuVisibility, setToggleMenuVisibility] = useState(false);

  const handleToggleMenuVisibility = () => {
    setToggleMenuVisibility((prevValue) => !prevValue);
  };
  return (
    <>
      <div
        className="header__menu__button"
        onClick={() => handleToggleMenuVisibility()}
      >
        <span className="fas fa-bars header__menu__icon"></span>
      </div>
      {/* <div
        className={
          toggleMenuVisibility
            ? "header__menu header__menu--visible"
            : "header__menu header__menu--hidden"
        }
      >
        <NavLink to="/about" className="header__menu__item" exact>
          O mnie
        </NavLink>
        <NavLink to="/projects" className="header__menu__item" exact>
          Projekty
        </NavLink>
        <NavLink to="/contact" className="header__menu__item" exact>
          Kontakt
        </NavLink>
      </div> */}

      <CSSTransition
        in={toggleMenuVisibility}
        appear={toggleMenuVisibility}
        timeout={700}
        classNames="example"
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

import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="header__logo">
        <NavLink className="header__logo__link" to="/" exact>
          <p>Sebastian</p>
          <p>Mścisz</p>
        </NavLink>
      </div>
    </>
  );
};
export default Logo;

import React, { useState } from "react";
import Logo from "../layouts/Logo";
import NavBar from "../layouts/NavBar";
import MenuButton from "../layouts/MenuButton";

const Header = () => {
  const [toggleMenuVisibility, setToggleMenuVisibility] = useState(false);

  const handleToggleMenuVisibility = () => {
    setToggleMenuVisibility((prevValue) => !prevValue);
  };
  return (
    <>
      <nav className="header">
        <div className="header__row">
          <Logo />
          <MenuButton handleToggleMenuVisibility={handleToggleMenuVisibility} />
          <NavBar toggleMenuVisibility={toggleMenuVisibility} />
        </div>
      </nav>
    </>
  );
};
export default Header;

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
      <div className="header">
        <div className="header__row">
          <Logo />
          <MenuButton handleToggleMenuVisibility={handleToggleMenuVisibility} />
          <NavBar toggleMenuVisibility={toggleMenuVisibility} />
        </div>
      </div>
    </>
  );
};
export default Header;

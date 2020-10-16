import React from "react";
import Logo from "../layouts/Logo";
import NavBar from "../layouts/NavBar";

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <NavBar />
      </div>
    </>
  );
};
export default Header;

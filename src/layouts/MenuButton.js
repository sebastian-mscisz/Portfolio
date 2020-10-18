import React from "react";

const MenuButton = (props) => {
  return (
    <>
      <div
        className="header__menu__button"
        onClick={() => props.handleToggleMenuVisibility()}
      >
        <span className="fas fa-bars header__menu__icon"></span>
      </div>
    </>
  );
};
export default MenuButton;

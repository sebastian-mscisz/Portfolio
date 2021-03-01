import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">Sebastian Mścisz &copy; 2021&nbsp;</p>
      <a className="footer__icon" href="mailto:sebastian.mscisz96@gmail.com">
        <span className="font-icon far fa-envelope"></span>
      </a>
      &nbsp;
      <a className="footer__icon" href="https://github.com/sebastian-mscisz">
        <span className="font-icon fab fa-github"></span>
      </a>
    </footer>
  );
};
export default Footer;

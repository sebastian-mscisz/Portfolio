import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">Sebastian Mścisz &copy; 2020&nbsp;</p>
      <a className="footer__icon" href="mailto:name@email.com">
        <span className="far fa-envelope"></span>
      </a>
      &nbsp;
      <a className="footer__icon" href="https://github.com/sebastian-mscisz">
        <span className="fab fa-github"></span>
      </a>
    </footer>
  );
};
export default Footer;

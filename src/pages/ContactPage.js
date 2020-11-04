import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";

const ContactPage = () => {
  useEffect(() => {
    PageAnimation();
  });
  return (
    <>
      <div className="content">
        <CSSTransition
          in={true}
          appear
          timeout={0}
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading">Kontakt</h1>
            </div>
            <div className="content__row">
              <p className="content__row__text  content__row__text--contact">
                <a href="mailto:name@email.com">
                  <span className="font-icon font-icon--contact fas fa-envelope"></span>
                  &nbsp;
                  <span className="font-icon__link">
                    sebastian.mscisz96@gmail.com
                  </span>
                </a>
              </p>
            </div>
            <div className="content__row">
              <p className="content__row__text  content__row__text--contact">
                <a href="https://github.com/sebastian-mscisz">
                  <span className="font-icon font-icon--contact fab fa-github"></span>
                  &nbsp;
                  <span className="font-icon__link">
                    github.com/sebastian-mscisz
                  </span>
                </a>
              </p>
            </div>
            <div className="content__row">
              <h2 className="heading heading--h2">Skontaktuj się ze mną!</h2>
            </div>
            <div className="content__row content__row--form">
              <form className="form">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Podaj imię :)"
                />
                <input
                  className="form__input"
                  type="text"
                  placeholder="Adres e-mail..."
                />
                <textarea
                  className="form__input form__input--area"
                  type="text"
                  placeholder="Treść wiadomości..."
                />
                <button className="form__button">Wyślij!</button>
              </form>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default ContactPage;

import React, { useEffect, useState } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";
import emailjs, { init } from "emailjs-com";
import Loader from "react-loader-spinner";
//YOUR emailJS user key
init(<-YOUR_EMAILJS_KEY->);

const ContactPage = () => {
  useEffect(() => {
    //to start background animation
    PageAnimation();
  });
  //state variables
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [nameError, setNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendFail, setSendFail] = useState(false);

  //for handling input changes
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nameInput") {
      setNameInput(value);
    } else if (name === "mailInput") {
      setMailInput(value);
    } else if (name === "contentInput") {
      setContentInput(value);
    }
  };

  //validation makes sure every input isn't empty
  const formValidation = () => {
    let login = false;
    let mail = false;
    let content = false;
    let correct = false;
    if (nameInput.length > 0) {
      login = true;
    }
    if (mailInput.length > 0) {
      mail = true;
    }
    if (contentInput.length > 0) {
      content = true;
    }
    if (login && mail && content) {
      correct = true;
    }
    return {
      correct,
      login,
      mail,
      content,
    };
  };

  //function for handling message sending from form
  const handleSendMessage = (e) => {
    e.preventDefault();
    const validation = formValidation();
    if (validation.correct) {
      setLoadingSpinner(true);
      let templateParams = {
        name: nameInput,
        email: mailInput,
        content: contentInput,
      };
      setLoadingSpinner(true); //<- for setting spinner in motion

      //emailJS library method, sends message to emailJS app, then resends it to given email
      emailjs.send(<-YOUR_SERVICE_KEY->, <-YOUR_TEMPLATE_KEY->, templateParams).then(
        function (response) {
          setLoadingSpinner(false); //<- for stopping spinner
          setSendSuccess(true); //<- for showing message sending success
          setTimeout(() => setSendSuccess(false), 3000); //<- for auto closing message sending success
        },
        function (error) {
          setLoadingSpinner(false); //<- for stopping spinner
          setSendFail(true); //<- for showing message sending failure
          setTimeout(() => setSendFail(false), 3000); //<- for auto closing message sending failure
        }
      );
      //reseting states
      setNameInput("");
      setMailInput("");
      setContentInput("");
      setNameError(false);
      setMailError(false);
      setContentError(false);
    } else {
      //setting which input is incorrect
      setNameError(!validation.name);
      setMailError(!validation.mail);
      setContentError(!validation.content);
    }
  };
  return (
    <>
      <div className="content">
        {loadingSpinner && (
          <Loader
            className="message-icon"
            type="TailSpin"
            color="#333"
            height={100}
            width={100}
          />
        )}
        {sendSuccess && (
          <div className="message-icon message-icon--message">
            <p className="message-icon__text">
              <span className="message-icon__icon fa fa-check-circle"></span>
            </p>
            <br />
            <p className="message-icon__text">Wysłano pomyślnie</p>
          </div>
        )}
        {sendFail && (
          <div className="message-icon message-icon--message">
            <p className="message-icon__text">
              <span className="message-icon__icon fas fa-times-circle"></span>
            </p>
            <br />
            <p className="message-icon__text">Nie udało się wysłać</p>
          </div>
        )}
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
                  onChange={handleInputChange}
                  value={nameInput}
                  name="nameInput"
                  className="form__input"
                  type="text"
                  placeholder="Podaj imię :)"
                />
                {nameError && (
                  <p className="form__error-text">*Pole wymagane</p>
                )}
                <input
                  onChange={handleInputChange}
                  value={mailInput}
                  name="mailInput"
                  className="form__input"
                  type="text"
                  placeholder="Adres e-mail..."
                />
                {mailError && (
                  <p className="form__error-text">*Pole wymagane</p>
                )}
                <textarea
                  onChange={handleInputChange}
                  value={contentInput}
                  name="contentInput"
                  className="form__input form__input--area"
                  type="text"
                  placeholder="Treść wiadomości..."
                />
                {contentError && (
                  <p className="form__error-text">*Pole wymagane</p>
                )}
                <button className="form__button" onClick={handleSendMessage}>
                  Wyślij!
                </button>
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

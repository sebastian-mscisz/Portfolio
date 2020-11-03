import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import MySqlIcon from "../assets/mysql.svg";
import SqlIcon from "../assets/sql.svg";
import jQueryIcon from "../assets/jquery.svg";
import WebpackIcon from "../assets/webpack.svg";
import { CSSTransition } from "react-transition-group";

const SkillsPage = () => {
  useEffect(() => {
    PageAnimation();
  });
  return (
    <>
      <div className="content content--skills">
        <CSSTransition
          in={true}
          appear
          timeout={0}
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading">Umiejętności</h1>
            </div>
            <div className="content__row">
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Znam i stosuję
                możliwości najnowszych wersji EcmaScript w JavaScript.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Kod staram się pisać
                z dbałością o semantykę i metodologie, a także aby był
                zrozumiały dla wszystkich innych go przeglądających stosując
                zrozumiałe nazwy i komentarze.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Interfejsy tworzę we
                frameworku React posiłkując się jego opcjonalnymi rozwiązaniami
                jak React Router, czy Hooki.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Do tworzenia wyglądu
                i styli używam Bootstrapa oraz preprocesora Sass z użyciem zasad
                metodologii BEM.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Znam skryptowy język
                znaczników SQL oraz mam doświadczenie w pracy z bazami danych
                opartych na MySQL.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Do łatwiejszego
                tworzenia i zarządzania projektami posługuję się Node Packet
                Managerem i WebPackiem.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Do kontroli wersju
                używam gita za pomocą wiersza poleceń jak i aplikacji
                desktopowej.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Mam doświadczenie w
                pracy z wieloma systemami zarządzania treścią (CMS) takimi jak
                WordPress, PrestaShop, Joomla, Shoper, IAIShop, Magento.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Jestem zaznajomiony
                z PHP na poziomie pozwalającym na podstawową pracę w nim.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Znam język wyrażeń
                regularnych RegEx.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Znajomość języka
                angielskiego na poziomie C1.
              </p>
              <p className="content__row__text content__row__text--skills">
                <span className="fas fa-check"></span>&nbsp;Staram się, aby
                każdy kolejny projekt zawsze zawierał jakieś nowe zagadnienie,
                nad którym mógłbym popracować i go przećwiczyć.
              </p>
            </div>
            <div className="content__row">
              <h2 className="heading heading--h2">Technologie</h2>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <span className="fab fa-html5 tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-js-square tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-react tile__icon"></span>
              </div>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <span className="fab fa-css3-alt tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-sass tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-bootstrap tile__icon"></span>
              </div>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <span className="fab fa-github tile__icon"></span>
              </div>
              <div className="tile">
                <span className="fab fa-npm tile__icon"></span>
              </div>
              <div className="tile">
                <img className="tile__icon" src={WebpackIcon}></img>
              </div>
            </div>
            <div className="content__row content__row--skills">
              <div className="tile">
                <img className="tile__icon" src={SqlIcon}></img>
              </div>
              <div className="tile">
                <img className="tile__icon" src={MySqlIcon}></img>
              </div>
              <div className="tile">
                <img className="tile__icon" src={jQueryIcon}></img>
              </div>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default SkillsPage;

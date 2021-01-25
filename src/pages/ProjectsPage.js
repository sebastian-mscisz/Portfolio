import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";
import ProjectSection from "../utils/ProjectSection";
import tododoImage from "../assets/tododo-image.png";
import lastravaganzaImage from "../assets/lastravaganza-image.png";
import portfolioImage from "../assets/portfolio-image.jpg";
import wmImage from "../assets/wm-image.png";
import tododoImageSmall from "../assets/tododo-image-small.png";
import lastravaganzaImageSmall from "../assets/lastravaganza-image-small.png";
import portfolioImageSmall from "../assets/portfolio-image-small.jpg";
import wmImageSmall from "../assets/wm-image-small.png";


const ProjectsPage = () => {
  useEffect(() => {
    setTimeout(() => {
      PageAnimation();
    }, 300); //to start background animation
  });
  return (
    <>
      <div className="content">
        <CSSTransition
          in={true}
          timeout={0}
          appear
          classNames="content__transition"
          unmountOnExit
        >
          <div className="content__transition">
            <div className="content__row">
              <h1 className="heading heading--projects">Projekty</h1>
            </div>
            <ProjectSection
              title={"Strona portfolio modelki Wiktorii Mołdawiak"}
              image={wmImage}
              imageSmall={wmImageSmall}
              link={
                "https://wiktoriamoldawiak.pl/"
              }
              text={
                <>
                  <p className="content__row__text content__row__text--projects">
                    Strona postawiona na WordPressie dla fotomodelki Wiktorii. Jako szablon graficzny został wykorzystany darmowy motyw Photograph Freesia, który dostosowałem graficznie i strukturalnie, aby lepiej prezentował się do przedstawiania zdjęć i prac modelki. Dodatkowo wdrożono formularz kontaktowy jako kolejny kanał komunikacyjny z Wiktorią.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    TLDR: Strona oparta na WordPressie.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    Wykorzystano:
                    <br />+ Wordpress z dostosowanym szablonem Photograph Freesia
                  </p>
                </>
              }
            />
            <ProjectSection
              title={"La Stravaganza"}
              image={lastravaganzaImage}
              imageSmall={lastravaganzaImageSmall}
              link={
                "https://sebastian-mscisz.github.io/LaStravaganza-Project/#/"
              }
              text={
                <>
                  <p className="content__row__text content__row__text--projects">
                    Projekt witryny fikcyjnej restauracji był pierwszym, który
                    wykonałem świeżo po przebytych kursach o react i
                    frontendzie. Miał za zadanie wykorzystanie zdobytej wiedzy
                    teoretycznej oraz zastosowanie nauczonych wzorców
                    projektowych w praktyce (którymi były react, sass/scss,
                    bootstrap, jquery, webpack, npm, metodologia BEM). Był to
                    swego rodzaju obiekt testowy, na którym ćwiczyłem i
                    testowałem swoją wiedzę i nauczone technologie, ale z
                    zamysłem utworzenia w pełni działającego i estetycznego
                    serwisu na końcu. Projekt wykorzystywał react router do
                    obsługi nawigacji po stronie, do stylizacji wyglądu użyto
                    Bootstrapa oraz font awesome, a do wykonywania animacji CSS
                    transition group. Projekt został wykonany w react tylko za
                    pomocą komponentów funkcyjnych i hooków.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    TLDR: Pierwszy projekt po kursach mający na celu
                    wykorzystanie teorii w praktyce i bliższym zaznajomieniu się
                    z technologiami.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    Wykorzystano:
                    <br />+ react
                    <br />+ react router
                    <br />+ bootstrap
                    <br />+ scss
                    <br />+ CSS transition group
                    <br />+ font awesome
                    <br />+ npm
                    <br />+ webpack
                  </p>
                </>
              }
            />
            <ProjectSection
              title={"Tododo"}
              image={tododoImage}
              imageSmall={tododoImageSmall}
              link={"https://sebastian-mscisz.github.io/ToDoDo/#/"}
              text={
                <>
                  <p className="content__row__text content__row__text--projects">
                    Kolejnym projektem była typowa aplikacja todo. Głównym jej
                    celem było lepsze zaznajomienie się z metodologią BEM oraz
                    zapoznaniu się z podstawami strony backendowej za pomocą
                    node.js i express.js. Aplikacja umożliwa użytkownikom
                    tworzenie indywidualnych kont i zapisywanie swojej listy
                    todo w chmurze. Istnieje także opcja wypróbowania możliwości
                    aplikacji w trybie gościa, jednak wtedy zmiany nie są
                    zapisywane.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    TLDR: Drugi projekt mający na celu przyswojenie metodologii
                    BEM oraz nabranie podstaw w stronie backendowej aplikacji.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    Wykorzystano:
                    <br />+ react
                    <br />+ react router
                    <br />+ node.js
                    <br />+ express.js
                    <br />+ MySQL
                    <br />+ scss
                    <br />+ BEM
                    <br />+ CSS transition group
                    <br />+ font awesome
                    <br />+ npm
                    <br />+ webpack
                  </p>
                </>
              }
            />
            <ProjectSection
              title={"Strona portfolio"}
              image={portfolioImage}
              imageSmall={portfolioImageSmall}
              link={"https://sebastian-mscisz.github.io/Portfolio/#/"}
              text={
                <>
                  <p className="content__row__text content__row__text--projects">
                    Trzeci projekt jest stroną portfolio zawierającą
                    najważniejsze informacje o mnie, moich umiejętnościach,
                    projektach i sposobie komunikacji ze mną. Utrwalił wcześniej
                    zdobytą wiedzą i umiejętności, a także pogłębił moją
                    znajomość react hooków, gdyż struktura opiera się wyłącznie
                    na komponentach funkcyjnych. Strona posiada animację w tle
                    symulującą ruchy gwiazd na nocym niebie, a także przejścia i
                    animacje elementów na różnych podstronach serwisu.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    TLDR: Strona wizytówka przygotowana do prezentacji moich
                    umiejętności oraz wykonanych projektów.
                  </p>
                  <p className="content__row__text content__row__text--projects">
                    Wykorzystano:
                    <br />+ react
                    <br />+ react router
                    <br />+ MySQL
                    <br />+ scss
                    <br />+ BEM
                    <br />+ CSS transition group
                    <br />+ font awesome
                    <br />+ npm
                    <br />+ webpack
                  </p>
                </>
              }
            />
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default ProjectsPage;

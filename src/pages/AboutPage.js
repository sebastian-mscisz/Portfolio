import React, { useEffect } from "react";
import { PageAnimation } from "../utils/PageAnimation";
import { CSSTransition } from "react-transition-group";
import myImage from "../assets/me.png";

const AboutPage = () => {
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
              <h1 className="heading">O mnie</h1>
            </div>
            <div className="content__row content__row--about">
              <p className="content__row__text">
                <img
                  className="content__row__image content__row__image--about"
                  src={myImage}
                />
                Nazywam się Sebastian Mścisz i jestem początkującym Front-End
                deweloperem. Posiadam doświadczenie na stanowisku junior web
                developer, gdzie do moich obowiązków i pracy należało m.in.
                wprowadzenie zmian technicznych na serwisach klientów,
                optymalizacja kodu, wprowadzanie zmian za pomocą wielu systemów
                zarządzania treścią, a także optymalizowanie witryn pod kątem
                wyszukiwarek internetowych. W pracy z React jestem samoukiem
                wykonując własne niekomercyjne projekty oraz wspomagając się
                internetowymi kursami, poradnikami oraz dokumentacją.
              </p>
              <h3 className="heading heading--h3">Wykształcenie</h3>
              <p className="content__row__text">
                Ukończyłem pierwszy stopień studiów stacjonarnych z tytułem
                inżyniera na kierunku inżynierii systemów na Politechnice
                Wrocławskiej oraz dalej kontynuuję naukę na drugim stopniu tego
                samego kierunku. Tematem mojej pracy inżynierskiej był system
                inteligentnego domu oparty na systemie Arduino.
              </p>
              <h3 className="heading heading--h3">Pierwsze kroki</h3>
              <p className="content__row__text">
                Styczność z tworzeniem stron pierwszy raz miałem w technikum w
                2013, jednak wtedy nie czułem jakoby było to coś co chciałbym
                robić zawodowo. Dopiero podczas odbywanych studenckich praktyk
                jako web developer zainteresowanie to zostało u mnie wzbudzone
                na nowo co doprowadziło mnie do momentu, w którym jestem teraz.
              </p>
              <h3 className="heading heading--h3">Zainteresowania</h3>
              <p className="content__row__text">
                Z zamiłowania psiarz, a z zainteresowań lubię czytać książki,
                grać w gry gier oraz oglądać filmy z gatunku fantastyki. Lubię
                podróżować i zwiedzać rożne zakątki i miasta Polski, w których
                jeszcze nie byłem. Jestem również wielkim fanem rozwoju
                sztucznej inteligencji i zaciekawieniem przyglądam się coraz to
                nowym technologiom i postępom w tej dziedzinie.
              </p>
            </div>
          </div>
        </CSSTransition>
        <canvas className="canvas" id="canvas"></canvas>
      </div>
    </>
  );
};
export default AboutPage;

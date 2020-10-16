export const HomePageTextAnimation = () => {
  const box = document.querySelector(".typing");
  box.textContent = "";
  const text = ["Hello, friend.."];
  let wordIndex = 0;
  let textIndex = 0;
  let oldTime = 0;
  const speed = 160; //czym większa wartość tym wolniejszy typing
  const stop = 2000; //zatrzymanie między kolejnymi tekstami
  let activeDOMElement = box;

  const typing = (newTime) => {
    if (newTime - oldTime > speed) {
      const letter = text[textIndex].substr(wordIndex, 1);
      if (wordIndex === text[textIndex].length - 1) {
        if (textIndex === text.length - 1) {
          return;
        }
        return setTimeout(() => {
          box.textContent = "";
          textIndex++;
          wordIndex = 0;
          requestAnimationFrame(typing);
        }, stop);
      } else if (wordIndex === 0 || letter === "^") {
        const p = document.createElement("p");
        box.appendChild(p);
        activeDOMElement = p;
      }

      if (!(letter === "^")) {
        activeDOMElement.textContent += letter;
      }

      oldTime = newTime;
      wordIndex++;
    }
    requestAnimationFrame(typing);
  };
  typing();
};

export const HomePageTextAnimation = (message) => {
  const box = document.querySelector(".typing-script");
  box.textContent = "";
  const text = message;
  let wordIndex = 0;
  let textIndex = 0;
  let oldTime = 0;
  const speed = 160; //higher value = slower typingczym większa wartość tym wolniejszy typing
  const stop = 2000; //stopping time between texts
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
        p.classList.add("typing-script__text");
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

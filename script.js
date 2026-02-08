// CONNECT ELEMENTS
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const letterTitle = document.getElementById("letter-title");
const letterCat = document.getElementById("letter-cat");
const letterButtons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// OPEN LETTER
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// YES BUTTON
yesBtn.addEventListener("click", () => {
  letterTitle.textContent = "I knew you’d say YES 😘💕";
  letterCat.src = "cosytales-cute.gif";

  letterButtons.style.display = "none";
  finalText.style.display = "block";
  letterWindow.classList.add("final");
});

// NO BUTTON (RUN AWAY 😈)
const moveNo = () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo); // mobile support

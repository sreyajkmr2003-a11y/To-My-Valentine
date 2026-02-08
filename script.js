const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const letterTitle = document.getElementById("letter-title");
const letterCat = document.getElementById("letter-cat");
const letterButtons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open letter
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move NO button
const moveNoBtn = () => {
  const distance = 150;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

// YES clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "I knew you’d say YES 😁😘💕";
  catImg.src = "cosytales-cute.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});

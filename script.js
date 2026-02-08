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

// YES button
yesBtn.addEventListener("click", () => {
  letterTitle.textContent = "Yayyy 💖";
  letterCat.src = "milk-and-mocha-hugs.gif";
  letterButtons.style.display = "none";
  finalText.style.display = "block";
  letterWindow.classList.add("final");
});

// NO button (moves away)
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

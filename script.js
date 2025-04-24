// Initialize AOS (Animate On Scroll)
AOS.init({ offset: 0 });

// Toggle hamburger menu
function hamburg() {
  document.querySelector(".dropdown").style.transform = "translateY(0px)";
}

function cancel() {
  document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

// Typewriter effect
const typedText = document.getElementById("typed-text");
const words = ["Web Developer", "Web Designer"];
let index = 0;

setInterval(() => {
  index = (index + 1) % words.length;
  typedText.textContent = words[index];
}, 2500);

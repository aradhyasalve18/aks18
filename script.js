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
const form = document.getElementById("contactForm");
const popup = document.getElementById("thankYouPopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting normally

  const formData = new FormData(form);

  fetch("https://formsubmit.co/aradhyasalve18@gmail.com", {
    method: "POST",
    body: formData,
  }).then((response) => {
    if (response.ok) {
      form.reset();
      popup.style.display = "flex";
    } else {
      alert("Something went wrong. Please try again later.");
    }
  });
});

function closePopup() {
  popup.style.display = "none";
}

let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");

let images = document.querySelectorAll(".images");
let currentIndex = 0;

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateDisplay();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateDisplay();
});

function updateDisplay() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

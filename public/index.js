let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelector(".popup-open");
let popupClose = document.querySelector(".close-btn");

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

 function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the carousel to the first slide
    moveSlide(0);

    // Add event listeners to carousel buttons
    document.querySelector('.carousel-button.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.carousel-button.next').addEventListener('click', () => moveSlide(1));
});



popupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showPopup();
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  removePopup();
});

popupForm.addEventListener("submit", () => {
  removePopup();
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopup();
  } else return;
});

function showPopup() {
  popup.classList.add("active");
  bodyScroll();
}

function removePopup() {
  popup.classList.remove("active");
  bodyScroll();
}

function bodyScroll() {
  document.body.classList.toggle("no-scroll");
}

function closePopup() {
  document.getElementById('popup-message').style.display = 'none';
}

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('dragstart', event => {
    event.preventDefault();
  });
});
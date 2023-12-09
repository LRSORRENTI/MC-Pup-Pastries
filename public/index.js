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

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('click2');

  if (button) {
      button.addEventListener('click', function() {
          let articleP = this.closest('.article-body').querySelector('.article-p');
          if (articleP.style.maxHeight && articleP.style.maxHeight !== "0px") {
              articleP.style.maxHeight = "0px";
          } else {
              articleP.style.maxHeight = articleP.scrollHeight + "px";
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('test');

  if (button) {
      button.addEventListener('click', function() {
          let articleP = this.closest('.article-body').querySelector('.article-p');
          if (articleP.style.maxHeight && articleP.style.maxHeight !== "0px") {
              articleP.style.maxHeight = "0px";
          } else {
              articleP.style.maxHeight = articleP.scrollHeight + "px";
          }
      });
  }
});


document.getElementById("click2").addEventListener("mouseover", function() {
  this.getElementsByClassName("downArrow")[0].style.display = "block"; // Show the arrow on hover
});

document.getElementById("click2").addEventListener("mouseout", function() {
  this.getElementsByClassName("downArrow")[0].style.display = "none"; // Hide the arrow when not hovering
});


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
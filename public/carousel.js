// carousel.js
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

export default {showSlide, moveSlide}; 
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slideInterval = 3000; // 3 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startCarousel() {
    showSlide(currentSlide); // Show the first image immediately
    setInterval(nextSlide, slideInterval);
}

document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(carouselTimer);
});

document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    carouselTimer = setInterval(nextSlide, slideInterval);
});

let carouselTimer = setInterval(nextSlide, slideInterval);

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

window.onload = startCarousel;

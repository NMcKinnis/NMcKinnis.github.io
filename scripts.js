let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-container a');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
    stopAutoSlide();
    startAutoSlide();
});

slides.forEach(slide => {
    slide.addEventListener('mouseover', stopAutoSlide);
    slide.addEventListener('mouseout', startAutoSlide);
});

showSlide(slideIndex);
startAutoSlide();

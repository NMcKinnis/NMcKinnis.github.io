let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Initial display
showSlide(slideIndex);

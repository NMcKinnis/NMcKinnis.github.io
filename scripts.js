document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0; // Reset to the first slide
        } else if (index < 0) {
            slideIndex = totalSlides - 1; // Set to the last slide
        }

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            slideIndex++;
            showSlide(slideIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            slideIndex--;
            showSlide(slideIndex);
        });
    }

    // Initial display
    showSlide(slideIndex);
});

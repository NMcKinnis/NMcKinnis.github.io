document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    let autoSlide = setInterval(nextSlide, 3000);

    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    carouselContainer.addEventListener('mouseout', () => {
        autoSlide = setInterval(nextSlide, 3000);
    });
});

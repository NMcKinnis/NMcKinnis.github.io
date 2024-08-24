let slideIndex = 0;
let slides = document.querySelectorAll('.carousel-slide');
let autoSlideInterval = setInterval(showSlides, 3000);

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}

function pauseSlides() {
    clearInterval(autoSlideInterval);
}

function resumeSlides() {
    autoSlideInterval = setInterval(showSlides, 3000);
}

// Pause carousel on hover
document.querySelector('.carousel-container').addEventListener('mouseenter', pauseSlides);
document.querySelector('.carousel-container').addEventListener('mouseleave', resumeSlides);

// Manual controls
document.querySelector('.prev').addEventListener('click', () => {
    pauseSlides();
    slideIndex -= 2;
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    pauseSlides();
    showSlides();
});

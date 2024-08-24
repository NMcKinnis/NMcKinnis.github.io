let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === slideIndex) {
            slide.style.display = 'flex';
        }
    });

    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    autoSlide = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

let autoSlide = setTimeout(showSlides, 3000);

showSlides();

document.querySelector('.prev').addEventListener('click', () => {
    clearTimeout(autoSlide);
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    clearTimeout(autoSlide);
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
});

document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearTimeout(autoSlide);
});

document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    autoSlide = setTimeout(showSlides, 3000);
});

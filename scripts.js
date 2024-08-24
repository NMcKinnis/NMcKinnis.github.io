// Initialize carousel index
let carouselIndex = 0;

// Select all images within the carousel
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

// Function to display the image based on index
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

// Function to move to the next image
function nextImage() {
    carouselIndex = (carouselIndex + 1) % totalImages;
    showImage(carouselIndex);
}

// Function to start the carousel
function startCarousel() {
    showImage(carouselIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds
}

// Event listeners for manual controls (optional)
document.querySelector('.prev').addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + totalImages) % totalImages;
    showImage(carouselIndex);
});

document.querySelector('.next').addEventListener('click', nextImage);

// Start the carousel on page load
startCarousel();

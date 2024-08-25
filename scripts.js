document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;
    let imageOrder = ["Tales Of Valoris", "Hit N' Bit", "Revenge of the Tartans", "Drawn to Dream"];
    let carousel = document.querySelector(".carousel");
    let leftBtn = document.querySelector(".left");
    let rightBtn = document.querySelector(".right");

    // Ensure proper ordering of images
    images = Array.from(images).sort((a, b) => {
        return imageOrder.indexOf(a.alt) - imageOrder.indexOf(b.alt);
    });

    // Function to update carousel display
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    // Initial display of the first image
    showImage(currentIndex);

    // Auto rotate images
    let interval = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    // Pause on hover
    carousel.addEventListener("mouseover", function() {
        clearInterval(interval);
    });

    carousel.addEventListener("mouseout", function() {
        interval = setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000);
    });

    // Navigation buttons
    leftBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    rightBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});

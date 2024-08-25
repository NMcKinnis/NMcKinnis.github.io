document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextItem);
    document.querySelector('.prev').addEventListener('click', prevItem);

    showItem(currentIndex);

    setInterval(nextItem, 3000);
});

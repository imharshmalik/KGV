document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    window.changeSlide = function(direction) {
        showSlide(currentIndex + direction);
    };

    // Initialize the first slide
    showSlide(currentIndex);

    // Automatically change slides every 3 seconds
    setInterval(function() {
        changeSlide(1);
    }, 3000); // 3000ms = 3 seconds
});


// Ensure page loads at the top on refresh
window.onload = function() {
            window.scrollTo(0, 0);
        };
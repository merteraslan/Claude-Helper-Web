document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Predefined list of images
    const images = [
        'assets/media/1.png',
        'assets/media/2.png',
        'assets/media/3.png',
        'assets/media/4.png',
        'assets/media/5.png',
        'assets/media/6.png',
        // Add more image paths as needed
    ];

    function loadImages() {
        images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `Carousel image ${imagePath.split('/').pop()}`;
            carouselSlide.appendChild(img);
        });

        updateCarousel();
    }

    function updateCarousel() {
        const slides = carouselSlide.querySelectorAll('img');
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.display = 'block';
                slide.style.borderRadius = '7px';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    prevButton.addEventListener('click', () => {
        const slides = carouselSlide.querySelectorAll('img');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        const slides = carouselSlide.querySelectorAll('img');
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    loadImages();
});

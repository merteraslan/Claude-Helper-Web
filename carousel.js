document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Function to load images from the /assets/media folder
    function loadImages() {
        fetch('/assets/media')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const links = Array.from(htmlDoc.querySelectorAll('a'))
                    .filter(link => link.href.match(/\.(jpg|jpeg|png|gif)$/i))
                    .sort((a, b) => a.href.localeCompare(b.href));

                links.forEach(link => {
                    const img = document.createElement('img');
                    img.src = link.href;
                    img.alt = link.textContent;
                    carouselSlide.appendChild(img);
                });

                updateCarousel();
            });
    }

    function updateCarousel() {
        const slides = carouselSlide.querySelectorAll('img');
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.display = 'block';
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

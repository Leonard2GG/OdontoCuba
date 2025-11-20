document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimony__slider');
    const slides = document.querySelectorAll('.testimony__body');
    const dotsContainer = document.querySelector('.testimony__dots');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let intervalId;
    // Create dots
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.slide = i;
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots[0].classList.add('dot--active');

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideIndex = parseInt(e.target.dataset.slide);
                    goToSlide(slideIndex);
                    resetAutoPlay();
                });
            });
        }
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('dot--active'));
            dots[index].classList.add('dot--active');
        }
    }

    function goToSlide(index) {
        if (slider) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            updateDots(index);
        }
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
    }

    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 5000); // 5 seconds
    }

    function resetAutoPlay() {
        clearInterval(intervalId);
        startAutoPlay();
    }

    if (slider && slides.length > 0) {
        startAutoPlay();
    }
});
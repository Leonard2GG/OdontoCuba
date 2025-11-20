document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll with offset to avoid header overlap
    const links = document.querySelectorAll('a.nav__links[href^="#"]');
    const OFFSET = 80; // px to offset from top

    function scrollToHash(targetId) {
        const target = document.querySelector(targetId);
        if (!target) return;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        // Apply the reveal animation after a short delay so it runs after the smooth scroll
        // Some browsers deprioritize animations while scrolling, so delaying ensures visibility.
        const ANIM_DELAY = 450; // ms (tweakable)
        // clear any existing reveal state
        target.classList.remove('reveal');
        setTimeout(() => {
            // Force reflow then add class to reliably trigger animation
            // eslint-disable-next-line no-unused-expressions
            void target.offsetWidth;
            target.classList.add('reveal');
            // remove the class after animation finishes to allow repeating
            setTimeout(() => target.classList.remove('reveal'), 900);
            // Move focus for accessibility after animation, then remove temporary tabindex
            setTimeout(() => {
                target.setAttribute('tabindex', '-1');
                target.focus();
                setTimeout(() => target.removeAttribute('tabindex'), 300);
            }, 250);
        }, ANIM_DELAY);
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            e.preventDefault();
            // close mobile menu if open
            const menu = document.querySelector('.nav__link--menu');
            if (menu && menu.classList.contains('nav__link--show')) {
                menu.classList.remove('nav__link--show');
                const openButton = document.querySelector('.nav__menu');
                if (openButton) openButton.setAttribute('aria-expanded', 'false');
            }
            scrollToHash(href);
            // update URL hash without jumping
            history.pushState(null, '', href);
        });
    });
});

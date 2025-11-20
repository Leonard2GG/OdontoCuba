document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link--menu');
    const menuLinks = document.querySelectorAll('.nav__links');
    const closeButton = document.querySelector('.nav__close');

    if (!openButton || !menu) return; // nothing to do

    // ARIA attributes for accessibility
    openButton.setAttribute('aria-expanded', 'false');
    openButton.setAttribute('aria-controls', menu.id || 'main-navigation');
    if (!menu.id) menu.id = 'main-navigation';

    function openMenu() {
        menu.classList.add('nav__link--show');
        openButton.setAttribute('aria-expanded', 'true');
    }

    function closeMenuFn() {
        menu.classList.remove('nav__link--show');
        openButton.setAttribute('aria-expanded', 'false');
        openButton.focus();
    }

    openButton.addEventListener('click', openMenu);
    if (closeButton) closeButton.addEventListener('click', closeMenuFn);

    menuLinks.forEach(link => link.addEventListener('click', closeMenuFn));

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('nav__link--show')) {
            closeMenuFn();
        }
    });
});
const openBoutton = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav__link');
const menu_links = document.querySelectorAll('.nav__links');
const closeMenu = document.querySelector('.nav__close');

openBoutton.addEventListener('click', ()=>{
    menu.classList.add('nav__link--show');
});

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('nav__link--show');
});

menu_links.forEach((e) => { 
    e.addEventListener('click', () => {
    menu.classList.remove('nav__link--show');
})});
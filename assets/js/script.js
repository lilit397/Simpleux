const menuBtn = document.querySelector('.header__menu-btn');
const headerNav = document.querySelector('.header__nav');
const coverBg = document.querySelector('.cover-bg');
const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuOpen = true;
        menuBtn.classList.add('open');
        headerNav.classList.add('active');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        headerNav.classList.remove('active');
    }
})

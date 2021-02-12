const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-end-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})
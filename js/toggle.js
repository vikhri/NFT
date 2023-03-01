window.addEventListener('DOMContentLoaded', (event) => {
    const navMenu = document.querySelector('.menu');
    const navToggle = document.querySelector('.page-header__toggle');
    

    navToggle.addEventListener('click', () => {
        if (navToggle.classList.contains('header-toggle--closed')) {
            navToggle.classList.remove('header-toggle--closed');
            navToggle.classList.add('header-toggle--open');
            navMenu.classList.remove('menu--closed');
        
        } else {
            navToggle.classList.add('header-toggle--closed');
            navToggle.classList.remove('header-toggle--open');
            navMenu.classList.add('menu--closed');
}
});
});

window.addEventListener('DOMContentLoaded', () => {

    const selectors = {
        menu: '.menu',
        toggleButton: '.header-navigation__toggle'

    }

    const states = {
        toggle: {
            closed: 'header-navigation__toggle--closed',
            open: 'header-navigation__toggle--open'
        },
        menu: {
            closed: 'menu--closed'
            open: 'menu--open'
        }
    }

    const navMenu = document.querySelector(selectors.menu);
    const navToggle = document.querySelector(selectors.toggleButton);


    navToggle.addEventListener('click', () => {

        const isClosed = navToggle.classList.contains(states.toggle.closed)

        navToggle.classList.toggle(states.toggle.open, isClosed);
        navToggle.classList.toggle(states.toggle.closed, !isClosed);
        navMenu.classList.toggle(states.menu.closed, !isClosed);


    });
});

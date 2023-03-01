window.addEventListener('DOMContentLoaded', () => {

    const selectors = {
        menu: '.menu',
        toggleButton: '.page-header__toggle'

    }

    const states = {
        toggle: {
            closed: 'header-toggle--closed',
            open: 'header-toggle--open'
        },
        menu: {
            closed: 'menu--closed'
        }
    }

    const navMenu = document.querySelector(selectors.menu);
    const navToggle = document.querySelector(selectors.toggleButton);



    navToggle.addEventListener('click', () => {

        const isClosed = navToggle.classList.contains(states.toggle.closed)

        // if (isClosed) {
        //     navToggle.classList.remove(states.toggle.closed);
        //     navToggle.classList.add(states.toggle.open);
        //     navMenu.classList.remove(states.menu.closed);

        //     return
        // }
        // navToggle.classList.add(states.toggle.closed);
        // navToggle.classList.remove(states.toggle.open);
        // navMenu.classList.add(states.menu.closed);


        navToggle.classList.toggle(states.toggle.open, isClosed);
        navToggle.classList.toggle(states.toggle.closed, !isClosed);
        navMenu.classList.toggle(states.menu.closed, !isClosed);


    });
});

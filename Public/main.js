document.addEventListener("DOMContentLoaded", () => {

    // Find the hamburger icon and the mobile menu
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-nav-links');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            // Toggle the 'open' class on both the icon and the menu
            menuIcon.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
    }

});
/**
 * Toggles the visibility of the navigation menu. When the menu button is clicked, 
 * it adds or removes the 'header__nav--active' class to the navigation menu, 
 * which controls its visibility. Additionally, this function handles the closing 
 * of the menu via the close button and adjusts visibility based on window size.
 */

export default function toggleMenuVisibility () {
    const menuButton = document.querySelector(".header__menu-button");
    const nav = document.querySelector(".header__nav");
    const closeButton = document.querySelector(".nav__close-button");

    // Toggles the active class on menu button click
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("header__nav--active");
        menuButton.style.display = 'none';
    });
    
    // Listens to for window resize events
    window.addEventListener('resize', function() { 
        // Check if the screen size is greater than 768px
        if (window.innerWidth >768) {
            // Remove the active class from the nav
            nav.classList.remove("header__nav--active");
            menuButton.style.display = 'none';
        } else {
            menuButton.style.display = 'block';
    }

        closeButton.addEventListener("click", function () {
            nav.classList.remove("header__nav--active");
            menuButton.style.display = 'block';
        })
    });
}
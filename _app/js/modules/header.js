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
        }

        closeButton.addEventListener("click", function () {
            nav.classList.remove("header__nav--active");
            menuButton.style.display = 'block';
        })
    });
}
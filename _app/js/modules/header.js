export default function toggleMenuVisibility () {
    const menuButton = document.querySelector(".header__menu-button");
    const nav = document.querySelector(".header__nav");

    // Toggles the active class on menu button click
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("header__nav--active");  
    });

    // Listens to for window resize events
    window.addEventListener('resize', function() { 
        // Check if the screen size is greater than 768px
        if (window.innerWidth >768) {
            // Remove the active class from the nav
            nav.classList.remove("header__nav--active");    
        }
    });
}
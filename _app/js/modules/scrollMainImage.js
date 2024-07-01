export default function scrollMainImage() {
    const image = document.querySelector('#main-content img');
    const title = document.querySelector('.main-title');
    const bannerImage = document.querySelector('.banner-button')

    // Define the initial values for scale and imageMovement
    let scale = 1;
    let imageMovement = 0;

    window.addEventListener('scroll', function () {
        // Calculate scale and imageMovement based on scroll position
        scale = 1 + window.scrollY / 80;
        if (window.scrollY  > 30) {
            scale = 1 + 250 / 600;
        }

        imageMovement = Math.max(-window.scrollY / 1, -20);

        // Apply both the scale and the upward movement to the image
        image.style.transform = `translate(-50%, ${imageMovement}%) scale(${scale})`;

        // Move the title down as you scroll
        const titleMovement = Math.min(300, window.scrollY / 0.7);
        title.style.transform = `translateY(${titleMovement}px)`;

        // Check if the scroll position is greater than or equal to the point where title color should change
        if (window.scrollY >= 70) {
            title.style.color = 'white';
            image.style.filter = 'blur(5px) brightness(0.4)';
        } else {
            title.style.color = 'initial';
            image.style.filter = 'none';
        }
    });

    // Add an event listener to reset the image position when the page is reloaded
    window.addEventListener('load', function () {
        // Reset the image position to its initial state
        image.style.transform = 'translate(-50%, 0) scale(1)';
    });
}
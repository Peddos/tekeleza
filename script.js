// Select the toggle button and navbar links
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// Add click event listener to toggle the active class
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


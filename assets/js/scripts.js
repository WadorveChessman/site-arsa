// Gestion du menu responsive
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const mobileMenu = document.getElementById('mobile-menu');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

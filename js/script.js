document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        header.classList.toggle('active');
    });
}

const links = document.querySelectorAll('nav a[href^="#"]');


links.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

// Fecha o menu ao clicar em um link (mobile)
if (header.classList.contains('active')) {
    header.classList.remove('active');
}

const target = document.querySelector(this.getAttribute('href'));
target.scrollIntoView({ behavior: 'smooth' });
});
});
});
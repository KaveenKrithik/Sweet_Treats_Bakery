const selectElement = (selector) => document.querySelector(selector);

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');
const navLinks = document.querySelectorAll('.nav-link');


menuToggler.addEventListener('click', () => {
    body.classList.toggle('show');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('show');
    });
});


const sr = ScrollReveal();


const revealOptions = {
    duration: 1000,
    distance: '25rem',
    delay: 600
};


sr.reveal('.animate-left', { ...revealOptions, origin: 'left', delay: 300 });
sr.reveal('.animate-right', { ...revealOptions, origin: 'right' });
sr.reveal('.animate-top', { ...revealOptions, origin: 'top' });
sr.reveal('.animate-bottom', { ...revealOptions, origin: 'bottom' });

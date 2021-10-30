/* eslint-disable no-undef,no-param-reassign */
const navBurger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

const navSlide = () => {
  navBurger.addEventListener('click', () => {
    console.log('cliccked');
    navLinks.classList.toggle('nav-active');

    navItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // animacja burger
    navBurger.classList.toggle('toggle');
  });
};

navSlide();

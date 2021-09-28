const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__link-container');
const hamburgerToggle = document.getElementById('mobile-nav');

hamburgerToggle.addEventListener('click', () => {
  if (hamburgerToggle.className === 'fas fa-bars mobile-nav') {
    hamburgerToggle.className = 'fas fa-times mobile-nav elevate-element';
    mobileNav.classList.add('show-mobile-nav');
    body.classList.add('no-scroll');
  } else {
    hamburgerToggle.className = 'fas fa-bars mobile-nav';
    mobileNav.classList.remove('show-mobile-nav');
    body.classList.remove('no-scroll');
  }
});


const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__nav-container');
const hamburgerToggle = document.getElementById('mobile-nav');

const productDropdown = document.getElementById('product-header');
const productChevron = document.getElementById('product');
const productMenu = document.querySelector('.nav-products');

const companyDropdown = document.getElementById('company-header');
const companyChevron = document.getElementById('company');
const companyMenu = document.querySelector('.nav-company');

const connectDropdown = document.getElementById('connect-header');
const connectChevron = document.getElementById('connect');
const connectMenu = document.querySelector('.nav-connect');

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

productDropdown.addEventListener('click', () => {
  productChevron.classList.toggle('fa-chevron-down')
  productChevron.classList.toggle('fa-chevron-up')
  productMenu.classList.toggle("hide");
});

connectDropdown.addEventListener('click', () => {
  connectChevron.classList.toggle('fa-chevron-down')
  connectChevron.classList.toggle('fa-chevron-up')
  connectMenu.classList.toggle("hide");
});

companyDropdown.addEventListener('click', () => {
  companyChevron.classList.toggle('fa-chevron-down')
  companyChevron.classList.toggle('fa-chevron-up')
  companyMenu.classList.toggle("hide");
});
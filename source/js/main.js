let burgerButton = document.querySelector('.navigation__burger');
let burgerLines = document.querySelector('.navigation__burger-line');
let navList = document.querySelector('.navigation__list');
let form = document.querySelector('.form');
let formName = document.querySelector('#input-name');
let formWeight = document.querySelector('#input-weight');
let formEmail = document.querySelector('#input-email');
let formPhone = document.querySelector('#input-phone');
let formSubmit = document.querySelector('.form__submit');

// Burger menu

burgerButton.classList.add('navigation__burger--visible');
navList.classList.add('navigation__list--closed');

burgerButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  burgerLines.classList.toggle('navigation__burger-line--closed');
  burgerLines.classList.toggle('navigation__burger-line--opened');
  navList.classList.toggle('navigation__list--closed');
  navList.classList.toggle('navigation__list--opened');
})

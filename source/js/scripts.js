'use strict';

var mainMenuBtn = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');
var userNav = document.querySelector('.user-nav');

mainNav.classList.remove('main-nav--no-js');
userNav.classList.remove('user-nav--no-js');
mainMenuBtn.classList.remove("page-header__toggle--no-js");

mainMenuBtn.addEventListener('click', function(evt) {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    userNav.classList.remove('user-nav--closed');
    mainMenuBtn.classList.remove('page-header__toggle--open');

    mainNav.classList.add('main-nav--opened');
    userNav.classList.add('user-nav--opened');
    mainMenuBtn.classList.add('page-header__toggle--close');
  } else {
    mainNav.classList.remove('main-nav--opened');
    userNav.classList.remove('user-nav--opened');
    mainMenuBtn.classList.remove('page-header__toggle--close');

    mainNav.classList.add('main-nav--closed');
    userNav.classList.add('user-nav--closed');
    mainMenuBtn.classList.add('page-header__toggle--open');
  }
});

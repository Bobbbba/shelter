// Бургер меню

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".burger_menu").addEventListener("click", function () {
//    document.querySelector(".header").classList.toggle("open")
//  })
// })

// Бургер меню
const burgerButton = document.getElementById("burger");
const burgerMenu = document.querySelector(".menu");
const burgerLi = burgerMenu.querySelectorAll('li');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
  if (burgerButton.classList.contains('open')) {
    closeBurger();
  } else {
    openBurger();
  }
})

overlay.addEventListener('click', () => {
  if (overlay.classList.contains('open')) {
    closeBurger();
  }
})

burgerLi.forEach(link => {
  link.addEventListener('click', () => {
    closeBurger();
  })
})



function closeBurger() {
    burgerButton.classList.remove('open');
    burgerMenu.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('open');
};

function openBurger() {
    burgerButton.classList.add('open');
    burgerMenu.classList.add('open');
    overlay.classList.add('open');
    body.classList.add('open');
};

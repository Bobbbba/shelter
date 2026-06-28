console.log(
  "Markup validation - +10 \n Layout matches the design - +30 \n  CSS requirements - +15 \n Interactivity - +10 \n Markup validation - +10 \n Layout matches the design - +15 \n CSS requirements - +5 \n Interactivity - +10"
);

// Бургер меню
const burgerButton = document.getElementById("burger");
const burgerMenu = document.querySelector(".menu");
const burgerLi = burgerMenu.querySelectorAll('li');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
// document.addEventListener("DOMContentLoaded", function () {
//   burgerButton.addEventListener("click", function () {
//     burgerMenu.classList.toggle("open")
//     burgerButton.classList.toggle("open")
//     overlay.classList.toggle("overlay_open")
//     document.body.classList.toggle("no-scroll") = 'hidden';
    
//  })
// })
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




// document.addEventListener('click', (e) => {
//   const withinMenu = e.composedPath().includes(menu);
//   const withinButton = e.composedPath().includes(button);

//   if (!withinMenu && !withinButton) {
//     menu.classList.remove('open');
//   }
// })
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("body").addEventListener("click", function () {
//    document.querySelector("header").classList.toggle("open")
//  })
// })
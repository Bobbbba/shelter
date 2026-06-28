// Бургер меню

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".burger_menu").addEventListener("click", function () {
   document.querySelector(".header").classList.toggle("open")
 })
})
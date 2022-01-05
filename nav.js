let button = document.querySelector('.burger')
let body = document.querySelector('body')
let nav = document.querySelector('.nav-links')
let header = document.querySelector('nav')
let logo = document.querySelector('.logo')

button.addEventListener('click', navSlide)


function navSlide() {
    nav.classList.toggle('navSlide')
    // header.classList.toggle('bg')
    // logo.classList.toggle('bg')
}
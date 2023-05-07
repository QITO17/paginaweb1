const menu = document.querySelector('.menu')
const nav__content = document.querySelector('.navegation--content')
const close = document.querySelector('.close')
menu.addEventListener('click', () => {
    nav__content.classList.contains('show--menu') ? nav__content.classList.remove('show--menu') : nav__content.classList.add('show--menu')
})


close.addEventListener('click', () => {
    nav__content.classList.remove('show--menu')
})

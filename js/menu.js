const headerMenuDesktop = document.querySelector('.Header-menuDesktop')
const headerIconMenuDesktop = document.querySelector('.Header-iconMenuDesktop')
const headerContainerMenu = document.querySelector('.HeaderMenu-container')
const headerMenuLinks = document.querySelectorAll('.HeaderMenu-link')
const arrayMenuLinks = [...headerMenuLinks]

// desktop
headerMenuDesktop.addEventListener('click', () => {
    headerContainerMenu.classList.toggle('active')
    headerIconMenuDesktop.classList.toggle('active')
})

arrayMenuLinks.map(item => item.addEventListener('click', () => {
    headerContainerMenu.classList.toggle('active')
}))

// mobile
const headerBurgerBtn = document.querySelector('.Header-burgerBtn')
const headerContainerBurgerMenu = document.querySelector('.HeaderBurgerMenu-container')
const headerBurgerBtnClose = document.querySelector('.HeaderBurgerMenu-btnClose')
const headerBurgerLink = document.querySelectorAll('.HeaderBurgerMenu-link')
const arrayBurgerLinks = [...headerBurgerLink]
const headerBurgerSelectLink = document.querySelectorAll('.HeaderBurgerMenu-selectLink')
const arrayBurgerLinksSelect = [...headerBurgerSelectLink]
// scroll
const mainScroll = document.querySelector('body')

// burger menu
headerBurgerBtn.addEventListener('click', () => {
    mainScroll.style.overflowY = 'hidden'
    headerContainerBurgerMenu.classList.toggle('hidden')
})

headerBurgerBtnClose.addEventListener('click', () => {
    mainScroll.style.overflowY = 'scroll'
    headerContainerBurgerMenu.classList.add('hidden')
})

arrayBurgerLinks.map(item => item.addEventListener('click', () => {
    mainScroll.style.overflowY = 'scroll'
    headerContainerBurgerMenu.classList.add('hidden')
}))

arrayBurgerLinksSelect.map(item => item.addEventListener('click', () => {
    mainScroll.style.overflowY = 'scroll'
    headerContainerBurgerMenu.classList.add('hidden')
}))

// select links
const headerMenuMobile = document.querySelector('.Header-menuMobile')
const headerIconBurgerSelect = document.querySelector('.HeaderBurgerMenu-iconSelect')
const headerWrapperBurgerMenuLinksSelect = document.querySelector('.HeaderBurgerMenu-wrapperLinksSelect')

headerMenuMobile.addEventListener('click', () => {
    headerWrapperBurgerMenuLinksSelect.classList.toggle('hidden')
    headerIconBurgerSelect.classList.toggle('active')
})
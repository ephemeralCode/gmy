const headerMenuDesctop = document.querySelector('.Header-menuDesctop')
const headerIconMenuDesctop = document.querySelector('.Header-iconMenuDesctop')
const headerContainerMenu = document.querySelector('.Header-containerMenu')
const headerMenuLinks = document.querySelectorAll('.Header-menuLink')
const arrayMenuLinks = [...headerMenuLinks]

// desctop
headerMenuDesctop.addEventListener('click', () => {
    headerContainerMenu.classList.toggle('hidden')
    headerIconMenuDesctop.classList.toggle('active')
})

arrayMenuLinks.map(item => item.addEventListener('click', () => {
    headerContainerMenu.classList.add('hidden')
}))

// mobile
const headerBurgerBtn = document.querySelector('.Header-burgerBtn')
const headerContainerBurgerMenu = document.querySelector('.Header-containerBurgerMenu')
const headerBurgerBtnClose = document.querySelector('.Header-burgerBtnClose')
const headerBurgerLink = document.querySelectorAll('.Header-burgerLink')
const arrayBurgerLinks = [...headerBurgerLink]
const headerBurgerSelectLink = document.querySelectorAll('.Header-burgerSelectLink')
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
const headerIconBurgerSelect = document.querySelector('.Header-iconBurgerSelect')
const headerWrapperBurgerMenuLinksSelect = document.querySelector('.Header-wrapperBurgerMenuLinksSelect')

headerMenuMobile.addEventListener('click', () => {
    headerWrapperBurgerMenuLinksSelect.classList.toggle('hidden')
    headerIconBurgerSelect.classList.toggle('active')
})
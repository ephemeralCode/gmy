let options = {
    root: null,
    rootMargin: '5px',
    threshold: .5
}

function callback(entries, observer) {
    entries.forEach(elem => {
        if (elem.isIntersecting) {
            elem.target.classList.add('active')
        } else {
            elem.target.classList.remove('active')
        }
    })
}

let observer = new IntersectionObserver(callback, options)

let upAnim = document.querySelectorAll('.upAnimationText')
let downAnim = document.querySelectorAll('.downAnimationText')

upAnim.forEach(elem => {
    observer.observe(elem)
})

downAnim.forEach(elem => {
    observer.observe(elem)
})
const portfolioWorks = [...document.querySelectorAll('.PortfolioGraphicDesign-containerImage')]
const generalContent = [...document.querySelectorAll('.stdAnim')]
const contacts = document.querySelector('.Contacts-wrapper')

const optionsAnim = {
    portfolioWorksAddAnim: '-50% 0px -30% 0px',
    portfolioWorksRemoveAnim: '200px 0px',

    generalContentAddAnim: '5px 0px',
    generalContentRemoveAnim: '200px 0px',

    contactsAddAnim: '-10% 0px',
    contactsRemoveAnim: '200px 0px',
}

const intersectionObserverAdd = (content, optionsAnim, nameAnim) => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })

    }, {

        rootMargin: optionsAnim[nameAnim],
    })

    if (Array.isArray(content)) {
        content.forEach((element) => intersectionObserver.observe(element))

    } else {

        intersectionObserver.observe(content)
    }
}

const intersectionObserverRemove = (content, optionsAnim, nameAnim) => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('active')
            }
        })
        
    }, {
    
        rootMargin: optionsAnim[nameAnim],
    })

    if (Array.isArray(content)) {
        content.forEach((element) => intersectionObserver.observe(element))

    } else {

        intersectionObserver.observe(content)
    }
}

intersectionObserverAdd(portfolioWorks, optionsAnim, 'portfolioWorksAddAnim')
intersectionObserverRemove(portfolioWorks, optionsAnim, 'portfolioWorksRemoveAnim')

intersectionObserverAdd(generalContent, optionsAnim, 'generalContentAddAnim')
intersectionObserverRemove(generalContent, optionsAnim, 'generalContentRemoveAnim')

intersectionObserverAdd(contacts, optionsAnim, 'contactsAddAnim')
intersectionObserverRemove(contacts, optionsAnim, 'contactsRemoveAnim')
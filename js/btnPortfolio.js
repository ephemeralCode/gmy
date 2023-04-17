// desctop
const portfolioHeaderBtnGraphicDesign = document.querySelector('.PortfolioHeader-btnGraphicDesign')
const portfolioHeaderBtnVideoProduction = document.querySelector('.PortfolioHeader-btnVideoProduction')

// mobile
const portfolioMainBtnGraphicDesign = document.querySelector('.PortfolioMain-btnGraphicDesign')
const portfolioMainBtnVideoProduction = document.querySelector('.PortfolioMain-btnVideoProduction')

const portfolioGraphicDesignContainer = document.querySelector('.PortfolioGraphicDesign')
const portfolioVideoProductionContainer = document.querySelector('.PortfolioVideoProduction')

// desctop
function graphicDesign() {
    portfolioHeaderBtnGraphicDesign.classList.add('active')
    portfolioHeaderBtnVideoProduction.classList.remove('active')

    portfolioMainBtnGraphicDesign.classList.add('active')
    portfolioMainBtnVideoProduction.classList.remove('active')
    
    portfolioGraphicDesignContainer.classList.remove('hidden')
    portfolioVideoProductionContainer.classList.add('hidden')
}

function videoProduction() {
    portfolioHeaderBtnVideoProduction.classList.add('active')
    portfolioHeaderBtnGraphicDesign.classList.remove('active')

    portfolioMainBtnGraphicDesign.classList.remove('active')
    portfolioMainBtnVideoProduction.classList.add('active')

    portfolioVideoProductionContainer.classList.remove('hidden')
    portfolioGraphicDesignContainer.classList.add('hidden')
}

portfolioHeaderBtnGraphicDesign.addEventListener('click', () => {
    graphicDesign()
})

portfolioHeaderBtnVideoProduction.addEventListener('click', () => {
    videoProduction()
})

// mobile
portfolioMainBtnGraphicDesign.addEventListener('click', () => {
    graphicDesign()
})

portfolioMainBtnVideoProduction.addEventListener('click', () => {
    videoProduction()
})
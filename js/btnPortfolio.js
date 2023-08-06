const selectedTypePorftolio = localStorage.getItem('typePortfolio')

// container
const portfolioGraphicDesignContainer = document.querySelector('.PortfolioGraphicDesign-container')
const portfolioVideoProductionContainer = document.querySelector('.PortfolioVideoProduction-container')

const btnTypeGraphicDesignPortfolio = document.querySelectorAll('.PortfolioTypeSwitch-containerBtnGraphicDesignPortfolio')
const btnTypeVideoProductionPortfolio = document.querySelectorAll('.PortfolioTypeSwitch-containerBtnVideoProductionPortfolio')
const arrayBtnGraphicDesign = [...btnTypeGraphicDesignPortfolio]
const arrayBtnVideoProduction = [...btnTypeVideoProductionPortfolio]

function graphicDesign() {
    arrayBtnGraphicDesign.map(item => item.classList.add('active'))
    arrayBtnVideoProduction.map(item => item.classList.remove('active'))

    portfolioGraphicDesignContainer.classList.remove('hidden')
    portfolioVideoProductionContainer.classList.add('hidden')
}

function videoProduction() {
    arrayBtnGraphicDesign.map(item => item.classList.remove('active'))
    arrayBtnVideoProduction.map(item => item.classList.add('active'))

    portfolioVideoProductionContainer.classList.remove('hidden')
    portfolioGraphicDesignContainer.classList.add('hidden')
}

if (selectedTypePorftolio === 'video') {
    
    videoProduction()
} 

arrayBtnGraphicDesign.map(item => item.addEventListener('click', graphicDesign))
arrayBtnVideoProduction.map(item => item.addEventListener('click', videoProduction))
const linkToVideoPortfolio = document.querySelector('.VideoProduction-linkToPortfolioPage')
const linkToDesignPortfolio = document.querySelector('.GraphicDesign-linkToPortfolioPage')

const selectedTypePorftolio = localStorage.getItem('typePortfolio')

if (!selectedTypePorftolio) {
    localStorage.setItem('typePortfolio', '')
}

function selectTypePorftolio(typePortfolio) {
    localStorage.setItem('typePortfolio', typePortfolio)
}

linkToVideoPortfolio.addEventListener('click', () => selectTypePorftolio('video'))
linkToDesignPortfolio.addEventListener('click', () => selectTypePorftolio('design'))
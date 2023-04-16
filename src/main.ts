import './styles/main.scss'

const slider = document.querySelector('.scroll-container') as HTMLElement
const productContainer = document.querySelector(
  '.product-container__products'
) as HTMLElement
const product = document.querySelector(
  '.product-container__product'
) as HTMLElement
const prevBtn = document.querySelector('.nav-btn.prev') as HTMLButtonElement
const nextBtn = document.querySelector('.nav-btn.next') as HTMLButtonElement

// Slide movement with previous and next buttons
let sliderWidth = slider.getBoundingClientRect().width
let productContainerWidth = productContainer.getBoundingClientRect().width
let productWidth = product.getBoundingClientRect().width

let unvisibleArea = productContainerWidth - sliderWidth
let totalMove = Math.ceil(unvisibleArea / productWidth)

let oneMove = unvisibleArea / totalMove

let currIndex = 0

const move = () => {
  prevBtn.style.display = 'grid'
  nextBtn.style.display = 'grid'

  if (currIndex === 0) {
    prevBtn.style.display = 'none'
  }
  if (currIndex === totalMove) {
    nextBtn.style.display = 'none'
  }

  productContainer.style.transform = `translateX(-${oneMove * currIndex}px)`
}

// For resetting slide states on resizing
window.addEventListener('resize', () => {
  sliderWidth = slider.getBoundingClientRect().width
  productContainerWidth = productContainer.getBoundingClientRect().width
  productWidth = product.getBoundingClientRect().width

  unvisibleArea = productContainerWidth - sliderWidth
  totalMove = Math.ceil(unvisibleArea / productWidth)

  oneMove = unvisibleArea / totalMove

  currIndex = 0
  move()
})

prevBtn.addEventListener('click', () => {
  if (currIndex > 0) {
    currIndex--
    move()
  }
})

nextBtn.addEventListener('click', () => {
  if (currIndex < totalMove) {
    currIndex++
    move()
  }
})

import './styles/main.scss'

const slider = document.querySelector(
  '.product-container__products'
) as HTMLElement
let isDown = false
let startX = 0
let scrollLeft = 0

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const walk = (x - startX) * 1 // scroll speed
  slider.scrollLeft = scrollLeft - walk
  console.log(walk)
})

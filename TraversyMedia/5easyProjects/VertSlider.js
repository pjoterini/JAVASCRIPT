const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButtom = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
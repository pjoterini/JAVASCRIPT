const problemElement = document.querySelector('.problem')
const ourForm = document.querySelector('.our-form')
const ourField = document.querySelector('.our-field')
const pointsNeeded = document.querySelector('.points-needed')
const mistakesAllowed = document.querySelector('.mistakes-allowed')
const progressBar = document.querySelector('.progress-inner')



let state = {
    score: 0,
    wrongAnswers: 0
}

function updateProblem () {
    state.currentProblem = generateProblem()
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    ourField.value = ''
    ourField.focus()
}

updateProblem()

function generateRandomNumber (max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem () {
    return {
        numberOne: generateRandomNumber(100),
        operator: ['+', '-', '*'][generateRandomNumber(2)],
        numberTwo: generateRandomNumber(100)
    }
}

ourForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer 
    const p = state.currentProblem
    if (p.operator === '+') { correctAnswer = p.numberOne + p.numberTwo }
    if (p.operator === '-') { correctAnswer = p.numberOne - p.numberTwo }
    if (p.operator === '*') { correctAnswer = p.numberOne * p.numberTwo }

    if (parseInt(ourField.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updateProblem()
        progressBar.style.transform = `scaleX(${state.score / 10})`
    } else {
        state.wrongAnswers++
        mistakesAllowed.textContent = 3 - state.wrongAnswers
    }
    checkWinLoss()
}

function checkWinLoss() {
    if (state.score === 10) {
        alert('u won')
        resetGame()
    }
    if (state.wrongAnswers === 3) {
        alert('u bad')
        resetGame()
    }
} 

function resetGame() {
    updateProblem()
    state.score = 0
    state.wrongAnswers = 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    progressBar.style.transform = `scaleX(0)`
}
const selectionButtons = document.querySelectorAll("[data-selection")
const finalColumn = document.querySelector("[data-final-column]")
const yourScore = document.querySelector("[data-your-score")
const computerScore = document.querySelector("[data-computer-score")
const SELECTIONS = [
  {
    name: "rock",
    emoji: "RCK",
    beats: "scissors"
  },
  {
    name:"paper",
    emoji:"PPR",
    beats: "rock"
  },
  {
    name: "scissors",
    emoji: "SCS",
    beats: "paper"
  }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(e => e.name === selectionName)
      makeSelection(selection)
    })
})

const makeSelection = function(selection){
  const computerSelection = randomSelection()
  const youreWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, youreWinner)

  if(youreWinner) incrementScore(yourScore)
  if(computerWinner)  incrementScore(computerScore)
}

function incrementScore(scoreSpan){
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
const div = document.createElement("div")
div.innerText = selection.emoji
div.classList.add("result-selection")
if (winner) div.classList.add("winner")
finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}


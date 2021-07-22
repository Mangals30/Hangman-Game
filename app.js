const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const reset = document.querySelector('.btn')
let game

window.addEventListener('keypress', e => {
  e.preventDefault()
  game.makeGuess(e.key)
  render()
})
reset.addEventListener('click', e => {
  e.preventDefault()
  startGame()

})
const startGame = () => {
  getPuzzle().then((puzzle) => {
    let guesses = setLength(puzzle)
    game = new Hangaman(puzzle, guesses)
    render()
  }).catch((error) => {
    displayErrorMsg(puzzleEl, guessesEl, reset)
  })
}

const render = () => {
  puzzleEl.textContent = game.puzzle
  guessesEl.textContent = game.statusMsg
}
const setLength = (puzzle) => {
  let len = Math.round(puzzle.length / 2)
  let guesses = len > 13 ? 13 : len
  return guesses
}
const displayErrorMsg = (puzzleEl, guessesEl, reset) => {
  puzzleEl.textContent = 'Unable to fetch the puzzle! Please try after some time.'
  puzzleEl.style.fontSize = '2rem'
  guessesEl.textContent = ''
  reset.style.display = 'none'
}

startGame()
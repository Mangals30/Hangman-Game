class Hangaman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
    this.status = 'playing'
  }
  get puzzle() {
    let puzzle = ''
    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter == ' ') {
        puzzle += letter
      } else {
        puzzle += '-'
      }
    })
    return puzzle
  }
  calculateStatus() {
    const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter == ' ')
    if (this.remainingGuesses == 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get statusMsg() {
    if (this.status == 'playing') {
      return `Guesses Left : ${this.remainingGuesses}`
    } else if (this.status == 'failed') {
      return `Nice try!. The word was ${this.word.join('')}`
    } else {
      return `Great Work!. You guessed the word!`
    }
  }
  makeGuess(guess) {
    guess = guess.toLowerCase()
    let isUnique = !this.guessedLetters.includes(guess)
    let isBadGuess = !this.word.includes(guess)
    if (this.status != 'playing') {
      return
    }
    if (isUnique) {
      this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }
    this.calculateStatus()
  }
}
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { equal } = require('./tools')
const { hangman, hangtitle } = require('./hangman')
const { selectWord, onlyWord, hideWord } = require('./word')

const GAME_ERROR = { code: 'GAME_ERROR', errno: 3 }

class GameError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'GameError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

class Game {
  constructor() {
    this.isRunning = true
    this.hg = 0
    this.tried = []
    this.wordBase = selectWord()
    this.word = onlyWord(this.wordBase)
    this.wordHide = hideWord(this.word)
  }

  init() {
    try {
      // init game
      console.clear()
      console.log(hangtitle)
      console.log(chalk.white(hangman[this.hg]))
      console.log(`You already tried ${this.tried}`)
      console.log(chalk.blue(this.wordHide.join('')))
      console.log(chalk.green(`Here is the definition ${this.wordBase[1]}`))

    } catch (e) {
      throw new GameError(e.message, GAME_ERROR)
    }
  }

  run() {
    try {
      while (this.isRunning) {

        const userGuess = readlineSync.question('Guess a letter : ')
        const guess = ` ${userGuess.toUpperCase()} `
        let newWordHide = []

        this.tried.push(guess)

        for (i = 0; i < this.word.length; i++) {
          if (this.word[i] === guess) {
            newWordHide.push(guess)
          } else if (this.word[i] === this.wordHide[i]) {
            newWordHide.push(this.wordHide[i])
          } else if (this.word[i] === '   ') {
            newWordHide.push('   ')
          } else {
            newWordHide.push(' _ ')
          }
        }

        console.clear()
        console.log(hangtitle)

        if (equal(this.wordHide, newWordHide)) {
          this.hg++
          if (this.hg === hangman.length - 1) {
            this.isRunning = false
            console.log(chalk.red(`You loose, the word was ${this.word.join('')}`))
          }
        } else {
          this.wordHide = newWordHide
        }

        if (equal(this.word, this.wordHide)) {
          this.isRunning = false
          console.log(chalk.red('You win !'))
        }

        console.log(chalk.white(hangman[this.hg]))
        console.log(`You already tried ${this.tried}`)
        console.log(chalk.blue(this.wordHide.join('')))
        console.log(chalk.green(`Here is the definition ${this.wordBase[1]}`))
      }
    } catch (e) {
      throw new GameError(e.message, GAME_ERROR)
    }
  }
}

exports.Game = Game
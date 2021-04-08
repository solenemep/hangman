const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { equal } = require('./tools')
let { wordFind } = require('./word')
const { hangman } = require('./hangman')
const { hangtitle } = require('./hangman')


game = () => {
  // Start of the game
  let isRunning = true
  let hg = 0
  let tried = []
  let [word, wordHide] = wordFind()
  console.clear()
  console.log(hangtitle)
  console.log(chalk.white(hangman[0]))
  console.log(`You already tried ${tried}`)
  console.log(chalk.blue(wordHide.join('')))

  // Game loop
  while (isRunning) {

    const userGuess = readlineSync.question('Guess a letter : ')
    const guess = ` ${userGuess.toUpperCase()} `
    let newWordHide = []

    tried.push(guess)

    for (i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        newWordHide.push(guess)
      } else if (word[i] === wordHide[i]) {
        newWordHide.push(wordHide[i])
      } else if (word[i] === '   ') {
        newWordHide.push('   ')
      } else {
        newWordHide.push(' _ ')
      }
    }

    console.clear()
    console.log(hangtitle)

    if (equal(wordHide, newWordHide)) {
      hg++
      if (hg === hangman.length - 1) {
        isRunning = false
        console.log(chalk.red(`You loose, the word was ${word.join('')}`))
      }
    } else {
      wordHide = newWordHide
    }

    if (equal(word, wordHide)) {
      isRunning = false
      console.log(chalk.red('You win !'))
    }

    console.log(chalk.white(hangman[hg]))
    console.log(`You already tried ${tried}`)
    console.log(chalk.blue(wordHide.join('')))
  }
}
exports.game = game
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { equal } = require('./tools')
const { word } = require('./word')
let { wordHide } = require('./word')
const { hangman } = require('./hangman')


// Start of the game
let isRunning = true
let hg = 0
let tried = []
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
  if (equal(wordHide, newWordHide)) {
    hg++
    console.log(chalk.white(hangman[hg]))
    console.log(`You already tried ${tried}`)
    console.log(chalk.blue(wordHide.join('')))
    if (hg === hangman.length - 1) {
      isRunning = false
      console.log(chalk.red(`You loose, the word was ${word.join('')}`))
    }
  } else {
    wordHide = newWordHide
    console.log(`You already tried ${tried}`)
    console.log(chalk.blue(wordHide.join('')))
  }

  if (equal(word, wordHide)) {
    isRunning = false
    console.log(chalk.red('You win !'))
  }
}

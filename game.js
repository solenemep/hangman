const readlineSync = require('readline-sync')
const { equal } = require('./tools')
const { word } = require('./word')
let { wordHide } = require('./word')

// Start of the game
let isRunning = true
console.log(wordHide.join(''))

// Game loop
while (isRunning) {

  const userGuess = readlineSync.question('Guess a letter : ')
  const guess = ` ${userGuess.toUpperCase()} `
  let newWordHide = []

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
  wordHide = newWordHide
  console.log(wordHide.join(''))

  if (equal(word, wordHide)) {
    isRunning = false
    console.log('You win !')
  }

}
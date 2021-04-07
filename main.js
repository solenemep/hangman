// Checks
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { game } = require('./game')

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node main.js name'))
  process.exit(1)
}

const firstName = process.argv[2]
let isRunning = true
console.log(`Hello ${firstName}, welcome to HANGMAN GAME !`)

if (readlineSync.keyInYNStrict('Ready to play ?')) {
  game()
} else {
  console.log(`Goodbye ${firstName} !`)
  isRunning = false
  process.exit(0)
}
while (isRunning) {
  if (readlineSync.keyInYNStrict(`${firstName}, do you want to continue ?`)) {
    game()
  } else {
    console.log(`Goodbye ${firstName} !`)
    isRunning = false
    process.exit(0)
  }
}

// Checks
const readlineSync = require('readline-sync')
const chalk = require('chalk')

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node main.js name'))
  process.exit(1)
}

const firstName = process.argv[2]

console.log(`Hello ${firstName}, welcome to HANGMAN GAME !`)

if (readlineSync.keyInYNStrict('Ready to play ?')) {
  require('./game')
} else {
  console.log(`Goodbye ${firstName} !`)
  process.exit(0)
}

if (readlineSync.keyInYNStrict(`${firstName}, do you want to continue ?`)) {
  require('./game')
} else {
  console.log(`Goodbye ${firstName} !`)
  process.exit(0)
}

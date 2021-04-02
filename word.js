const { randomInt } = require('crypto')
const { countries } = require('./countries')

const n = randomInt(0, countries.length)
const wordBase = countries[n].toUpperCase().split('')
const word = []
for (i = 0; i < wordBase.length; i++) {
  word.push(` ${wordBase[i]} `)
}
// console.log(word.join(''))

let wordHide = []

for (i = 0; i < word.length; i++) {
  if (word[i] === '   ') {
    wordHide.push('   ')
  } else {
    wordHide.push(' _ ')
  }
}
// console.log(wordHide.join(''))

exports.word = word
exports.wordHide = wordHide


const { randomInt } = require('crypto')
const { countries } = require('./countries')

const wordFind = () => {
  const n = randomInt(0, countries.length)
  let wordBase = countries[n].toUpperCase().split('')

  let word = []
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
  return [word, wordHide]
}
// console.log(wordFind())

exports.wordFind = wordFind


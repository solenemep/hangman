const { dictRead } = require('./dict')
const { randomInt } = require('crypto')

const WORD_ERROR = { code: 'WORD_ERROR', errno: 2 }

class WordError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'WordError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

const selectWord = () => {
  try {
    // select word
    const dictContent = dictRead()
    const n = randomInt(0, dictContent.length)
    let wordBaseWord = dictContent[n].word.toUpperCase().split('')
    let wordBaseDef = dictContent[n].definition
    return wordBase = [wordBaseWord, wordBaseDef]
  } catch (e) {
    throw new WordError(e.message, WORD_ERROR)
  }
}

const onlyWord = (wordBase) => {
  try {
    let word = []
    for (i = 0; i < wordBase[0].length; i++) {
      word.push(` ${wordBase[0][i]} `)
    }
    return word
  } catch (e) {
    throw new WordError(e.message, WORD_ERROR)
  }
}

const hideWord = (word) => {
  try {
    // hide word
    let wordHide = []
    for (i = 0; i < word.length; i++) {
      if (word[i] === '   ') {
        wordHide.push('   ')
      } else {
        wordHide.push(' _ ')
      }
    }
    return wordHide
  } catch (e) {
    throw new WordError(e.message, WORD_ERROR)
  }
}

//console.log(selectWord())
//console.log(hideWord(selectWord()))

exports.selectWord = selectWord
exports.onlyWord = onlyWord
exports.hideWord = hideWord


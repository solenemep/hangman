const { dictRead } = require('./dict')

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

class Word {

  select() {
    try {
      // select word
    } catch (e) {
      throw new WordError(e.message, WORD_ERROR)
    }
  }
  hide() {
    try {
      // hide word
    } catch (e) {
      throw new WordError(e.message, WORD_ERROR)
    }
  }
}

exports.Word = Word


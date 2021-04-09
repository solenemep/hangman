const fs = require('fs')

const DICT_FILE_ERROR = { code: 'DICT_FILE_ERROR', errno: 1 }

class DictError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'DictError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

const dictRead = () => {
  try {
    const dictContentTab = fs.readFileSync('/users/solenepettier/desktop/hangman/errorhandling/dict.txt', 'utf-8').split(/\n/g)
    let dictContent = []
    for (i = 0; i < dictContentTab.length; i++) {
      let dictItemTab = dictContentTab[i].split(' ')
      dictContent.push({ word: dictItemTab[0], definition: dictItemTab.slice(1).join(' ') })
    }
    return dictContent
  } catch (e) {
    throw new DictError(e.message, DICT_FILE_ERROR)
  }
}

// console.log(dictRead())

exports.dictRead = dictRead
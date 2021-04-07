const fs = require('fs')
const { Word } = require('./word')
const { Game } = require('./game')


const word = new Word()
try {
  word.select()
  word.hide()
} catch (e) {
  console.error(e.toString())
}

const game = new Game()
try {
  game.init()
  game.run()
} catch (e) {
  console.error(e.toString())
}
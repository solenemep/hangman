const { Word } = require('./word')
const { Game } = require('./game')

const game = new Game()
try {
  game.init()
  game.run()
} catch (e) {
  console.error(e.toString())
}
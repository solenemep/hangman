const GAME_ERROR = { code: 'GAME_ERROR', errno: 3 }

class GameError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'GameError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

class Game {

  init() {
    try {
      // init game
    } catch (e) {
      throw new GameError(e.message, GAME_ERROR)
    }
  }
  run() {
    while (true) {
      // game on
      break
    }
  }
}

exports.Game = Game
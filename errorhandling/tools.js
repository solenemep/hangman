const TOOLS_ERROR = { code: 'TOOLS_ERROR', errno: 4 }

class ToolsError extends Error {
  constructor(message, error) {
    super(message)
    this.name = 'ToolsError'
    this.code = error.code
    this.errno = error.errno
  }
  toString() {
    return `${this.name} ${this.code}: ${this.message}`
  }
}

function equal(arr1, arr2) {
  try {
    let result = true;
    // comparing each element of array 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      }
    }
    return result
  }
  catch (e) {
    throw new ToolsError(e.message, TOOLS_ERROR)
  }
}

exports.equal = equal
const Stream = require('stream');
const { join } = require('path');

class S extends Stream {
  /**
   * Creates a new instance.
   * @param {string} path
   */
  constructor(path) {
    super()
    console.log(join('hello', path))
  }
}

/**
 * A function that returns `c`.
 * @param {string} input
 */
const c = (input = '') => {
  return 'c' + input ? `-${input}` : ''
}

/**
 * A function that returns `b`.
 * @param {number} times
 */
const b = (times = 0) => {
  return 'b' + times ? `-${times}` : ''
}

module.exports = S
module.exports.c = c
module.exports.b = b
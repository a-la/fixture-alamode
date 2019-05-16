const Stream = require('stream'); const {
  Transform,
} = Stream;
const { join } = require('path');

class S extends Transform {
  /**
   * Creates a new instance.
   * @param {string} path
   * @param {Stream} [parent]
   */
  constructor(path, parent) {
    super()
    this.source = join('example', path)
    if (parent instanceof Stream)
      this.pipe(parent)
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
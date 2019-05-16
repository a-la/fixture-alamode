/**
 * A function that returns `erte`.
 */
const erte = () => {
  return 'erte'
}

/**
 * A function that returns `c`.
 * @param {string} input
 */
const c = (input) => {
  return 'c' + (input ? `-${input}` : '')
}

/**
 * A function that returns `b`.
 * @param {number} times
 */
const b = (times) => {
  return 'b' + (times ? `-${times}` : '')
}

module.exports=erte

module.exports.c = c
module.exports.b = b
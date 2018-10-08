import { equal } from 'zoroaster/assert'
import Context from '../context'
import erte, { c, b } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof erte, 'function')
    equal(typeof c, 'function')
    equal(typeof b, 'function')
  },
  'calls erte'() {
    const res = erte()
    equal(res, 'erte')
  },
  'calls c'() {
    const res = c()
    equal(res, 'c')
  },
  'calls b'() {
    const res = b()
    equal(res, 'b')
  },
}

export default T
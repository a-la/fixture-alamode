import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import fixtureAlamode from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fixtureAlamode, 'function')
  },
  async 'calls package without error'() {
    await fixtureAlamode()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await fixtureAlamode({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
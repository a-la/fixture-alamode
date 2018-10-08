import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import fixtureAlamode from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await fixtureAlamode({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts
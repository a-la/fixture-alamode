import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import fixtureAlamode from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await fixtureAlamode({
      text: this.input,
    })
    return res
  },
  context: Context,
})
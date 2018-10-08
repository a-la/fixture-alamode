/* yarn example/ */
import fixtureAlamode from '../src'

(async () => {
  const res = await fixtureAlamode({
    text: 'example',
  })
  console.log(res)
})()
# @a-la/fixture-alamode

[![npm version](https://badge.fury.io/js/%40a-la%2Ffixture-alamode.svg)](https://npmjs.org/package/@a-la/fixture-alamode)

`@a-la/fixture-alamode` is source code compiled with _ÀLaMode_.

```sh
yarn add -E @a-la/fixture-alamode
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`erte(): string`](#erte-string)
- [`c(): string`](#c-string)
- [`b(): string`](#b-string)
- [Transpiled Source Code](#transpiled-source-code)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import erte, { c, b } from '@a-la/fixture-alamode'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `erte(): string`

Returns `erte`.

```js
/* yarn example/ */
import fixtureAlamode from '@a-la/fixture-alamode'

(async () => {
  const res = await fixtureAlamode({
    text: 'example',
  })
  console.log(res)
})()
```
```
erte
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `c(): string`

Returns `c`.

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `b(): string`

Returns `b`.

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Transpiled Source Code

This is how ÀLaMode transpiles the [source code](src/class.js):

```js
const Stream = require('stream');
const { join } = require('stream');

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
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/5.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://alamode.cc">À La Mode</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>
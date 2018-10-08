# @a-la/fixture-alamode

[![npm version](https://badge.fury.io/js/%40a-la%2Ffixture-alamode.svg)](https://npmjs.org/package/@a-la/fixture-alamode)

`@a-la/fixture-alamode` is source code compiled with _ÀLaMode_.

```sh
yarn add -E @a-la/fixture-alamode
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`erte()`](#erte-void)
- [`c()`](#c-void)
- [`b()`](#b-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import erte, { c, b } from '@a-la/fixture-alamode'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `erte(): void`

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `c(): void`

Returns `c`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `b(): void`

Returns `b`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

(c) [À La Mode][1] 2018

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
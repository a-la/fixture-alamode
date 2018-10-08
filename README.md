# @a-la/fixture-alamode

[![npm version](https://badge.fury.io/js/@a-la/fixture-alamode.svg)](https://npmjs.org/package/@a-la/fixture-alamode)

`@a-la/fixture-alamode` is Source code compiled with alamode.

```sh
yarn add -E @a-la/fixture-alamode
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`fixtureAlamode(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import fixtureAlamode from '@a-la/fixture-alamode'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `fixtureAlamode(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

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
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [À La Mode][1] 2018

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
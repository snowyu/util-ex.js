[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [to-regexp](../README.md) / toRegExp

# Function: toRegExp()

> **toRegExp**(`value`): `RegExp`

Defined in: [src/to-regexp.js:11](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/to-regexp.js#L11)

create or clone RegExp

## Parameters

### value

create a new RegExp from.

`string` | `RegExp`

## Returns

`RegExp`

- new RegExp instance.

## Example

```ts
toRegExp('/[a-z]/g') // new RegExp(/[a-z]/g)
toRegExp(/[a-z]/g)  // new RegExp(/[a-z]/g)
```

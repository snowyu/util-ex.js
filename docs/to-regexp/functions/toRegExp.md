[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [to-regexp](../README.md) / toRegExp

# Function: toRegExp()

> **toRegExp**(`value`): `RegExp`

Defined in: [util-ex.js/src/to-regexp.js:11](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/to-regexp.js#L11)

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

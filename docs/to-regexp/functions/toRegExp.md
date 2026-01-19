[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [to-regexp](../README.md) / toRegExp

# Function: toRegExp()

> **toRegExp**(`value`): `RegExp`

Defined in: [src/to-regexp.js:11](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/to-regexp.js#L11)

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

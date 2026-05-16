[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/int](../README.md) / isIntStr

# Function: isIntStr()

> **isIntStr**(`str`): `boolean`

Defined in: [src/is/string/int.js:14](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/is/string/int.js#L14)

Checks if a given string represents an integer number.

## Parameters

### str

`string`

The string to check.

## Returns

`boolean`

Whether or not the string represents an integer.

## Example

```ts
isIntStr('42'); // true
  isIntStr('0'); // true
  isIntStr('-123'); // true
  isIntStr('12.3'); // false
  isIntStr('1e3'); // false
```

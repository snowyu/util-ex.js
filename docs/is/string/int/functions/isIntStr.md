[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/int](../README.md) / isIntStr

# Function: isIntStr()

> **isIntStr**(`str`): `boolean`

Defined in: [util-ex.js/src/is/string/int.js:14](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/is/string/int.js#L14)

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

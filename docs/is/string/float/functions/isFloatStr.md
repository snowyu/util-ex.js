[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/float](../README.md) / isFloatStr

# Function: isFloatStr()

> **isFloatStr**(`str`): `boolean`

Defined in: [src/is/string/float.js:14](https://github.com/snowyu/util-ex.js/blob/e1b6f7e16ba0797d5deab91e7eed06c0bba0db01/src/is/string/float.js#L14)

Checks if a string represents a valid floating point number.

## Parameters

### str

`string`

The string to test.

## Returns

`boolean`

`true` if the string represents a valid floating point number, `false` otherwise.

## Example

```ts
isFloatStr('3.14'); // returns true
isFloatStr('-0.5'); // returns true
isFloatStr('2.718e0'); // returns true
isFloatStr('2.718e-2'); // returns true
isFloatStr('abc'); // returns false
```

[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/function](../README.md) / isFunctionStr

# Function: isFunctionStr()

> **isFunctionStr**(`aFuncString`): `boolean`

Defined in: [util-ex.js/src/is/string/function.js:9](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/is/string/function.js#L9)

Determines if a string represents a valid JavaScript function.

## Parameters

### aFuncString

`string`

The string to test.

## Returns

`boolean`

- True if the string represents a valid function, false otherwise.

## Example

```ts
isFunctionStr('function add(x, y) { return x + y; }') // true
isFunctionStr('const x = 5;') // false
```

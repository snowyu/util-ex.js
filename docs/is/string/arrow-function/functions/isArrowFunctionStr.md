[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/arrow-function](../README.md) / isArrowFunctionStr

# Function: isArrowFunctionStr()

> **isArrowFunctionStr**(`aFuncString`): `boolean`

Defined in: [util-ex.js/src/is/string/arrow-function.js:10](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/is/string/arrow-function.js#L10)

Determines if a string represents a valid JavaScript arrow function.

## Parameters

### aFuncString

`string`

The string to test.

## Returns

`boolean`

- True if the string represents a valid arrow function, false otherwise.

## Example

```ts
isArrowFunctionStr('(x, y) => x + y') // true
isArrowFunctionStr('async x => { return x; }') // true
isArrowFunctionStr('function(x) { return x; }') // false
```

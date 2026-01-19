[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/function](../README.md) / isFunctionStr

# Function: isFunctionStr()

> **isFunctionStr**(`aFuncString`): `boolean`

Defined in: [src/is/string/function.js:9](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/is/string/function.js#L9)

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

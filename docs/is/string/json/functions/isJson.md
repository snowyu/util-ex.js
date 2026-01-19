[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/json](../README.md) / isJson

# Function: isJson()

> **isJson**(`v`, `almost`): `boolean`

Defined in: [src/is/string/json.js:17](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/is/string/json.js#L17)

Checks if a string is a valid JSON string.

## Parameters

### v

`string`

The string to be checked.

### almost

`boolean`

If true, only checks if the string is almost JSON-like. Defaults to false.

## Returns

`boolean`

- Returns true if the string is valid JSON, false otherwise.

## Example

```ts
isJson('{"name": "John", "age": 30}'); // true
isJson('[1, 2, 3]'); // true
isJson('{"name": "John", "age": 30'); // false
isJson('This is not a JSON string.'); // false
```

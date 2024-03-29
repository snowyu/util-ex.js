[util-ex](../README.md) / [Exports](../modules.md) / is/string/json

# Module: is/string/json

## Table of contents

### References

- [default](is_string_json.md#default)

### Functions

- [isJson](is_string_json.md#isjson)

## References

### default

Renames and re-exports [isJson](is_string_json.md#isjson)

## Functions

### isJson

▸ **isJson**(`v`, `almost`): `boolean`

Checks if a string is a valid JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` | The string to be checked. |
| `almost` | `boolean` | If true, only checks if the string is almost JSON-like. Defaults to false. |

#### Returns

`boolean`

- Returns true if the string is valid JSON, false otherwise.

**`Example`**

```ts
isJson('{"name": "John", "age": 30}'); // true
isJson('[1, 2, 3]'); // true
isJson('{"name": "John", "age": 30'); // false
isJson('This is not a JSON string.'); // false
```

#### Defined in

[src/is/string/json.js:17](https://github.com/snowyu/util-ex.js/blob/6dff38f/src/is/string/json.js#L17)

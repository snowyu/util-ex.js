[util-ex](../README.md) / [Exports](../modules.md) / is/string/json

# Module: is/string/json

## Table of contents

### Namespaces

- [export&#x3D;](is_string_json.export_.md)

### Functions

- [export&#x3D;](is_string_json.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`v`, `almost`): `boolean`

Checks if a string is a valid JSON string.

**`Example`**

```ts
isJson('{"name": "John", "age": 30}'); // true
isJson('[1, 2, 3]'); // true
isJson('{"name": "John", "age": 30'); // false
isJson('This is not a JSON string.'); // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` | The string to be checked. |
| `almost` | `boolean` | If true, only checks if the string is almost JSON-like. Defaults to false. |

#### Returns

`boolean`

- Returns true if the string is valid JSON, false otherwise.

#### Defined in

[src/is/string/json.js:17](https://github.com/snowyu/util-ex.js/blob/0666556/src/is/string/json.js#L17)

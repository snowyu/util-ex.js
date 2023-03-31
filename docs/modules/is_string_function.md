[util-ex](../README.md) / [Exports](../modules.md) / is/string/function

# Module: is/string/function

## Table of contents

### Namespaces

- [export&#x3D;](is_string_function.export_.md)

### Functions

- [export&#x3D;](is_string_function.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aFuncString`): `boolean`

Determines if a string represents a valid JavaScript function.

**`Example`**

```ts
isFunctionStr('function add(x, y) { return x + y; }') // true
isFunctionStr('const x = 5;') // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aFuncString` | `string` | The string to test. |

#### Returns

`boolean`

- True if the string represents a valid function, false otherwise.

#### Defined in

[src/is/string/function.js:9](https://github.com/snowyu/util-ex.js/blob/10dfb41/src/is/string/function.js#L9)

[util-ex](../README.md) / [Exports](../modules.md) / is/string/function

# Module: is/string/function

## Table of contents

### References

- [default](is_string_function.md#default)

### Functions

- [isFunctionStr](is_string_function.md#isfunctionstr)

## References

### default

Renames and re-exports [isFunctionStr](is_string_function.md#isfunctionstr)

## Functions

### isFunctionStr

▸ **isFunctionStr**(`aFuncString`): `boolean`

Determines if a string represents a valid JavaScript function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aFuncString` | `string` | The string to test. |

#### Returns

`boolean`

- True if the string represents a valid function, false otherwise.

**`Example`**

```ts
isFunctionStr('function add(x, y) { return x + y; }') // true
isFunctionStr('const x = 5;') // false
```

#### Defined in

[src/is/string/function.js:9](https://github.com/snowyu/util-ex.js/blob/8694781/src/is/string/function.js#L9)

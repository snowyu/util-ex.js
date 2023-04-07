[util-ex](../README.md) / [Exports](../modules.md) / is/string/float

# Module: is/string/float

## Table of contents

### References

- [default](is_string_float.md#default)

### Functions

- [isFloatStr](is_string_float.md#isfloatstr)

## References

### default

Renames and re-exports [isFloatStr](is_string_float.md#isfloatstr)

## Functions

### isFloatStr

▸ **isFloatStr**(`str`): `boolean`

Checks if a string represents a valid floating point number.

**`Example`**

```ts
isFloatStr('3.14'); // returns true
isFloatStr('-0.5'); // returns true
isFloatStr('2.718e0'); // returns true
isFloatStr('2.718e-2'); // returns true
isFloatStr('abc'); // returns false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to test. |

#### Returns

`boolean`

`true` if the string represents a valid floating point number, `false` otherwise.

#### Defined in

[is/string/float.js:14](https://github.com/snowyu/util-ex.js/blob/b4dc093/src/is/string/float.js#L14)

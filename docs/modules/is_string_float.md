[util-ex](../README.md) / [Exports](../modules.md) / is/string/float

# Module: is/string/float

## Table of contents

### Namespaces

- [export=](is_string_float.export_.md)

### Functions

- [export=](is_string_float.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`str`): `boolean`

Checks if a string represents a valid floating point number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to test. |

#### Returns

`boolean`

`true` if the string represents a valid floating point number, `false` otherwise.

**`Example`**

```ts
isFloatStr('3.14'); // returns true
isFloatStr('-0.5'); // returns true
isFloatStr('2.718e0'); // returns true
isFloatStr('2.718e-2'); // returns true
isFloatStr('abc'); // returns false
```

#### Defined in

[src/is/string/float.js:14](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/is/string/float.js#L14)

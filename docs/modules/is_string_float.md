[util-ex](../README.md) / [Exports](../modules.md) / is/string/float

# Module: is/string/float

## Table of contents

### Namespaces

- [export&#x3D;](is_string_float.export_.md)

### Functions

- [export&#x3D;](is_string_float.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`str`): `boolean`

Checks if a string represents a valid floating point number.

**`Example`**

```ts
isFloat('3.14'); // returns true
isFloat('-0.5'); // returns true
isFloat('2.718e0'); // returns true
isFloat('2.718e-2'); // returns true
isFloat('abc'); // returns false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to test. |

#### Returns

`boolean`

`true` if the string represents a valid floating point number, `false` otherwise.

#### Defined in

[src/is/string/float.js:14](https://github.com/snowyu/util-ex.js/blob/f71e464/src/is/string/float.js#L14)

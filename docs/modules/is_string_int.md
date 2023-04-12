[util-ex](../README.md) / [Exports](../modules.md) / is/string/int

# Module: is/string/int

## Table of contents

### Namespaces

- [export&#x3D;](is_string_int.export_.md)

### Functions

- [export&#x3D;](is_string_int.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`str`): `boolean`

Checks if a given string represents an integer number.

**`Example`**

```ts
isIntStr('42'); // true
  isIntStr('0'); // true
  isIntStr('-123'); // true
  isIntStr('12.3'); // false
  isIntStr('1e3'); // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to check. |

#### Returns

`boolean`

Whether or not the string represents an integer.

#### Defined in

[src/is/string/int.js:14](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/is/string/int.js#L14)

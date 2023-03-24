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
isInt('42'); // true
  isInt('0'); // true
  isInt('-123'); // true
  isInt('12.3'); // false
  isInt('1e3'); // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to check. |

#### Returns

`boolean`

Whether or not the string represents an integer.

#### Defined in

[src/is/string/int.js:14](https://github.com/snowyu/util-ex.js/blob/f71e464/src/is/string/int.js#L14)

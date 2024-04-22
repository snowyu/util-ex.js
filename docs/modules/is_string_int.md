[util-ex](../README.md) / [Exports](../modules.md) / is/string/int

# Module: is/string/int

## Table of contents

### References

- [default](is_string_int.md#default)

### Functions

- [isIntStr](is_string_int.md#isintstr)

## References

### default

Renames and re-exports [isIntStr](is_string_int.md#isintstr)

## Functions

### isIntStr

▸ **isIntStr**(`str`): `boolean`

Checks if a given string represents an integer number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to check. |

#### Returns

`boolean`

Whether or not the string represents an integer.

**`Example`**

```ts
isIntStr('42'); // true
  isIntStr('0'); // true
  isIntStr('-123'); // true
  isIntStr('12.3'); // false
  isIntStr('1e3'); // false
```

#### Defined in

[src/is/string/int.js:14](https://github.com/snowyu/util-ex.js/blob/efca373/src/is/string/int.js#L14)

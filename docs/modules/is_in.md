[util-ex](../README.md) / [Exports](../modules.md) / is/in

# Module: is/in

## Table of contents

### Namespaces

- [export=](is_in.export_.md)

### Functions

- [export=](is_in.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`str`, `list`, `caseSensitive`): `boolean`

Checks if a string matches any item in a list of strings or regular expressions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to match against the list. |
| `list` | (`string` \| `RegExp`)[] | The list of strings or regular expressions to match against. |
| `caseSensitive` | `boolean` | Whether the comparison should be case sensitive. Default is false. |

#### Returns

`boolean`

- True if there is a match, false otherwise.

**`Example`**

```ts
const list = ['apple', 'banana', 'orange'];
const str = 'Banana';
console.log(isInList(str, list)); // true (no caseSensitive)
console.log(isInList(str, list, true)); // false (caseSensitive)
```

#### Defined in

[src/is/in.js:16](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/is/in.js#L16)

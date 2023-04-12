[util-ex](../README.md) / [Exports](../modules.md) / is/in

# Module: is/in

## Table of contents

### Namespaces

- [export&#x3D;](is_in.export_.md)

### Functions

- [export&#x3D;](is_in.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`str`, `list`, `caseSensitive`): `boolean`

Checks if a string matches any item in a list of strings or regular expressions.

**`Example`**

```ts
const list = ['apple', 'banana', 'orange'];
const str = 'Banana';
console.log(isInList(str, list)); // true (no caseSensitive)
console.log(isInList(str, list, true)); // false (caseSensitive)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to match against the list. |
| `list` | (`string` \| `RegExp`)[] | The list of strings or regular expressions to match against. |
| `caseSensitive` | `boolean` | Whether the comparison should be case sensitive. Default is false. |

#### Returns

`boolean`

- True if there is a match, false otherwise.

#### Defined in

[src/is/in.js:16](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/is/in.js#L16)

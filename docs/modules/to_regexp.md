[util-ex](../README.md) / [Exports](../modules.md) / to-regexp

# Module: to-regexp

## Table of contents

### References

- [default](to_regexp.md#default)

### Functions

- [toRegExp](to_regexp.md#toregexp)

## References

### default

Renames and re-exports [toRegExp](to_regexp.md#toregexp)

## Functions

### toRegExp

▸ **toRegExp**(`value`): `RegExp`

create or clone RegExp

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `RegExp` | create a new RegExp from. |

#### Returns

`RegExp`

- new RegExp instance.

**`Example`**

```ts
toRegExp('/[a-z]/g') // new RegExp(/[a-z]/g)
toRegExp(/[a-z]/g)  // new RegExp(/[a-z]/g)
```

#### Defined in

[src/to-regexp.js:11](https://github.com/snowyu/util-ex.js/blob/efca373/src/to-regexp.js#L11)

[util-ex](../README.md) / [Exports](../modules.md) / is/string/regexp

# Module: is/string/regexp

## Table of contents

### References

- [default](is_string_regexp.md#default)

### Functions

- [isRegExpStr](is_string_regexp.md#isregexpstr)

## References

### default

Renames and re-exports [isRegExpStr](is_string_regexp.md#isregexpstr)

## Functions

### isRegExpStr

▸ **isRegExpStr**(`value`): `boolean`

Determines if a string represents a valid JavaScript RegExp.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

- True if the string represents a valid EegExp, false otherwise.

**`Example`**

```ts
isRegExpStr('/[a-z]/g') // true
isRegExpStr('/not a regexp') // false
```

#### Defined in

[src/is/string/regexp.js:9](https://github.com/snowyu/util-ex.js/blob/c071696/src/is/string/regexp.js#L9)

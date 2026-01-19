[**util-ex**](../../../README.md)

***

[util-ex](../../../modules.md) / [is/in](../README.md) / isInList

# Function: isInList()

> **isInList**(`str`, `list`, `caseSensitive`): `boolean`

Defined in: [src/is/in.js:16](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/is/in.js#L16)

Checks if a string matches any item in a list of strings or regular expressions.

## Parameters

### str

`string`

The string to match against the list.

### list

(`string` \| `RegExp`)[]

The list of strings or regular expressions to match against.

### caseSensitive

`boolean`

Whether the comparison should be case sensitive. Default is false.

## Returns

`boolean`

- True if there is a match, false otherwise.

## Example

```ts
const list = ['apple', 'banana', 'orange'];
const str = 'Banana';
console.log(isInList(str, list)); // true (no caseSensitive)
console.log(isInList(str, list, true)); // false (caseSensitive)
```

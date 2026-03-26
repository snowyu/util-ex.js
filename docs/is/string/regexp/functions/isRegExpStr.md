[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/string/regexp](../README.md) / isRegExpStr

# Function: isRegExpStr()

> **isRegExpStr**(`value`): `boolean`

Defined in: [src/is/string/regexp.js:9](https://github.com/snowyu/util-ex.js/blob/a9faceb38a53274e47611c83bca6100fd96ce644/src/is/string/regexp.js#L9)

Determines if a string represents a valid JavaScript RegExp.

## Parameters

### value

`any`

## Returns

`boolean`

- True if the string represents a valid EegExp, false otherwise.

## Example

```ts
isRegExpStr('/[a-z]/g') // true
isRegExpStr('/not a regexp') // false
```

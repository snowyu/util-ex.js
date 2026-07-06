[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [index](../README.md) / isEmptyFunction

# Function: isEmptyFunction()

> **isEmptyFunction**(`aFunc`): `boolean`

Defined in: inherits-ex.js/lib/isEmptyFunction.d.ts:10

Checks whether a given function is empty or not.

## Parameters

### aFunc

`Function`

The function to be checked.

## Returns

`boolean`

- True if the function is empty, false otherwise.

## Example

```ts
isEmptyFunction(Array.prototype.push); // -> false
isEmptyFunction(()=>{}); // -> true
```

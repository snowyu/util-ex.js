[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/type/arguments](../README.md) / isArguments

# Function: isArguments()

> **isArguments**(`value`): `boolean`

Defined in: [util-ex.js/src/is/type/arguments.js:16](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/is/type/arguments.js#L16)

Checks if a value is an `arguments` object.

## Parameters

### value

`any`

The value to check.

## Returns

`boolean`

Returns `true` if `value` is an `arguments` object, else `false`.

## Example

```js
function myFunction() {
  return isArguments(arguments);
}
console.log(myFunction()); // true, since the `arguments` object is an instance of `Arguments`
isArguments([1, 2, 3]); // => false
```

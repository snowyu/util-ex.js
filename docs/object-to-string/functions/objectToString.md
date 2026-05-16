[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [object-to-string](../README.md) / objectToString

# Function: objectToString()

> **objectToString**(`o`): `string`

Defined in: [src/object-to-string.js:17](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/object-to-string.js#L17)

The objectToString function returns a string representation of an object's type using the built-in Object.prototype.toString method.

The method call Object.prototype.toString.call(o) will return a string in the format [object Type], where Type represents the object's type.

For example, if o is an array, the function will return the string [object Array]. If o is a date object, it will return the string [object Date]. This can be useful for determining the type of an object, especially when dealing with values that may be of different types.

## Parameters

### o

`any`

The object to get its type as a string.

## Returns

`string`

- The type of the object as a string.

## Example

```ts
objectToString([]); // returns '[object Array]'
objectToString({}); // returns '[object Object]'
```

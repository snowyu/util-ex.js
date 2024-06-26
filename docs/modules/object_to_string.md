[util-ex](../README.md) / [Exports](../modules.md) / object-to-string

# Module: object-to-string

## Table of contents

### Namespaces

- [export=](object_to_string.export_.md)

### Functions

- [export=](object_to_string.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`o`): `string`

The objectToString function returns a string representation of an object's type using the built-in Object.prototype.toString method.

The method call Object.prototype.toString.call(o) will return a string in the format [object Type], where Type represents the object's type.

For example, if o is an array, the function will return the string [object Array]. If o is a date object, it will return the string [object Date]. This can be useful for determining the type of an object, especially when dealing with values that may be of different types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to get its type as a string. |

#### Returns

`string`

- The type of the object as a string.

**`Example`**

```ts
objectToString([]); // returns '[object Array]'
objectToString({}); // returns '[object Object]'
```

#### Defined in

[src/object-to-string.js:17](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/object-to-string.js#L17)

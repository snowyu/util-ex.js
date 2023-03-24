[util-ex](../README.md) / [Exports](../modules.md) / is/type/arguments

# Module: is/type/arguments

## Table of contents

### Namespaces

- [export&#x3D;](is_type_arguments.export_.md)

### Functions

- [export&#x3D;](is_type_arguments.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`value`): `boolean`

Checks if a value is an `arguments` object.

**`Example`**

```js
function myFunction() {
  return isArguments(arguments);
}
console.log(myFunction()); // true, since the `arguments` object is an instance of `Arguments`
isArguments([1, 2, 3]); // => false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is an `arguments` object, else `false`.

#### Defined in

[src/is/type/arguments.js:16](https://github.com/snowyu/util-ex.js/blob/f71e464/src/is/type/arguments.js#L16)

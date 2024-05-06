[util-ex](../README.md) / [Exports](../modules.md) / is/type/arguments

# Module: is/type/arguments

## Table of contents

### References

- [default](is_type_arguments.md#default)

### Functions

- [isArguments](is_type_arguments.md#isarguments)

## References

### default

Renames and re-exports [isArguments](is_type_arguments.md#isarguments)

## Functions

### isArguments

▸ **isArguments**(`value`): `boolean`

Checks if a value is an `arguments` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is an `arguments` object, else `false`.

**`Example`**

```js
function myFunction() {
  return isArguments(arguments);
}
console.log(myFunction()); // true, since the `arguments` object is an instance of `Arguments`
isArguments([1, 2, 3]); // => false
```

#### Defined in

[src/is/type/arguments.js:16](https://github.com/snowyu/util-ex.js/blob/8694781/src/is/type/arguments.js#L16)

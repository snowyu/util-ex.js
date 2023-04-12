[util-ex](../README.md) / [Exports](../modules.md) / \_create-function

# Module: \_create-function

## Table of contents

### Namespaces

- [export&#x3D;](create_function.export_.md)

### Functions

- [export&#x3D;](create_function.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`body`, `scope?`, `values`, `...args`): `Function`

Create a function using the given body and scope.

**`Example`**

```ts
var fn = _createFunction('function yourFuncName(arg1, arg2){log(arg1+arg2);}', {log:console.log});
  fn(2,3); //print 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | The body of the function to create. |
| `scope?` | `any` | The scope of the function, as an object with key/value pairs or an array of strings. |
| `values` | `any`[] | The values to use for the scope, if scope is an array. |
| `...args` | `any` | - |

#### Returns

`Function`

- The created function.

#### Defined in

[src/_create-function.js:30](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/_create-function.js#L30)

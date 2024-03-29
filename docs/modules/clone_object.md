[util-ex](../README.md) / [Exports](../modules.md) / clone-object

# Module: clone-object

## Table of contents

### References

- [default](clone_object.md#default)

### Functions

- [cloneObject](clone_object.md#cloneobject)

## References

### default

Renames and re-exports [cloneObject](clone_object.md#cloneobject)

## Functions

### cloneObject

▸ **cloneObject**(`aObject`, `tryCloneFn?`): `any`

Clones an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object to be cloned. |
| `tryCloneFn?` | `boolean` \| `Function` | A boolean indicating whether or not to try to clone the object using a '`clone`' function, or a function that can be used to clone the object. If set to `false`, the object will not be cloned using the '`clone`' function, even if it exists. |

#### Returns

`any`

The cloned object.

**`Example`**

```ts
// Clone a simple object.
const myObject = { foo: 'bar' };
const clonedObject = cloneObject(myObject);
```

**`Example`**

```ts
// Clone an object using a custom clone function.
const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
const clonedObject = cloneObject(myObject);
```

**`Example`**

```ts
// Clone an object without trying to use a custom clone function.
const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
const clonedObject = cloneObject(myObject, false);
```

#### Defined in

[src/clone-object.js:28](https://github.com/snowyu/util-ex.js/blob/6dff38f/src/clone-object.js#L28)

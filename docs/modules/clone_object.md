[util-ex](../README.md) / [Exports](../modules.md) / clone-object

# Module: clone-object

## Table of contents

### Functions

- [export&#x3D;](clone_object.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aObject`, `tryCloneFn?`): `any`

Clones an object.

**`Example`**

```ts
// Clone a simple object.
var myObject = { foo: 'bar' };
var clonedObject = cloneObject(myObject);
```

**`Example`**

```ts
// Clone an object using a custom clone function.
var myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
var clonedObject = cloneObject(myObject);
```

**`Example`**

```ts
// Clone an object without trying to use a custom clone function.
var myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
var clonedObject = cloneObject(myObject, false);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object to be cloned. |
| `tryCloneFn?` | `boolean` \| `Function` | A boolean indicating whether or not to try to clone the object using a '`clone`' function, or a function that can be used to clone the object. If set to `false`, the object will not be cloned using the '`clone`' function, even if it exists. |

#### Returns

`any`

The cloned object.

#### Defined in

[src/clone-object.js:29](https://github.com/snowyu/util-ex.js/blob/f71e464/src/clone-object.js#L29)

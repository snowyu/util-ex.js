[util-ex](../README.md) / [Exports](../modules.md) / clone-properties-to

# Module: clone-properties-to

## Table of contents

### Functions

- [export=](clone_properties_to.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`dest`, `src`): `any`

Clone all own properties of a source object to a destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object to clone the properties to. |
| `src` | `any` | The source object to clone the properties from. |

#### Returns

`any`

- The destination object with cloned properties from the source object.

**`Summary`**

Clones own properties from source object to destination object.

**`Description`**

This function clones all own properties of a source object to a destination object.

**`Example`**

```ts
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3 };

clonePropertiesTo(obj2, obj1); // obj2 = { a: 1, b: 2, c: 3 }
```

#### Defined in

[src/clone-properties-to.js:25](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/clone-properties-to.js#L25)

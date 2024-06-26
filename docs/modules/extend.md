[util-ex](../README.md) / [Exports](../modules.md) / extend

# Module: extend

## Table of contents

### Namespaces

- [export=](extend.export_.md)

### Type Aliases

- [FilterFn](extend.md#filterfn)

### Functions

- [export=](extend.md#export=-1)

## Type Aliases

### FilterFn

Ƭ **FilterFn**\<\>: (`key`: `any`, `value`: `any`) => `boolean`

#### Type declaration

▸ (`key`, `value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

##### Returns

`boolean`

#### Defined in

[src/extend.js:6](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/extend.js#L6)

## Functions

### export&#x3D;

▸ **export=**(`dest`, `sources`, `filter`): `any`

Extends an object with properties from one or more source objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The object to be extended. |
| `sources` | `any` | The source object(s) from which to extend the `dest` object. |
| `filter` | `Function` | An optional function to filter which properties to extend. It should take two arguments (`key` and `value`) and return `true` if the property should be extended, `false` otherwise. |

#### Returns

`any`

- The extended `dest` object.

**`Example`**

```ts
var dest = { a: 1 };
var src1 = { b: 2 };
var src2 = { c: 3 };
extend(dest, src1, src2);
// dest => { a: 1, b: 2, c: 3 }
```

**`Example`**

```ts
var dest = { a: 1 };
var src1 = { b: 2 };
var src2 = { c: 3 };
var filter = function(key, value) {
  return key !== 'b';
};
extend(dest, [src1, src2], filter);
// dest => { a: 1, c: 3 }
```

#### Defined in

[src/extend.js:35](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/extend.js#L35)

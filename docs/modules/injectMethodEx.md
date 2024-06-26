[util-ex](../README.md) / [Exports](../modules.md) / injectMethodEx

# Module: injectMethodEx

## Table of contents

### Functions

- [export=](injectMethodEx.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`aObject`, `aMethodName`, `aNewMethod`): `any`

Inject method to an object.

**Note**: The original method will be passed into the new method as first argument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | the target object to inject |
| `aMethodName` | `string` | the target method to inject |
| `aNewMethod` | `Function` | the new method to be injected into the aObject. |

#### Returns

`any`

**`Example`**

```ts
class A {
  method() {console.log('A', arguments, this)}
}

injectMethodEx(A.prototype, 'method', function(oldMethod, ...args) {
  console.log('B', args, this)
  oldMethod.apply(this, args)
})

const a = new A
a.x = 1
a.method(12, 3)
```

#### Defined in

[src/injectMethodEx.js:25](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/injectMethodEx.js#L25)

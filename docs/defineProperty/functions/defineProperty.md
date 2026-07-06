[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [defineProperty](../README.md) / defineProperty

# Function: defineProperty()

> **defineProperty**(`object`, `key`, `value`, `aOptions?`): `any`

Defined in: inherits-ex.js/lib/defineProperty.d.ts:45

Define the object's property and value. The property is not enumerable
by default.

## Parameters

### object

`object`

The object to define the property on.

### key

`string`

the property name.

### value

`any`

the property value.

### aOptions?

`any`

the property descriptor.

## Returns

`any`

The object that was passed to the function, with the specified property added or modified.

## Examples

```ts
// Define a non-enumerable data property.
defineProperty(myObject, "myProperty", 42);
```

```ts
// Define an enumerable accessor property.
defineProperty(myObject, "myAccessorProperty", undefined, {
  enumerable: true,
  get: function() {
    return this._myValue;
  },
  set: function(newValue) {
    this._myValue = newValue;
  }
});
```

```ts
// Define a non-enumerable, read-only data property.
defineProperty(myObject, "myReadOnlyProperty", "hello", {
  writable: false
});
```

```ts
// Define an enumerable, configurable data property.
defineProperty(myObject, "myConfigurableProperty", 42, {
  enumerable: true,
  configurable: true
});
```

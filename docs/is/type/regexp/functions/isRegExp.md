[**util-ex**](../../../../README.md)

***

[util-ex](../../../../modules.md) / [is/type/regexp](../README.md) / isRegExp

# Function: isRegExp()

> **isRegExp**(`v`): `boolean`

Defined in: [src/is/type/regexp.js:32](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/is/type/regexp.js#L32)

Checks if the given value is a RegExp instance
This function specifically determines whether the provided value is an actual RegExp object instance,
not just any object that might resemble a regular expression

## Parameters

### v

`any`

The value to check

## Returns

`boolean`

Returns true if v is a RegExp instance, false otherwise

## Examples

```ts
// returns true
isRegExp(/abc/);
```

```ts
// returns true
isRegExp(new RegExp('abc'));
```

```ts
// returns false
isRegExp('abc');
```

```ts
// returns false
isRegExp({});
```

```ts
// returns false
isRegExp(null);
```

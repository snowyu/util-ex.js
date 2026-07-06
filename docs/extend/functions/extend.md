[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [\_extend](../README.md) / \_extend

# Function: \_extend()

> **\_extend**(`target`, ...`args`): `any`

Defined in: inherits-ex.js/lib/\_extend.d.ts:14

Copies properties from one or more source objects to a target object.

The extend function takes an object target as its first argument, and any
number of additional objects as subsequent arguments. It copies all properties
from each source object to the target object, and returns the modified target object.

Only copies properties that are directly on the source object (not inherited).

## Parameters

### target

`any`

The target object to copy properties to.

### args

...`any`[]

## Returns

`any`

The modified target object.

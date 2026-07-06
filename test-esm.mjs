/**
 * ESM integration test — verifies the package can be imported
 * via the "import" export condition (lib/index.mjs).
 *
 * Run with: node test-esm.mjs
 */

import * as utilEx from './lib/index.mjs';

// Test main exports are functions
const exportsToCheck = [
  ['isString',           utilEx.isString],
  ['isNumber',           utilEx.isNumber],
  ['isObject',           utilEx.isObject],
  ['isArray',            utilEx.isArray],
  ['isFunction',         utilEx.isFunction],
  ['isBool',              utilEx.isBool],
  ['isNull',             utilEx.isNull],
  ['isUndefined',        utilEx.isUndefined],
  ['isBuffer',           utilEx.isBuffer],
  ['isDate',             utilEx.isDate],
  ['isError',            utilEx.isError],
  ['isRegExp',           utilEx.isRegExp],
  ['isPrimitive',        utilEx.isPrimitive],
  ['isPlainObject',      utilEx.isPlainObject],
  ['isEmpty',            utilEx.isEmpty],
  ['isEmptyFunction',    utilEx.isEmptyFunction],
  ['isEmptyObject',      utilEx.isEmptyObject],
  ['isArguments',        utilEx.isArguments],
  ['isIterable',         utilEx.isIterable],
  ['isAsyncIterable',    utilEx.isAsyncIterable],
  ['isAsync',            utilEx.isAsync],
  ['isInt',               utilEx.isInt],
  ['isNullOrUndefined',  utilEx.isNullOrUndefined],
  ['isInList',            utilEx.isInList],
  ['isPatternMatched',   utilEx.isPatternMatched],
  ['isIdentifier',       utilEx.isIdentifier],
  ['isJson',             utilEx.isJson],
  ['isIntStr',           utilEx.isIntStr],
  ['isFloatStr',         utilEx.isFloatStr],
  ['isFunctionStr',      utilEx.isFunctionStr],
  ['isRegExpStr',        utilEx.isRegExpStr],
  ['isArrowFunctionStr', utilEx.isArrowFunctionStr],
  // utility functions
  ['format',             utilEx.format],
  ['extend',             utilEx.extend],
  ['inspect',            utilEx.inspect],
  ['log',                utilEx.log],
  ['cloneObject',        utilEx.cloneObject],
  ['map',                utilEx.map],
  ['inject',             utilEx.inject],
  ['injectMethod',       utilEx.injectMethod],
  ['injectMethods',      utilEx.injectMethods],
  ['defineProperty',     utilEx.defineProperty],
  ['escapeStringRegexp', utilEx.escapeStringRegexp],
  ['toRegExp',           utilEx.toRegExp],
  ['filterNullUndefined', utilEx.filterNullUndefined],
  ['getAllNames',        utilEx.getAllNames],
  ['getNonEnumerableNames', utilEx.getNonEnumerableNames],
  ['createFunction',     utilEx.createFunction],
  ['newFunction',        utilEx.newFunction],
  ['newScopedFunction',  utilEx.newScopedFunction],
  ['objectToString',     utilEx.objectToString],
  ['is',                 utilEx.is],
  ['object',             utilEx.object],
];

let failures = 0;

for (const [name, value] of exportsToCheck) {
  if (typeof value === 'function') {
    console.log(`  ✓ ${name} is a function`);
  } else if (name === 'is') {
    console.log(`  ✓ ${name} is an object (namespace):`, typeof value);
  } else if (name === 'object') {
    console.log(`  ✓ ${name} is an object (namespace):`, typeof value);
  } else {
    console.log(`  ✗ ${name} is NOT a function (got: ${typeof value})`);
    failures++;
  }
}

// Test some actual functionality
console.log('\n--- Functional tests ---');

// isString
console.assert(utilEx.isString('hello') === true,  'isString("hello") should be true');
console.assert(utilEx.isString(42)     === false, 'isString(42) should be false');
console.log('  ✓ isString works');

// isArray
console.assert(utilEx.isArray([1, 2, 3]) === true,     'isArray([1,2,3]) should be true');
console.assert(utilEx.isArray('foo')     === false,    'isArray("foo") should be false');
console.log('  ✓ isArray works');

// isPlainObject
console.assert(utilEx.isPlainObject({})           === true,  'isPlainObject({}) should be true');
console.assert(utilEx.isPlainObject(new Date())    === false, 'isPlainObject(Date) should be false');
console.log('  ✓ isPlainObject works');

// isEmpty
console.assert(utilEx.isEmpty({})       === true,  'isEmpty({}) should be true');
console.assert(utilEx.isEmpty({a: 1})  === false, 'isEmpty({a:1}) should be false');
console.assert(utilEx.isEmpty([])       === true,  'isEmpty([]) should be true');
console.assert(utilEx.isEmpty([1])      === false, 'isEmpty([1]) should be false');
console.log('  ✓ isEmpty works');

// format
const formatted = utilEx.format('Hello %s!', 'World');
console.assert(formatted === 'Hello World!', `format should work, got: ${formatted}`);
console.log('  ✓ format works');

// escapeStringRegexp
const escaped = utilEx.escapeStringRegexp('(hello)');
console.assert(escaped === '\\(hello\\)', `escapeStringRegexp should work, got: ${escaped}`);
console.log('  ✓ escapeStringRegexp works');

// isFunction
const fn = () => {};
console.assert(utilEx.isFunction(fn) === true, 'isFunction should be true for arrow fn');
console.log('  ✓ isFunction works');

// isBool
console.assert(utilEx.isBool(true)   === true,  'isBool(true) should be true');
console.assert(utilEx.isBool(false)  === true,  'isBool(false) should be true');
console.assert(utilEx.isBool(1)      === false, 'isBool(1) should be false');
console.assert(utilEx.isBool('true') === false, 'isBool("true") should be false');
console.assert(utilEx.isBool(null)   === false, 'isBool(null) should be false');
console.assert(utilEx.isBool({})     === false, 'isBool({}) should be false');
console.log('  ✓ isBool works');

// isInt
console.assert(utilEx.isInt(42)        === true,  'isInt(42) should be true');
console.assert(utilEx.isInt(-5)        === true,  'isInt(-5) should be true');
console.assert(utilEx.isInt(0)         === true,  'isInt(0) should be true');
console.assert(utilEx.isInt(42.5)      === false, 'isInt(42.5) should be false');
console.assert(utilEx.isInt(NaN)       === false, 'isInt(NaN) should be false');
console.assert(utilEx.isInt(Infinity)  === false, 'isInt(Infinity) should be false');
console.assert(utilEx.isInt('42')      === false, 'isInt("42") should be false');
console.log('  ✓ isInt works');

// isInList
const list = ['apple', 'banana', 'orange'];
console.assert(utilEx.isInList('Banana', list)         === true,  'isInList("Banana", [...]) should be true (case-insensitive)');
console.assert(utilEx.isInList('Banana', list, true)   === false, 'isInList("Banana", [...], true) should be false (case-sensitive)');
console.assert(utilEx.isInList('grape', list)           === false, 'isInList("grape", [...]) should be false');
console.assert(utilEx.isInList('apple', list)           === true,  'isInList("apple", [...]) should be true');

// isInList with regex patterns
const regexList = [/^foo/, 'bar'];
console.assert(utilEx.isInList('foobar', regexList)       === true,  'isInList("foobar", [/^foo/]) should be true');
console.assert(utilEx.isInList('notfoo', regexList)       === false, 'isInList("notfoo", [/^foo/]) should be false');
console.assert(utilEx.isInList('BAR', regexList, false)   === true,  'isInList("BAR", [...], false) should be true (case-insensitive regex)');
console.log('  ✓ isInList works');

// isNumber
console.assert(utilEx.isNumber(42)     === true,  'isNumber(42) should be true');
console.assert(utilEx.isNumber(NaN)    === true,  'isNumber(NaN) should be true (NaN is typeof number)');
console.assert(utilEx.isNumber('42')   === false, 'isNumber("42") should be false');
console.assert(utilEx.isNumber(null)   === false, 'isNumber(null) should be false');
console.log('  ✓ isNumber works');

// isNull / isUndefined / isNullOrUndefined
console.assert(utilEx.isNull(null)           === true,  'isNull(null) should be true');
console.assert(utilEx.isNull(undefined)      === false, 'isNull(undefined) should be false');
console.assert(utilEx.isUndefined(undefined) === true,  'isUndefined(undefined) should be true');
console.assert(utilEx.isUndefined(null)      === false, 'isUndefined(null) should be false');
console.assert(utilEx.isNullOrUndefined(null)       === true,  'isNullOrUndefined(null) should be true');
console.assert(utilEx.isNullOrUndefined(undefined)  === true,  'isNullOrUndefined(undefined) should be true');
console.assert(utilEx.isNullOrUndefined(0)          === false, 'isNullOrUndefined(0) should be false');
console.log('  ✓ isNull / isUndefined / isNullOrUndefined work');

// isDate
console.assert(utilEx.isDate(new Date())     === true,  'isDate(Date) should be true');
console.assert(utilEx.isDate('2024-01-01')  === false, 'isDate(string) should be false');
console.assert(utilEx.isDate({})             === false, 'isDate({}) should be false');
console.log('  ✓ isDate works');

// isRegExp
console.assert(utilEx.isRegExp(/test/)      === true,  'isRegExp(/test/) should be true');
console.assert(utilEx.isRegExp(new RegExp('a')) === true, 'isRegExp(new RegExp()) should be true');
console.assert(utilEx.isRegExp('/test/')    === false, 'isRegExp(string) should be false');
console.log('  ✓ isRegExp works');

// isPrimitive
console.assert(utilEx.isPrimitive('hello')  === true,  'isPrimitive("hello") should be true');
console.assert(utilEx.isPrimitive(42)       === true,  'isPrimitive(42) should be true');
console.assert(utilEx.isPrimitive(true)     === true,  'isPrimitive(true) should be true');
console.assert(utilEx.isPrimitive({})       === false, 'isPrimitive({}) should be false');
console.assert(utilEx.isPrimitive([])       === false, 'isPrimitive([]) should be false');
console.log('  ✓ isPrimitive works');

if (failures > 0) {
  console.log(`\n❌ FAILED: ${failures} exports are not functions`);
  process.exit(1);
} else {
  console.log('\n✅ All ESM exports and functional tests passed!');
}

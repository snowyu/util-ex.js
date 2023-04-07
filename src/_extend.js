import extend from "xtend/mutable.js";
/**
 * Copy properties from one or more source objects to a target object.
 *
 * @type {ExtendFn}
 *
 * @param {object} target - The target object to copy properties to.
 * @param {...object} sources - The source objects to copy properties from.
 * @returns {object} The modified target object.
 *
 * @example
 * // Example 1:
 * const targetObj = { a: 1 };
 * const sourceObj1 = { b: 2 };
 * const sourceObj2 = { c: 3 };
 *
 * const result = extend(targetObj, sourceObj1, sourceObj2);
 * // targetObj is now { a: 1, b: 2, c: 3 }
 * // result is also { a: 1, b: 2, c: 3 }
 *
 * @example
 * // Example 2:
 * const targetObj = { a: 1 };
 * const sourceObj = Object.create({ b: 2 });
 *
 * const result = extend(targetObj, sourceObj);
 * // targetObj is now { a: 1 }
 * // result is also { a: 1 }
 */
export const _extend = extend;
/**
 *
 * @type {ExtendFn}
 */
export default _extend;

/**
 * Copy properties from one or more source objects to a target object.
 *
 * @callback ExtendFn
 * @param {object} target - The target object to copy properties to.
 * @param {...object} sources - The source objects to copy properties from.
 * @returns {object} The modified target object.
 *
 */


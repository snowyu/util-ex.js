import getPrototypeOf from 'inherits-ex/lib/getPrototypeOf';
import createObject from 'inherits-ex/lib/createObject';
import clonePropertiesTo from './clone-properties-to.js';
import isFunction from './is/type/function.js';

/**
 * Clones an object.
 *
 * @param {object} aObject - The object to be cloned.
 * @param {boolean|function} [tryCloneFn=true] - A boolean indicating whether or not to try to clone the object using a '`clone`' function, or a function that can be used to clone the object. If set to `false`, the object will not be cloned using the '`clone`' function, even if it exists.
 * @returns {object} The cloned object.
 *
 * @example
* // Clone a simple object.
* const myObject = { foo: 'bar' };
* const clonedObject = cloneObject(myObject);
*
* @example
* // Clone an object using a custom clone function.
* const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
* const clonedObject = cloneObject(myObject);
*
* @example
* // Clone an object without trying to use a custom clone function.
* const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
* const clonedObject = cloneObject(myObject, false);
*/
export function cloneObject(aObject, tryCloneFn) {
  let result;
  if (tryCloneFn !== false && isFunction(aObject.clone)) {
    result = aObject.clone();
  } else {
    const proto = getPrototypeOf(aObject);
    const ctor = proto.hasOwnProperty('Class') ? proto.Class : aObject.constructor;
    result = createObject(ctor);
    clonePropertiesTo(result, aObject);
  }
  return result;
};

export default cloneObject;

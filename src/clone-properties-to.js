import defineProperty from "./defineProperty";

const getAllOwnKeys = Object.getOwnPropertyNames;
const getDescriptor = Object.getOwnPropertyDescriptor;

/**
 * Clone all own properties of a source object to a destination object.
 *
 * @summary Clones own properties from source object to destination object.
 *
 * @description
 * This function clones all own properties of a source object to a destination object.
 *
 * @param {Object} dest - The destination object to clone the properties to.
 * @param {Object} src - The source object to clone the properties from.
 *
 * @returns {Object} - The destination object with cloned properties from the source object.
 *
 * @example
 * var obj1 = { a: 1, b: 2 };
 * var obj2 = { c: 3 };
 *
 * clonePropertiesTo(obj2, obj1); // obj2 = { a: 1, b: 2, c: 3 }
 */
export function clonePropertiesTo(dest, src) {
  const ref = getAllOwnKeys(src);
  for (let i = 0; i < ref.length; i++) {
    const k = ref[i];
    const attr = getDescriptor(src, k);
    defineProperty(dest, k, undefined, attr);
  }
  return dest;
};

export default clonePropertiesTo;

/**
 * Checks whether an object is async iterable.
 * @param {any} obj The object to be checked.
 * @returns {obj is AsyncIterable<any>} Returns true if the object is async iterable; otherwise, returns false.
 */
export function isAsyncIterable(obj) {
  return !!obj && typeof obj[Symbol.asyncIterator] === 'function';
}

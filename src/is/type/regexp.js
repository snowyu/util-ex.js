import objectToString from "../../object-to-string";
import isObject from "./object";

const regexpClass = '[object RegExp]';
export function isRegExp(v) {
  return isObject(v) && objectToString(v) === regexpClass;
};
export default isRegExp;

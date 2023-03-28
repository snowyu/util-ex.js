import objectToString from "../../object-to-string";
import isObject from "./object";

export function isError(e) {
  return isObject(e) && objectToString(e) === '[object Error]';
};
export default isError;

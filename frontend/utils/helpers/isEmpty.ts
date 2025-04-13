/**
 * The line `export default function isEmpty(value: null | unknown[] | { [key: string]: any }) {` is defining a function
 * named `isEmpty` that takes in a parameter named `value`. The `value` parameter can be of type `null`, an array of
 * unknown values (`unknown[]`), or an object with string keys and any values (`{ [key: string]: any }`).
 *
 * @function
 * @name isEmpty
 * @kind function
 * @param {unknown[] | { [key: string]: any } | null} value
 * @returns {boolean}
 * @exports
 */

export default function isEmpty<T>(value: null | undefined | unknown[] | { [key: string]: never } | T): boolean {
  if (value === undefined || value === null) return true;

  if (Array.isArray(value) && value.length === 0) return true;

  return typeof value === 'object' && Object.keys(value).length === 0;
}

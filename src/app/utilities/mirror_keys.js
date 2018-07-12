

/**
 * mirrorKeys =>
 * Creates an object whose values mirror its keys.
 * 
 * EXAMPLE:
 * mirrorKeys(['A', 'B']);
 * Will return an object like this => {A: 'A', B: 'B'}
 * 
 * @param {*} object
 */
export default function mirrorKeys(array = []) {
  return array.reduce((mirror, str) => {
    mirror[str] = str;
    return mirror;
  }, {});
}
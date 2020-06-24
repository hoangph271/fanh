//#region Boolean helpers
/**
 * Get the reversed boolean value, useful for avoiding the "!"
 * @param {any} val value to test against
 * @return {boolean} reversed value of val
 */
const NOT = val => !val

/**
 * Get the inverted version of the given function, useful for things like:
 * const isNOTNumber = invert(isNumber)
 * @param {function} fn
 * @return {function} inverted
 */
const invert = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError(`fn must be a function, received ${typeof fn}`)
  }

  return (...args) => !fn(...args)
}
//#endregion

//#region Function helpers
/**
 * It just an empty function that takes nothing and does nothing
 */
const noOp = () => {}
//#endregion

//#region Timing helpers
/**
 * Return a promise which resolves after ms milliseconds
 * @param {number} ms milliseconds to delay
 * @returns {Promise} resolve when finished delaying
 */
const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))
//#endregion

module.exports = {
  NOT,
  noOp,
  delay,
  invert,
}

//#region Boolean helpers
/**
 * Get the reversed boolean value, useful for avoiding the "!"
 * @param {any} val value to test against
 * @return {boolean} reversed value of val
 */
const NOT = val => !val

/**
 * Returns true if all arguments are true
 * @param  {...any} args
 */
const AND = (...args) => args.every(Boolean)

/**
 * Returns true if any of arguments is true
 * @param  {...any} args
 */
const OR = (...args) => args.some(Boolean)

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

//#region Array helpers
/**
 * Create a new array without duplicated elements
 * @param {Array} items array to deuplicate
 * @return {Array}
 */
const dedupe = items => [...new Set(items)]

/**
 * Find a element which has a field equal to given value
 * @param {Array} items array contains tarrget element
 * @param {string} field target field for comparition
 * @param {string} value string to compare against
 */
const findBy = (items, field, value) => items.find(item => item[field] === value)
//#endregion

module.exports = {
  OR,
  NOT,
  AND,
  noOp,
  delay,
  invert,
  dedupe,
  findBy,
}

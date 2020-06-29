*#WIP*

> 🍣 Fluent and natty henchman 🍣

Hope'll come up with a better phrase.

Yet another JS utility library.

- Boolean utilities
  - `NOT` - Get the reversed boolean value, useful for avoiding the "`!`"
  - `invert` - Get the inverted version of the given function, useful for things like:  
  ```js
  const isNOTNumber = invert(isNumber)
  ```
- Function utilities
  - `noOp` - It just an empty function that takes nothing and does nothing
- Timing utilities
  - `delay` - Return a promise which resolves after some milliseconds
- Array utilities
  - `dedupe` - Create a new array without duplicated elements
  - `findBy` - Find a element which has a field equal to given value
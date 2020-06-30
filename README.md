🍣 *#WIP* 🍣

> Fluent and natty henchman  

Hope'll come up with a better phrase...!

Yet another JS utility library...!

- Boolean utilities
  - `NOT` - Get the reversed boolean value, useful for avoiding the "`!`"
  ```js
  if (NOT(isValid)) {
    // Do this...!
  }
  ```
  - `invert` - Get the inverted version of the given function, useful for things like:  
  ```js
  const isNOTNumber = invert(isNumber)
  ```
- Function utilities
  - `noOp` - It just an empty function that takes nothing and does nothing
  ```js
  const { onSubmit = noOp } = props
  ```
- Timing utilities
  - `delay` - Return a promise which resolves after some milliseconds
  ```js
  await delay(16)
  ```
- Array utilities
  - `dedupe` - Create a new array without duplicated elements
  ```js
  const uniqueNames = dedupe('js', 'sushi', 'js', 'fanh')
  // Result would be: ['js', 'sushi', 'fanh']
  ```
  - `findBy` - Find a element which has a field equal to given value
  ```js
  const fanh = findBy(names, 'name', 'fanh')
  // Result would be an object with name: fanh
  ```
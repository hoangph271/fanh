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
  - `AND` - Returns true if all arguments are true
  ```js
  const isNumber = AND(typeof val === 'number', val === val)
  ```
  - `OR` - Returns true if any of arguments is true
  ```js
  const isNil = OR(val === null, val === undefined)
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
  const fanh = findBy(coders, 'name', 'fanh')
  // Result would be a coder with name: fanh
  ```
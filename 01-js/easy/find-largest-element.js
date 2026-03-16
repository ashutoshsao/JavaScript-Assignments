/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if(!numbers.length) return undefined
  let output = numbers.reduce((max,curr)=>{
    return curr>max ? curr : max
  },-Infinity)
  return output
}

module.exports = findLargestElement;
//  Unique values across all object arrays

let input = { x: [1,2,3], y: [2,3,4], z: [4,5] }

//  expected = [1,2,3,4,5]

let output = [...new Set(Object.values(input).flat())]

console.log(output);
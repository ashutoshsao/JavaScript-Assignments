//  Find the largest value key

let input = { a: 10, b: 50, c: 20 }

//  expected = b

let output = Object.entries(input).reduce((max,curr)=>(curr[1]>max[1])?curr:max)[0]

console.log(output);
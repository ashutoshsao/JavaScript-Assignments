//  Filter object by values > 50

let input = { a: 20, b: 60, c: 40, d: 90 }

//  expected = { b: 60, d: 90 }

let output = Object.fromEntries(
    Object.entries(input).filter(curr=>curr[1]>50)
)

console.log(output);
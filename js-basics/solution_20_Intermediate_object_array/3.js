//  Remove falsy values from object

let input = { a: 0, b: null, c: "hello", d: undefined, e: 5 }

//  expected = { c: "hello", e: 5 }

let output = Object.fromEntries(
    Object.entries(input).filter(([key , val])=>val)
)

console.log(output);
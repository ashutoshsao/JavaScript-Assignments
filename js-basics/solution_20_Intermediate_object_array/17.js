//  Find top N keys by value

let input = { a: 10, b: 50, c: 30, d: 40 } 
let N=2

//  expected = ["b","d"]

let output = Object.entries(input)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,N)
    .map(([key])=>key)

console.log(output);
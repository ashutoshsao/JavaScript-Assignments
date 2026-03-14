//  Swap keys and values of object

let input = { a: "x", b: "y", c: "z" }

//  expected= { x: "a", y: "b", z: "c" }

let output = Object.entries(input).map(([key ,val])=>[val,key]);

console.log(output);
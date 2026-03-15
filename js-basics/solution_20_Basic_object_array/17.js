//  Find common keys between two objects

let obj1 = { a: 1, b: 2, c: 3 } 
let obj2 = { b: 4, c: 5, d: 6 }

//  expected = ["b","c"]

let output = Object.keys(obj1).filter(key=>(key in obj2));

console.log(output);
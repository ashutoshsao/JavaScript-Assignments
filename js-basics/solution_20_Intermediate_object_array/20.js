//  Merge two objects (no sum, override second)

let obj1 = { a: 10, b: 20 }
let obj2 = { a: 5, c: 15 }

//  expected = { a: 5, b: 20, c: 15 }

let output = {
    ...obj1,...obj2
}

console.log(output);
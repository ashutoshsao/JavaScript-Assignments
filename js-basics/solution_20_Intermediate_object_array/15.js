//  Deep merge two nested objects

let obj1 = { a: { x: 1, y: 2 } }
let obj2 = { a: { y: 3, z: 4 } }

//  expected = { a: { x: 1, y: 3, z: 4 } }

let output = {
    ...obj1,
    a:{
        ...obj1.a ,
        ...obj2.a
    }
}

console.log(output);
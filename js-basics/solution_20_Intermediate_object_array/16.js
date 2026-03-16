//  Nested object destructuring

let input = { user: { profile: { name: "Alice", age: 25 } } }

//  expected = Alice 25

let {user:{profile:{name,age}}}=input

console.log(name,age);